"use client";

import React from 'react'
import Title from '../Title/Title'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from './data';
const Experience = () => {
  return (
    <section id="experience" className="mt-[5rem] pt-[5rem] text-black scroll-mt-28 mb-28 sm:mb-40 ">
      <Title title={"Experience"}/>
      <VerticalTimeline
      // animate={'true'}
      lineColor={ '#9ca3af' }
      >
          {
            experiencesData.map((item,index)=>(
              <React.Fragment key={index}>
                <VerticalTimelineElement
                contentStyle={{
                  background:'#f3f4f6',
                  boxShadow:'none',
                  border:"0.5px solid rgba(0,0,0,0.05)",
                  textAlign:"left",
                  padding:"1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:"0.4rem solid #9ca3af"
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:"#000",
                  fontSize:"1.5rem",
                  color:'#fff'
                }}
                >
                 <h3 className='font-semibold capitalize text-lg'>
                  {item.title}
                 </h3>
                 <p className='!mt-0 font-semibold '>
                  {item.location}
                 </p>
                 <p className='!mt-1 font-bodyFont text font-semibold text-sm text-slate-600 '>
                  {item.description}
                 </p>
                 </VerticalTimelineElement>
              </React.Fragment>
            ))
          }
      </VerticalTimeline>
    </section>
  )
}

export default Experience