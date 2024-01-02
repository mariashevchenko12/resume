"use client"
import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { scrollTo } from "@/utils/scrollTo"

export const MenuItem: React.FC<MenuItemType> = ({ item, selected, setSelected, setIsFocused }) => {
  return (
    <Link
      key={item.title}
      href={item.url}
      className={clsx(
        "uppercase p-4 text-sm font-light 3xl:text-xl",
        selected === item.url ? "text-buttons" : "text-seaBlue",
      )}
      onClick={() => {
        setSelected(item.url)
        setIsFocused(false)
        scrollTo("main-block")
      }}
    >
      {item.title}
    </Link>
  )
}
