"use client"
import React from "react"
import clsx from "clsx"

export const MainButton: React.FC<MainButtonType> = ({ title, disabled, type, onClick, isTransparent, className }) => {
  return (
    <button
      className={clsx(
        "rounded-2xl text-center uppercase mr-6 my-2 px-6 py-1 font-bold border-2 w-36 xs:my-4",
        className,
        disabled
          ? "border-disabled bg-white text-disabled cursor-not-allowed"
          : isTransparent
            ? "border-seaBlue bg-white hover:border-buttons hover:bg-buttons hover:text-white"
            : "border-buttons bg-buttons text-white hover:border-seaBlue hover:bg-white hover:text-seaBlue",
      )}
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
