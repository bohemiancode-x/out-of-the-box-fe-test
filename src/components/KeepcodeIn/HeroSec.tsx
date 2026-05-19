'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Cards from './Cards'

const BASE = 'https://raw.githubusercontent.com/alinadrozdyk2/company_landingpage/main/src/assets/CGI'

const slides = [
  { img: `${BASE}/health.png`, heading: 'Web Development' },
  { img: `${BASE}/health.png`, heading: 'Mobile App Development' },
  { img: `${BASE}/health.png`, heading: 'Web Development' },
  { img: `${BASE}/health.png`, heading: 'Web Development' },
  { img: `${BASE}/health.png`, heading: 'Web Development' },
  { img: `${BASE}/health.png`, heading: 'Web Development' },
  { img: `${BASE}/health.png`, heading: 'Web Development' },
]

export default function HeroSec() {
  return (
    <section
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #110D2E 0%, #050023 100%)' }}
    >
      {/* Blur blob */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#6318F1' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
            The Metaverse to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #FC466B, #3F5EFB)' }}
            >
              Diversity &amp; Customized Technology
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Connecting &amp; Linking you to ideal software resources, freeing you to prioritize what truly counts.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="text-white font-semibold px-7 py-3 rounded-full text-sm transition-transform hover:scale-105"
              style={{ background: '#6318F1' }}
            >
              Join Now
            </button>
            <button
              className="text-white font-semibold px-7 py-3 rounded-full text-sm border border-white/20 transition-transform hover:scale-105"
              style={{ background: '#35314D' }}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Right — Swiper coverflow */}
        <div className="w-full py-8">
          <style>{`
            .swiper_container { padding-bottom: 40px !important; }
            .swiper_container .swiper-pagination-bullet { background: #ffffff40; width: 8px; height: 8px; }
            .swiper_container .swiper-pagination-bullet-active { background: #6318F1; width: 20px; border-radius: 4px; }
            .swiper_container .swiper-button-prev,
            .swiper_container .swiper-button-next { color: white; }
            .swiper_container .swiper-button-prev::after,
            .swiper_container .swiper-button-next::after { font-size: 18px; }
          `}</style>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={2}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container shadow-xl"
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <Cards img={s.img} heading={s.heading} />
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow" />
              <div className="swiper-button-next slider-arrow" />
              <div className="swiper-pagination" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
