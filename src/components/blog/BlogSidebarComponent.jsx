import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCategories from './BlogCategories';
import { api } from '../../services/apiClient';
import './BlogSidebarComponent.css';

// Ensure absolute URLs for images returned as relative paths like "uploads/blog/..."
const toAbsoluteUrl = (url) => {
    if (!url) return null;
    if (/^https?:\/\//i.test(url)) return url;
    return `https://admin.travelvela.com/${String(url).replace(/^\/+/, '')}`;
};

// Simple date formatter like "JUNE 09, 2025"
const formatDate = (iso) => {
    if (!iso) return '';
    // Normalize common "YYYY-MM-DD HH:MM:SS" to ISO
    const norm = typeof iso === 'string' && iso.includes(' ') && !iso.includes('T') ? iso.replace(' ', 'T') : iso;
    const d = new Date(norm);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { month: 'long', day: '2-digit', year: 'numeric' }).toUpperCase();
};

// Normalize various backend shapes
const normalizeBlog = (b) => ({
    id: b?.id ?? b?._id ?? b?.slug ?? Math.random().toString(36).slice(2),
    slug: b?.slug ?? b?.id ?? b?._id ?? null,
    title: b?.title ?? b?.name ?? 'Untitled',
    image: toAbsoluteUrl(b?.image ?? b?.cover_image ?? b?.thumbnail ?? b?.featured_image) || 'images/blog/2.png',
    category: b?.category_name ?? b?.category?.name ?? b?.category ?? (Array.isArray(b?.categories) ? (b.categories[0]?.name || b.categories[0]) : null) ?? 'Blog',
    date: b?.entry_date ?? b?.created_at ?? b?.date ?? b?.published_at ?? null,
    excerpt: b?.excerpt ?? b?.short_description ?? '',
    author: b?.author?.name ?? b?.author ?? 'TravelVela',
    content: b?.content ?? b?.description ?? b?.body ?? '',
});

const BlogSidebarComponent = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 6; // cards per Load More
    const [total, setTotal] = useState(null);
    const [lastPage, setLastPage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null); // slug or null

    useEffect(() => {
        let mounted = true;
        (async () => {
            setLoading(true);
            setError(null);
            try {
                // Endpoint depends on category selection
                const endpoint = selectedCategory
                    ? `/get/blogs/categorywise/${encodeURIComponent(selectedCategory)}`
                    : '/get/blog/list';
                // Try server-side pagination; if API ignores, we still slice client-side
                const res = await api.get(endpoint, { params: { page, per_page: pageSize, limit: pageSize } });
                const payload = res?.data;
                // Possible shapes: {data:[], total}, {data:{data:[], total}}, []
                const list = Array.isArray(payload)
                    ? payload
                    : Array.isArray(payload?.data)
                        ? payload.data
                        : Array.isArray(payload?.data?.data)
                            ? payload.data.data
                            : [];
                const newItems = list.map(normalizeBlog);
                const newTotal = (payload?.total ?? payload?.data?.total ?? payload?.meta?.total ?? null);
                const newLastPage = (payload?.last_page ?? payload?.data?.last_page ?? null);
                if (mounted) {
                    // Append and dedupe by id/slug
                    setBlogs((prev) => {
                        const map = new Map(prev.map((b) => [b.id, b]));
                        newItems.forEach((b) => { if (!map.has(b.id)) map.set(b.id, b); });
                        return Array.from(map.values());
                    });
                    if (typeof newTotal === 'number') setTotal(newTotal);
                    if (typeof newLastPage === 'number') setLastPage(newLastPage);
                }
            } catch (err) {
                if (mounted) setError(err?.response?.data?.message || err.message || 'Failed to load blogs');
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false; };
    }, [page, selectedCategory]);

    // Reset when category changes
    useEffect(() => {
        setBlogs([]);
        setPage(1);
        setTotal(null);
    setLastPage(null);
    }, [selectedCategory]);

    const visibleBlogs = useMemo(() => {
        // If server paged, blogs already represents loaded pages; otherwise slice client-side
        const count = page * pageSize;
        return blogs.slice(0, count);
    }, [blogs, page]);

    const canLoadMore = useMemo(() => {
        if (typeof lastPage === 'number') return page < lastPage;
        if (typeof total === 'number') return blogs.length < total; // server total known
        return blogs.length >= page * pageSize; // optimistic if we always got full page
    }, [blogs.length, page, pageSize, total, lastPage]);

    const handleLoadMore = () => {
        if (loading) return;
        setPage((p) => p + 1);
    };

    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb-area bread-bg-9">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="breadcrumb-content">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">Blog Sidebar</h2>
                                    </div>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-6 */}
                            <div className="col-lg-6">
                                <div className="breadcrumb-list text-end">
                                    <ul className="list-items">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Blog</li>
                                        <li>Blog Sidebar</li>
                                    </ul>
                                </div>
                                {/* end breadcrumb-list */}
                            </div>
                            {/* end col-lg-6 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end breadcrumb-wrap */}
                <div className="bread-svg-box">
                    <svg className="bread-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <polygon points="100 0 50 10 0 0 0 10 100 10" />
                    </svg>
                </div>
                {/* end bread-svg */}
            </section>

            <section className="card-area blog-page section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                {loading && (
                                    <div className="col-12"><p className="text-muted">Loading posts...</p></div>
                                )}
                                {error && (
                                    <div className="col-12"><p className="text-danger">{error}</p></div>
                                )}
                                {!loading && !error && visibleBlogs.length === 0 && (
                                    <div className="col-12"><p className="text-muted">No posts found.</p></div>
                                )}
                                {visibleBlogs.map((b, idx) => (
                                    <div className="col-lg-6 col-12" key={b.id || idx}>
                                        <div className={`blog__card ${idx < 2 ? 'mt-0' : ''}`}>
                                            <div className="blog__cover">
                                                <img src={b.image} alt={b.title} onError={(e)=>{e.currentTarget.src='images/blog/2.png';}} />
                                            </div>
                                            <div className="blog__content">
                                                <div className="blog__meta">
                                                    <span className="category">{b.category || 'Blog'}</span>
                                                    {b.date && <span className="date">{formatDate(b.date)}</span>}
                                                </div>
                                                <h3 className="card-title">
                                                    <Link to={`/blog-single/${b.slug || b.id}`} state={{ blog: b }}>
                                                        {b.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="btn-box mt-3 text-center">
                                        {canLoadMore && (
                                            <button type="button" className="theme-btn" onClick={handleLoadMore} disabled={loading}>
                                                <i className="la la-refresh me-1" />{loading ? 'Loading...' : 'Load More'}
                                            </button>
                                        )}
                                        <p className="font-size-13 pt-2">
                                            {(() => {
                                                const shown = visibleBlogs.length;
                                                const tot = typeof total === 'number' ? total : Math.max(blogs.length, shown);
                                                if (shown === 0) return 'No posts';
                                                return `Showing 1 - ${shown} of ${tot} Posts`;
                                            })()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-8 */}
                        <div className="col-lg-4">
                            <div className="sidebar mb-0">
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Search Post</h3>
                                    <div className="contact-form-action">
                                        <form action="#">
                                            <div className="input-box">
                                                <div className="form-group mb-0">
                                                    <input className="form-control ps-3" type="text" placeholder="Type your keywords..." />
                                                    <button className="search-btn" type="submit">
                                                        <i className="la la-search" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                                                <BlogCategories
                                                                    id="categoryMenuSidebar"
                                                                    selectedSlug={selectedCategory}
                                                                    onSelect={(slug) => setSelectedCategory(slug)}
                                                                />
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <div className="section-tab section-tab-2 pb-3">
                                        <ul className="nav nav-tabs justify-content-center" id="myTab3" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link" id="recent-tab" data-bs-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="true">
                                                    Recent
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" id="popular-tab" data-bs-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="false">
                                                    Popular
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="new-tab" data-bs-toggle="tab" href="#new" role="tab" aria-controls="new" aria-selected="false">
                                                    New
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img4.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">Pack wisely before traveling</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img5.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">Change your place and get the fresh air</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card mb-0">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img6.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">Introducing this amazing city</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                        </div>
                                        {/* end tab-pane */}
                                        <div className="tab-pane fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img7.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">The Castle on the Cliff: Majestic, Magic</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img8.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">Change your place and get the fresh air</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card mb-0">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img9.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">All Aboard the Rocky Mountaineer</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                        </div>
                                        {/* end tab-pane */}
                                        <div className="tab-pane" id="new" role="tabpanel" aria-labelledby="new-tab">
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img7.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">The Castle on the Cliff: Majestic, Magic</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img8.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">Change your place and get the fresh air</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                            <div className="card-item card-item-list recent-post-card mb-0">
                                                <div className="card-img">
                                                    <a href="blog-single.html" className="d-block">
                                                        <img src="images/small-img9.jpg" alt="blog-img" />
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">
                                                        <a href="blog-single.html">All Aboard the Rocky Mountaineer</a>
                                                    </h3>
                                                    <p className="card-meta">
                                                        <span className="post__date"> 1 March, 2020</span>
                                                        <span className="post-dot" />
                                                        <span className="post__time">3 Mins read</span>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* end card-item */}
                                        </div>
                                        {/* end tab-pane */}
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Archives</h3>
                                    <div className="sidebar-list">
                                        <ul className="list-items">
                                            <li>
                                                <i className="la la-dot-circle me-2 text-color" /><a href="#">June 2015</a>
                                            </li>
                                            <li>
                                                <i className="la la-dot-circle me-2 text-color" /><a href="#">May 2016</a>
                                            </li>
                                            <li>
                                                <i className="la la-dot-circle me-2 text-color" /><a href="#">April 2017</a>
                                            </li>
                                            <li>
                                                <i className="la la-dot-circle me-2 text-color" /><a href="#">February 2019</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Tag Cloud</h3>
                                    <ul className="tag-list">
                                        <li><a href="#">Travel</a></li>
                                        <li><a href="#">Adventure</a></li>
                                        <li><a href="#">Tour</a></li>
                                        <li><a href="#">Nature</a></li>
                                        <li><a href="#">Island</a></li>
                                        <li><a href="#">Parks</a></li>
                                        <li><a href="#">Cruise</a></li>
                                        <li><a href="#">Mountains</a></li>
                                        <li><a href="#">Tulips</a></li>
                                        <li><a href="#">Museums</a></li>
                                        <li><a href="#">Beaches</a></li>
                                        <li><a href="#">Cultural</a></li>
                                        <li><a href="#">National</a></li>
                                    </ul>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">About us</h3>
                                    <div className="sidebar-about">
                                        <div className="sidebar-about-img">
                                            <img src="images/destination-img3.jpg" alt />
                                            <p className="font-size-28 font-weight-bold text-white">
                                                TravelVela
                                            </p>
                                        </div>
                                        <p className="pt-3">
                                            Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem eaque ipsa quae ab illo inventore incididunt ut
                                            labore et dolore magna
                                        </p>
                                    </div>
                                </div>
                                {/* end sidebar-widget */}
                                <div className="sidebar-widget">
                                    <h3 className="title stroke-shape">Follow &amp; Connect</h3>
                                    <ul className="social-profile">
                                        <li>
                                            <a href="#"><i className="lab la-facebook-f" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="lab la-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                </div>
                                {/* end sidebar-widget */}
                            </div>
                            {/* end sidebar */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

        </>
    );
};

export default BlogSidebarComponent;