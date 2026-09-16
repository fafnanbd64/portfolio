import { supabase } from './supabaseClient';

// There is no sign-up flow in the UI on purpose — only the site owner has an
// account, created manually in the Supabase dashboard. This just wraps the
// sign-in/sign-out/session calls the Fotografia page needs.

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.session;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
}

// Calls `callback(session)` immediately with the current session and again
// on every future change. Returns an unsubscribe function.
export function onAuthChange(callback) {
    getSession().then(callback);
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        callback(session);
    });
    return () => subscription.unsubscribe();
}
