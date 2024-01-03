"use client"
import React from "react"
import { useInView } from "react-intersection-observer"

export const ProgressBar: React.FC<ProgressBarType> = ({ title, value, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const delay = `${(index ? index : 1) * 20}ms`
  return (
    <div className={"w-full flex flex-col gap-2 my-5 justify-center items-center sm:flex-row sm:gap-8"}>
      <h4 className={"basis-1/6 text-right text-xl font-bold 2xl:text-2xl 3xl:text-3xl"}>{title}</h4>
      <div className={"flex w-full grow h-3 items-center pt-1 sm:basis-4/6"}>
        <div
          ref={ref}
          className={"h-3 border-buttons rounded-sm bg-buttons transition-[flex-basis] duration-[1200ms] ease-in-out"}
          style={{
            flexBasis: `${inView ? value : 0}%`,
            transitionDelay: delay + 2400,
          }}
        />
        <div
          ref={ref}
          className={"h-3 rounded-r-sm bg-buttonsTransparent transition-[flex-basis] duration-[2500ms] ease-in-out"}
          style={{
            flexBasis: `${inView ? 100 - value : 0}%`,
            transitionDelay: delay + 1200,
          }}
        />
      </div>
    </div>
  )
}
