"use client"
import React from "react"
import Image from "next/image"
import { SocialContainer } from "@/ui/components/SocialContainer"
import image from "../../images/Mariia.jpg"
import { ButtonLink } from "@/ui/components/ButtonLink"
import { TextH3 } from "@/ui/components/texts/TextH3"

export const AboutContainer: React.FC<AboutContainerType> = ({
  social,
  firstName,
  lastName,
  position,
  subtitle,
  description,
}) => {
  return (
    <div className={"w-full pb-16 flex justify-center items-center flex-col xl:flex-row"}>
      <div
        className={"flex flex-col border w-[70%] border-[transparent] shadow-xl xl:mr-7 xl:w-[45%] 2xl:w-1/3 3xl:w-1/4"}
      >
        <div className={"bg-cardBG flex flex-col items-center py-8 px-4 xl:py-16"}>
          <Image
            src={image}
            alt={""}
            width={250}
            height={250}
            className={
              "mx-auto rounded-full w-44 h-44 mb-7 object-cover object-center-top xl:mb-10 xs:w-52 xs:h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 xl:w-64 xl:h-64 3xl:w-96 3xl:h-96"
            }
          />
          <TextH3>{firstName}</TextH3>
          <TextH3>{lastName}</TextH3>
          <div className={"w-14 border border-buttons my-7 3xl:my-10"} />
          <h4 className="uppercase text-seaBlue font-light tracking-wider text-lg md:text-lg 3xl:text-2xl text-center">
            {position}
          </h4>
        </div>
        <div className={"bg-white pt-4 pb-3"}>
          <SocialContainer linkedin={social.linkedin} telegram={social.telegram} email={social.email} />
        </div>
      </div>
      <div className={"w-[70%] flex flex-col py-6 xl:mr-7 xl:w-[45%] 2xl:w-1/3 3xl:w-1/4"}>
        <h1 className={"text-6xl font-black text-end xl:text-start xl:text-8xl 2xl:text-9xl"}>Hello</h1>
        <TextH3 className={"mt-2 !text-white text-end xl:text-start"}>{subtitle}</TextH3>
        <div className={"flex flex-col items-end justify-end xs:flex-row xl:justify-start"}>
          <ButtonLink url={"/resume"} title={"Resume"} className={"mr-0 xs:mr-6"} />
          <ButtonLink url={"/skills"} title={"Skills"} isTransparent={true} className={"mr-0"} />
        </div>
        <p className={"text-xl font-extralight text-end xl:text-start 2xl:text-2xl 3xl:text-3xl"}>{description}</p>
      </div>
    </div>
  )
}
