import React from "react"
import { TextH3 } from "@/ui/components/texts/TextH3"
import { TextWithSquare } from "@/ui/components/texts/TextWithSquare"
import girl from "../../images/girl.png"
import { Timeline } from "@/ui/components/Timeline"
import { timeline } from "@/constants/resume"

export default function Resume() {
  return (
    <main className={"flex flex-col items-center"}>
      <TextWithSquare>
        <TextH3 className={"!text-buttons px-3.5"}>Resume</TextH3>
      </TextWithSquare>
      <div className="w-full m-7">
        <div className="mx-auto flex flex-col justify-end items-center xl:flex-row my-10 xl:my-16 ">
          <img alt={"developer girl"} className="hidden w-1/3 xl:block" src={girl.src} />
          <Timeline timelineInfo={timeline.timelineInfo} />
        </div>
      </div>
    </main>
  )
}
