"use client"
import React from "react"
import { SocialContainer } from "@/ui/components/SocialContainer"
import { FooterItem } from "@/ui/components/FooterItem"

export const Footer: React.FC<FooterType> = ({ number, linkedin, telegram, email }) => {
  return (
    <footer className="w-full flex flex-col items-center justify-center h-28 pr-7 bg-white shadow-md text-lg sm:flex-row sm:justify-center sm:text-sm 3xl:text-xl">
      <FooterItem title={"Call"}>
        <a href={`tel:${number}`}>{number}</a>
      </FooterItem>
      <FooterItem title={"Follow"}>
        <SocialContainer linkedin={linkedin} telegram={telegram} email={email} size={25} className={"pl-0 sm:px-20"} />
      </FooterItem>
      <FooterItem title={"Email"}>
        <a href={`mailto:${email}`}>{email}</a>
      </FooterItem>
    </footer>
  )
}
