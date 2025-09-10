import React, { useEffect } from 'react';

const GalleryComponent = () => {
    useEffect(() => {
        // Initialize Masonry layout
        const initMasonry = () => {
            if (window.Masonry) {
                const masonryContainer = document.querySelector('.grid-masonry');
                if (masonryContainer) {
                    new window.Masonry(masonryContainer, {
                        itemSelector: '.grid-masonry-item',
                        columnWidth: '.grid-masonry-item',
                        percentPosition: true
                    });
                }
            }
        };

        // Initialize Fancybox for lightbox functionality
        const initFancybox = () => {
            if (window.Fancybox) {
                window.Fancybox.bind('[data-fancybox="gallery"]', {
                    // Fancybox options
                    Carousel: {
                        infinite: false,
                    },
                });
            }
        };

        // Load scripts if not already loaded
        const loadScripts = () => {
            const scripts = [
                { src: '/js/masonry-4.2.2.min.js', check: () => window.Masonry },
                { src: '/js/jquery.fancybox.min.js', check: () => window.Fancybox }
            ];

            let loadedCount = 0;
            scripts.forEach(script => {
                if (script.check()) {
                    loadedCount++;
                    if (loadedCount === scripts.length) {
                        setTimeout(() => {
                            initMasonry();
                            initFancybox();
                        }, 100);
                    }
                } else {
                    const scriptElement = document.createElement('script');
                    scriptElement.src = script.src;
                    scriptElement.onload = () => {
                        loadedCount++;
                        if (loadedCount === scripts.length) {
                            setTimeout(() => {
                                initMasonry();
                                initFancybox();
                            }, 100);
                        }
                    };
                    document.head.appendChild(scriptElement);
                }
            });
        };

        // Wait for images to load before initializing masonry
        const images = document.querySelectorAll('.gallery-card img');
        let loadedImages = 0;
        
        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                loadScripts();
            }
        };

        images.forEach(img => {
            if (img.complete) {
                onImageLoad();
            } else {
                img.addEventListener('load', onImageLoad);
                img.addEventListener('error', onImageLoad); // Handle broken images
            }
        });

        // If no images, just load scripts
        if (images.length === 0) {
            loadScripts();
        }

        return () => {
            // Cleanup
            if (window.Fancybox) {
                window.Fancybox.destroy();
            }
        };
    }, []);

    return (
        <>
            {/* ================================
      START BREADCRUMB AREA
      ================================= */}
            <section className="breadcrumb-area bread-bg-10">
                <div className="breadcrumb-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-content text-center">
                                    <div className="section-heading">
                                        <h2 className="sec__title text-white">
                                            Discover TravelVela's Luxury Living
                                        </h2>
                                    </div>
                                    <span className="arrow-blink">
                                        <i className="la la-arrow-down"></i>
                                    </span>
                                </div>
                                {/* end breadcrumb-content */}
                            </div>
                            {/* end col-lg-12 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
                {/* end breadcrumb-wrap */}
                <div className="bread-svg-box">
                    <svg
                        className="bread-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
                    </svg>
                </div>
                {/* end bread-svg */}
            </section>
            {/* end breadcrumb-area */}
            {/* ================================
      END BREADCRUMB AREA
      ================================= */}

            {/* ================================
      START GALLERY AREA
      ================================= */}
            <section className="gallery-area section-bg section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Gallery Masonry</h2>
                                <p className="sec__desc pt-2">
                                    We used bootstrap grid layout format You can change grid format
                                    from 2 to 5 responsive-columns
                                </p>
                            </div>
                            {/* end section-heading */}
                        </div>
                        {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                    <div className="row padding-top-50px grid-masonry">
                        <div className="grid-masonry-item grid-masonry-item-width-1 col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img5.jpg" data-caption="Showing image 1">
                                    <img src="images/img5.jpg" alt="Gallery image 1" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item grid-masonry-item-width-2 col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img29.jpg" data-caption="Showing image 2">
                                    <img src="images/img29.jpg" alt="Gallery image 2" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img30.jpg" data-caption="Showing image 3">
                                    <img src="images/img30.jpg" alt="Gallery image 3" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item grid-masonry-item-width-3 col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img31.jpg" data-caption="Showing image 4">
                                    <img src="images/img31.jpg" alt="Gallery image 4" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img32.jpg" data-caption="Showing image 5">
                                    <img src="images/img32.jpg" alt="Gallery image 5" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item grid-masonry-item-width-4 col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img33.jpg" data-caption="Showing image 6">
                                    <img src="images/img33.jpg" alt="Gallery image 6" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                        <div className="grid-masonry-item col-lg-4">
                            <div className="gallery-card">
                                <a className="d-block" data-fancybox="gallery" href="images/img34.jpg" data-caption="Showing image 7">
                                    <img src="images/img34.jpg" alt="Gallery image 7" />
                                </a>
                            </div>
                            {/* end card-item */}
                        </div>
                        {/* end col-lg-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

            {/* end gallery-area */}
            {/* ================================
      END GALLERY AREA
      ================================= */}
        </>
    );
};

export default GalleryComponent;
