"use client"
import React from "react"

export const FooterItem: React.FC<FooterItemType> = ({ title, children }) => {
  return (
    <div className={"w-full flex flex-row self-start items-center sm:flex-col sm:self-center lg:mx-7"}>
      <span className={"font-bold mx-4"}>{title}</span>
      {children}
    </div>
  )
}
