import { supabase } from './supabaseClient';

const BUCKET = 'fotografia';
const TABLE = 'photos';

function extensionOf(file) {
    const fromName = file.name && file.name.includes('.') ? file.name.split('.').pop() : null;
    if (fromName) return fromName.toLowerCase();
    const fromType = file.type && file.type.includes('/') ? file.type.split('/').pop() : null;
    return fromType ? fromType.toLowerCase() : 'jpg';
}

export async function savePhoto({ blob, title, date, location }) {
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extensionOf(blob)}`;

    const { error: uploadError } = await supabase
        .storage
        .from(BUCKET)
        .upload(path, blob, { contentType: blob.type || undefined, upsert: false });
    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(path);

    const { data, error } = await supabase
        .from(TABLE)
        .insert({
            title,
            date: date || null,
            location: location || null,
            image_path: path,
            image_url: publicUrl,
        })
        .select()
        .single();

    if (error) {
        // Roll back the uploaded file if the metadata insert failed, so we
        // don't leak orphaned files in storage.
        await supabase.storage.from(BUCKET).remove([path]);
        throw error;
    }

    return data;
}

export async function getPhotos() {
    const { data, error } = await supabase
        .from(TABLE)
        .select('*')
        .order('created_at', { ascending: false });
    if (error) throw error;
    return data ?? [];
}

export async function deletePhoto(id, imagePath) {
    const { error } = await supabase.from(TABLE).delete().eq('id', id);
    if (error) throw error;
    if (imagePath) {
        await supabase.storage.from(BUCKET).remove([imagePath]);
    }
}
