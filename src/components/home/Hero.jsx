import React, { useRef, useEffect } from 'react'
import heroBg from '../../assets/images/hero/hero-bg.jpg'
import shape1 from '../../assets/images/hero/shape1.png'
import shape2 from '../../assets/images/hero/shape2.png'
import shape3 from '../../assets/images/hero/shape3.png'
import HeroFilter from './HeroFilter'

export default function Hero() {
  const wrapperRef = useRef(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const elementMove = wrapper.querySelectorAll('.element-move');
    wrapper.addEventListener('mousemove', (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const relativeX = mouseX - rect.left;
      const relativeY = mouseY - rect.top;
      const offsetX = (relativeX - centerX) / 70;
      const offsetY = (relativeY - centerY) / 70;
      elementMove.forEach((img, idx) => {
        const offset = idx + 1;
        img.style.transform = `translate(${offsetX * offset}px, ${offsetY * offset}px)`;
      });
    });
    return () => {
      if (wrapper) wrapper.removeEventListener('mousemove', null);
    };
  }, []);
  return (
    <section
      ref={wrapperRef}
      className="hero-wrapper hero-bg element-wrapper"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Hero Elements  */}
      <div className="hero-elements">
        <img
          className="element element-1 element-move"
          src={shape1}
          alt="shape1"
        />
        <img
          className="element element-2 element-move"
          src={shape2}
          alt="shape2"
        />
        <img
          className="element element-3 element-move"
          src={shape3}
          alt="shape3"
        />
      </div>

      <div className="hero-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto responsive--column-l">
              <div className="hero-content text-center">
                <div className="section-heading">
                  <p className="sub_title">Welcome To TravelVela</p>
                  <h2 className="sec__title">Discover Your Next Journey</h2>
                  <p className="sec__text">
                    More then <span>10,300+</span> most popular destinations
                    package
                  </p>
                </div>
              </div>
            </div>
            {/* end col-lg-12 */}
          </div>
        </div>
        {/* end container */}
      </div>

  {/* Start Hero Filter  */}
  <HeroFilter />
  {/* End Hero Filter  */}
      {/* End Hero Filter  */}
    </section>
  )
}
