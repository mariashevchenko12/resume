"use client"
import React from "react"
import { TextH3 } from "@/ui/components/texts/TextH3"
import { TextWithSquare } from "@/ui/components/texts/TextWithSquare"
import map from "lodash/map"
import { ProgressBar } from "@/ui/components/ProgressBar"
import { languagesItems, skillsItems } from "@/constants/skills"

export default function Skills() {
  return (
    <main className={"w-full flex flex-col items-center"}>
      <TextWithSquare>
        <TextH3 className={"!text-buttons px-3.5 w-44 xxs:w-fit"}>Skills</TextH3>
      </TextWithSquare>
      <div className={"w-4/5 my-5 px-0 justify-center xl:px-40 2xl:w-2/3"}>
        {map(skillsItems, (item, index) => (
          <ProgressBar title={item.title} value={item.value} index={index} />
        ))}
      </div>
      <TextWithSquare>
        <TextH3 className={"!text-buttons px-3.5 w-44 xxs:w-fit"}>Languages</TextH3>
      </TextWithSquare>
      <div className={"w-4/5 my-5 px-0 justify-center xl:px-40 2xl:w-2/3"}>
        {map(languagesItems, (item, index) => (
          <ProgressBar title={item.title} value={item.value} index={index} />
        ))}
      </div>
    </main>
  )
}
