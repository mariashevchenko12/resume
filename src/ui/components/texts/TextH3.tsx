"use client"
import React from "react"
import clsx from "clsx"

export const TextH3: React.FC<TextType> = ({ children, className }) => {
  return (
    <h3 className={clsx("text-4xl text-seaBlue font-black xs:text-2xl md:text-3xl 3xl:text-5xl", className)}>
      {children}
    </h3>
  )
}
