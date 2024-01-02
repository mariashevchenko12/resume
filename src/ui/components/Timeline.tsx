import map from "lodash/map"
import React from "react"
import { TextH3 } from "@/ui/components/texts/TextH3"

export const Timeline: React.FC<TimelineType> = ({ timelineInfo }) => (
  <div className="w-4/5 xl:w-2/3">
    <div className="relative overflow-hidden mx-auto w-full h-full">
      <div className="absolute h-full w-2 right-0 border -mr-1 bg-buttons border-buttons sm:right-1/2"></div>
      {map(timelineInfo, (element) => (
        <div className="my-4 flex text-right sm:odd:flex-row-reverse sm:odd:text-left">
          <div className="w-[90%] px-1 py-4 sm:w-[45%]">
            <p className="text-buttons text-xl font-extralight 2xl:text-2xl 3xl:text-3xl">{element.date}</p>
            <TextH3 className={"!text-2xl my-4 !text-white !p-0 font-bold 2xl:!text-4xl"}>{element.position}</TextH3>
            <p className="text-xl font-extralight 2xl:text-2xl 3xl:text-3xl">{element.place}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)
