"use client"
import React from "react"
import clsx from "clsx"

export const TextH4: React.FC<TextType> = ({ children, className }) => {
  return (
    <h4 className={clsx("uppercase font-light text-sm px-3.5 pt-2 sm:block md:text-lg 3xl:text-2xl", className)}>
      {children}
    </h4>
  )
}
