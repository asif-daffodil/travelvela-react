import React, { useEffect, useMemo, useState } from 'react';
import { api } from '../../services/apiClient';

const BlogCategories = ({ id = 'categoryMenu', title = 'Categories', onSelect = () => {}, selectedSlug = null }) => {
  const collapseId = id;
  const href = `#${collapseId}`;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get('/get/blog/categories');
        const payload = res?.data;
        const data = Array.isArray(payload) ? payload : (payload?.data ?? []);
        if (mounted) setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) setError(err?.response?.data?.message || err.message || 'Failed to load categories');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const getName = (c) => c?.name || c?.title || c?.category || 'Unnamed';
  const getSlug = (c) => c?.slug || c?.seo_slug || c?.seo_url || c?.id || null;
  const getCount = (c) => {
    const val = c?.count ?? c?.posts_count ?? c?.total;
    return typeof val === 'number' ? val : null;
  };
  const totalCount = useMemo(() => {
    const withCounts = categories.map(getCount).filter((n) => typeof n === 'number');
    if (withCounts.length === categories.length && withCounts.length > 0) {
      return withCounts.reduce((a, b) => a + b, 0);
    }
    return categories.length;
  }, [categories]);

  const visibleCount = 5;
  const visible = categories.slice(0, visibleCount);
  const hidden = categories.slice(visibleCount);

  return (
    <div className="sidebar-widget">
      <h3 className="title stroke-shape">{title}</h3>
      <div className="sidebar-category">
        {loading && (
          <p className="font-size-14 text-muted mb-2">Loading categories...</p>
        )}
        {error && (
          <p className="font-size-14 text-danger mb-2">{error}</p>
        )}

        {/* All category summary */}
        <div className="custom-checkbox">
          <input
            type="radio"
            className="form-check-input"
            name={`${collapseId}-cats`}
            id={`${collapseId}-cat-all`}
            checked={!selectedSlug}
            onChange={() => onSelect(null)}
          />
          <label htmlFor={`${collapseId}-cat-all`} onClick={() => onSelect(null)}>
            All <span className="font-size-13 ms-1">({totalCount})</span>
          </label>
        </div>

        {/* Visible categories */}
        {visible.map((c, idx) => {
          const cid = `${collapseId}-cat-${idx + 1}`;
          const count = getCount(c);
          return (
            <div className="custom-checkbox" key={cid}>
              <input
                type="radio"
                className="form-check-input"
                name={`${collapseId}-cats`}
                id={cid}
                checked={selectedSlug === getSlug(c)}
                onChange={() => onSelect(getSlug(c))}
              />
              <label htmlFor={cid} onClick={() => onSelect(getSlug(c))}>
                {getName(c)}{typeof count === 'number' && (
                  <span className="font-size-13 ms-1">({count})</span>
                )}
              </label>
            </div>
          );
        })}

        {/* Hidden categories in collapse */}
        {hidden.length > 0 && (
          <div className="collapse" id={collapseId}>
            {hidden.map((c, idx) => {
              const cid = `${collapseId}-cat-${visible.length + idx + 1}`;
              const count = getCount(c);
              return (
                <div className="custom-checkbox" key={cid}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name={`${collapseId}-cats`}
                    id={cid}
                    checked={selectedSlug === getSlug(c)}
                    onChange={() => onSelect(getSlug(c))}
                  />
                  <label htmlFor={cid} onClick={() => onSelect(getSlug(c))}>
                    {getName(c)}{typeof count === 'number' && (
                      <span className="font-size-13 ms-1">({count})</span>
                    )}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {/* end collapse */}
        {hidden.length > 0 && (
          <a className="btn-text" data-bs-toggle="collapse" href={href} role="button" aria-expanded="false" aria-controls={collapseId}>
            <span className="show-more">Show More <i className="la la-angle-down" /></span>
            <span className="show-less">Show Less <i className="la la-angle-up" /></span>
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogCategories;
