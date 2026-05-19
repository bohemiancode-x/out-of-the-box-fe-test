'use client'
import Cards from './Cards'

const BASE = 'https://raw.githubusercontent.com/alinadrozdyk2/company_landingpage/main/src/assets/CGI'

const explorecards = [
  { heading: 'Health Care',   img: `${BASE}/health.png` },
  { heading: 'Robotics',      img: `${BASE}/robotics.png` },
  { heading: 'Casino Gmae',   img: `${BASE}/casino.png` },
  { heading: 'Construction',  img: `${BASE}/contruction.png` },
  { heading: 'Influencer',    img: `${BASE}/influencer.png` },
  { heading: 'NFT Platform',  img: `${BASE}/NFT.png` },
  { heading: 'Survey',        img: `${BASE}/survey.png` },
  { heading: 'Sports',        img: `${BASE}/sports.png` },
  { heading: 'Shoes',         img: `${BASE}/shoes.png` },
  { heading: 'Portfolio',     img: `${BASE}/portfolio.png` },
]

export default function Explore() {
  return (
    <>
      <div id="case-study" className="container mx-auto relative">
        <div className="flex lg:justify-between justify-center flex-wrap gap-x-20 gap-y-5 items-center text-white px-4 lg:px-20 pt-20 lg:pt-44 mx-20">
          <h1 className="text-3xl order-1 md:order-1 text-white font-semibold">Case Studies</h1>

          <div className="order-3 md:order-2">
            <ul className="flex lg:gap-x-4 gap-x-2 items-center justify-center">
              {['All', 'Fashion', 'Music', 'Video', 'Game', 'Real Estate'].map(f => (
                <li key={f}
                  className="cursor-pointer rounded-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 py-1 px-2 hover:scale-125 duration-200">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 md:order-3">
            <button className="px-6 py-2 bg-[#6318F1] text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150">
              Apply Now
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="lg:block hidden">
          <div className="absolute inset-0 translate-x-[10px] top-32 -z-10 bg-gradient-to-b w-80 rounded-full h-96 blur-3xl from-purple-600 opacity-30 via-purple-500 to-purple-400" />
          <div className="flex flex-wrap gap-x-10 gap-y-10 mt-10 justify-center px-20">
            {explorecards.map((explore, index) => (
              <Cards key={index} img={explore.img} heading={explore.heading} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile scroll */}
      <div className="lg:hidden xs:flex my-5 overflow-x-scroll no-scrollbar hide-scroll-bar">
        <div className="flex flex-nowrap gap-x-12 pt-5 px-8 py-10">
          {explorecards.map((explore, index) => (
            <Cards key={index} img={explore.img} heading={explore.heading} />
          ))}
        </div>
      </div>
    </>
  )
}
