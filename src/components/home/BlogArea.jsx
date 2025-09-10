import React from 'react';

export default function BlogArea() {
  const posts = [
    { id: 1, img: '/images/blog/1.png', category: 'TRAVEL', date: 'APRIL 26, 2025', title: 'He Art of Adventure Exploring Uncharted Destinations', link: 'blog-single.html' },
    { id: 2, img: '/images/blog/2.png', category: 'WELLNESS', date: 'JUNE 09, 2025', title: `Mind Matters Navigating Mental Wellness in Today's World`, link: 'blog-single.html' },
    { id: 3, img: '/images/blog/3.png', category: 'TRIPS', date: 'JANUARY 26, 2025', title: 'Roaming Routes Adventures in Every Corner of the World', link: 'blog-single.html' }
  ];

  return (
    <section className="blog section-gap position-relative">
      <div className="container bx-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6 col-12">
            <div className="theme-section-head text-center">
              <span> Our News & Blog </span>
              <h3>Blog For Travel Updates</h3>
            </div>
          </div>
        </div>

        <div className="blog__wrapper">
          <div className="featured-blog">
            <div className="blog__card">
              <div className="blog__cover">
                <img src={posts[0].img} alt="blog" />
              </div>
              <div className="blog__content">
                <div className="blog__meta">
                  <a href="blog-sidebar.html" className="category">{posts[0].category}</a>
                  <span className="date">{posts[0].date}</span>
                </div>
                <a className="title m-0" href={posts[0].link}>{posts[0].title}</a>
                <div className="blog__content-btn">
                  <a href={posts[0].link}>Read More<i className="la la-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-list">
            {posts.slice(1).map(post => (
              <div key={post.id} className="blog__card">
                <div className="blog__cover">
                  <img src={post.img} alt="blog" />
                </div>
                <div className="blog__content">
                  <div className="blog__meta">
                    <a href="blog-sidebar.html" className="category">{post.category}</a>
                    <span className="date">{post.date}</span>
                  </div>
                  <a className="title" href={post.link}>{post.title}</a>
                  <div className="blog__content-btn">
                    <a href={post.link}>Read More<i className="la la-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-bottom">
          <a href="blog-sidebar.html" className="theme-btn">View More</a>
        </div>
      </div>
    </section>
  );
}
