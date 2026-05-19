'use client'
import { Marquee } from '@devnomic/marquee'
import '@devnomic/marquee/dist/index.css'
import { TbBrandRedux } from 'react-icons/tb'
import TechCards from './TechCards'

const items = [
  'Redux', 'PHP', 'Laravel', 'React', 'WordPress', 'Graphics', 'Animations', 'Nodejs', 'Redux',
]

export default function MarqueeSection() {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center py-4 mt-10">
        <h1 className="text-3xl font-semibold text-white text-center">
          Skilled across 25+ updated tech stacks
        </h1>
      </div>
      <div className="flex flex-col gap-y-5 py-10 bg-[#0d0924]">
        <Marquee
          fade
          direction="left"
          numberOfCopies={3}
          reverse={false}
          pauseOnHover
        >
          {items.map((title, i) => (
            <TechCards key={i} icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title={title} />
          ))}
        </Marquee>
        <Marquee
          fade
          direction="left"
          reverse
          numberOfCopies={3}
          pauseOnHover
        >
          {items.map((title, i) => (
            <TechCards key={i} icon={<TbBrandRedux className="h-10 w-10 text-gray-300" />} title={title} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
