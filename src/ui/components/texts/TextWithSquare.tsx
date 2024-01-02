"use client"
import React from "react"

export const TextWithSquare: React.FC<TextType> = ({ children }) => {
  return (
    <div className={"flex items-center"}>
      <div className={"w-5 h-5 border border-buttons bg-buttons"} />
      {children}
    </div>
  )
}
