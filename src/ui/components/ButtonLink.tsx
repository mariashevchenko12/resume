"use client"
import Link from "next/link"
import React from "react"
import clsx from "clsx"

export const ButtonLink: React.FC<ButtonLinkType> = ({ url, title, isTransparent, className }) => {
  return (
    <Link
      href={url}
      className={clsx(
        "rounded-2xl text-center uppercase mr-6 my-2 px-6 py-1 font-bold border-2 w-[10rem] xs:my-4",
        className,
        isTransparent
          ? "border-seaBlue bg-white text-seaBlue hover:border-buttons hover:bg-buttons hover:text-white"
          : "border-buttons bg-buttons text-white hover:border-seaBlue hover:bg-white hover:text-seaBlue",
      )}
    >
      {title}
    </Link>
  )
}
