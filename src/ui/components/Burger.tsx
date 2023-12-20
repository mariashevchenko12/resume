"use client"
import React from "react"
import clsx from "clsx"

export const Burger: React.FC<BurgerType> = ({ setIsFocused, className }) => {
  return (
    <button
      className={clsx("w-7 mx-5 mt-2 xl:hidden", className)}
      onClick={() => {
        setIsFocused(true)
      }}
    >
      <div className={"border-2 border-buttons xs:border"} />
      <div className={"border-2 border-buttons my-1 xs:border"} />
      <div className={"border-2 border-buttons xs:border"} />
    </button>
  )
}
