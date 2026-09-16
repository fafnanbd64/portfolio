import React, { useState, useEffect, useRef, useCallback } from 'react';
import './fotografia.css';
import { savePhoto, getPhotos, deletePhoto } from '../../utils/fotoDB';
import { signIn, signOut, onAuthChange } from '../../utils/auth';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return new Date(y, m - 1, d).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
    });
};

const Fotografia = ({ onBack }) => {
    const [photos, setPhotos] = useState([]);
    const [loadError, setLoadError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ title: '', date: '', location: '' });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [saving, setSaving] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const fileRef = useRef();

    const [session, setSession] = useState(undefined); // undefined = still checking
    const [showLogin, setShowLogin] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);
    const isOwner = !!session;

    useEffect(() => onAuthChange(setSession), []);

    const loadPhotos = useCallback(async () => {
        try {
            const data = await getPhotos();
            setPhotos(data.map(p => ({ ...p, url: p.image_url })));
            setLoadError(null);
        } catch (err) {
            setLoadError('could not load photos — check your connection and try again');
        }
    }, []);

    useEffect(() => {
        loadPhotos();
    }, [loadPhotos]);

    const pickFile = (f) => {
        if (!f || !f.type.startsWith('image/')) return;
        if (preview) URL.revokeObjectURL(preview);
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        pickFile(e.dataTransfer.files[0]);
    };

    const closeModal = () => {
        setShowModal(false);
        setForm({ title: '', date: '', location: '' });
        if (preview) URL.revokeObjectURL(preview);
        setFile(null);
        setPreview(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !isOwner) return;
        setSaving(true);
        try {
            await savePhoto({
                blob: file,
                title: form.title,
                date: form.date,
                location: form.location,
            });
            closeModal();
            await loadPhotos();
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('[fotografia] save failed:', err);
            // eslint-disable-next-line no-alert
            alert(`could not save the photo — ${err.message || 'please try again'}`);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        if (!isOwner) return;
        const photo = photos.find(p => p.id === id);
        try {
            await deletePhoto(id, photo?.image_path);
            if (lightbox?.id === id) setLightbox(null);
            await loadPhotos();
        } catch (err) {
            // eslint-disable-next-line no-alert
            alert('could not delete the photo — please try again');
        }
    };

    const closeLogin = () => {
        setShowLogin(false);
        setLoginForm({ email: '', password: '' });
        setLoginError('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        setLoginError('');
        try {
            await signIn(loginForm.email, loginForm.password);
            closeLogin();
        } catch (err) {
            setLoginError('wrong email or password');
        } finally {
            setLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="foto">
            {/* ── Top bar ── */}
            <header className="foto__header">
                <button className="foto__back" onClick={onBack}>
                    <i className="uil uil-arrow-left"></i>
                    back
                </button>

                <div className="foto__brand">
                    <span className="foto__brand-logo">F<span>.</span>Kamal</span>
                    <span className="foto__brand-sub">fotografia</span>
                </div>

                {isOwner ? (
                    <div className="foto__owner-actions">
                        <button className="foto__upload-btn" onClick={() => setShowModal(true)}>
                            <i className="uil uil-image-plus"></i>
                            upload
                        </button>
                        <button className="foto__signout-btn" onClick={handleLogout} title="sign out">
                            <i className="uil uil-signout"></i>
                        </button>
                    </div>
                ) : (
                    <button className="foto__signin-btn" onClick={() => setShowLogin(true)} title="owner sign in">
                        <i className="uil uil-lock"></i>
                    </button>
                )}
            </header>

            {/* ── Body ── */}
            <div className="foto__body">
                <div className="foto__intro">
                    <h1 className="foto__title">Fotographia</h1>
                    <p className="foto__subtitle">moments · places · frames</p>
                </div>

                {loadError && <p className="foto__error">{loadError}</p>}

                {photos.length === 0 ? (
                    <div className="foto__empty">
                        <i className="uil uil-camera-slash"></i>
                        <p>no photos yet{isOwner ? ' — upload your first moment' : ''}</p>
                        {isOwner && (
                            <button className="foto__upload-btn" onClick={() => setShowModal(true)}>
                                <i className="uil uil-image-plus"></i>
                                upload photo
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="foto__grid">
                        {photos.map(photo => (
                            <div
                                key={photo.id}
                                className="foto__card"
                                onClick={() => setLightbox(photo)}
                            >
                                <img src={photo.url} alt={photo.title} className="foto__img" />
                                <div className="foto__card-overlay">
                                    {isOwner && (
                                        <button
                                            className="foto__delete"
                                            onClick={(e) => handleDelete(e, photo.id)}
                                            title="delete"
                                        >
                                            <i className="uil uil-trash-alt"></i>
                                        </button>
                                    )}
                                    <div className="foto__card-meta">
                                        <h3 className="foto__card-title">{photo.title}</h3>
                                        <div className="foto__card-details">
                                            {photo.location && (
                                                <span>
                                                    <i className="uil uil-location-pin-alt"></i>
                                                    {photo.location}
                                                </span>
                                            )}
                                            {photo.date && (
                                                <span>
                                                    <i className="uil uil-calendar-alt"></i>
                                                    {formatDate(photo.date)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Upload modal ── */}
            {showModal && isOwner && (
                <div
                    className="foto__backdrop"
                    onClick={(e) => e.target === e.currentTarget && closeModal()}
                >
                    <div className="foto__modal">
                        <div className="foto__modal-head">
                            <h2>add a moment</h2>
                            <button onClick={closeModal}>
                                <i className="uil uil-times"></i>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div
                                className={[
                                    'foto__dropzone',
                                    dragOver ? 'foto__dropzone--over' : '',
                                    preview ? 'foto__dropzone--filled' : '',
                                ].join(' ')}
                                onClick={() => fileRef.current.click()}
                                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={handleDrop}
                            >
                                {preview ? (
                                    <img src={preview} alt="preview" className="foto__dz-preview" />
                                ) : (
                                    <>
                                        <i className="uil uil-image-upload"></i>
                                        <p>drag &amp; drop or click to pick</p>
                                        <span>jpg · png · webp · heic</span>
                                    </>
                                )}
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => pickFile(e.target.files[0])}
                                />
                            </div>

                            <div className="foto__fields">
                                <input
                                    type="text"
                                    placeholder="title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    required
                                />
                                <input
                                    type="date"
                                    value={form.date}
                                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="location  (optional)"
                                    value={form.location}
                                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                                />
                            </div>

                            <div className="foto__modal-actions">
                                <button type="button" className="foto__btn-cancel" onClick={closeModal}>
                                    cancel
                                </button>
                                <button
                                    type="submit"
                                    className="foto__btn-save"
                                    disabled={!file || saving}
                                >
                                    {saving ? 'saving…' : 'add photo'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Owner sign-in modal ── */}
            {showLogin && (
                <div
                    className="foto__backdrop"
                    onClick={(e) => e.target === e.currentTarget && closeLogin()}
                >
                    <div className="foto__modal">
                        <div className="foto__modal-head">
                            <h2>owner sign in</h2>
                            <button onClick={closeLogin}>
                                <i className="uil uil-times"></i>
                            </button>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="foto__fields">
                                <input
                                    type="email"
                                    placeholder="email"
                                    value={loginForm.email}
                                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                    autoComplete="username"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={loginForm.password}
                                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            {loginError && <p className="foto__error">{loginError}</p>}

                            <div className="foto__modal-actions">
                                <button type="button" className="foto__btn-cancel" onClick={closeLogin}>
                                    cancel
                                </button>
                                <button type="submit" className="foto__btn-save" disabled={loggingIn}>
                                    {loggingIn ? 'signing in…' : 'sign in'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Lightbox ── */}
            {lightbox && (
                <div
                    className="foto__lightbox"
                    onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
                >
                    <button className="foto__lb-close" onClick={() => setLightbox(null)}>
                        <i className="uil uil-times"></i>
                    </button>
                    <img src={lightbox.url} alt={lightbox.title} className="foto__lb-img" />
                    <div className="foto__lb-info">
                        <h3>{lightbox.title}</h3>
                        <div className="foto__lb-meta">
                            {lightbox.location && (
                                <span>
                                    <i className="uil uil-location-pin-alt"></i>
                                    {lightbox.location}
                                </span>
                            )}
                            {lightbox.date && (
                                <span>
                                    <i className="uil uil-calendar-alt"></i>
                                    {formatDate(lightbox.date)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Fotografia;
