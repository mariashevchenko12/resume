"use client"
import React from "react"
import clsx from "clsx"
import Link from "next/link"

export const MenuItem: React.FC<MenuItemType> = ({ item, selected, setSelected, setIsFocused }) => {
  return (
    <Link
      key={item.title}
      href={item.url}
      className={clsx(
        "uppercase p-4 text-sm font-light 3xl:text-xl",
        selected === item.title ? "text-buttons" : "text-seaBlue",
      )}
      onClick={() => {
        setSelected(item.title)
        setIsFocused(false)
      }}
    >
      {item.title}
    </Link>
  )
}
