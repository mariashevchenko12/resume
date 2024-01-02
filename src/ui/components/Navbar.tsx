"use client"
import Link from "next/link"
import map from "lodash/map"
import React, { useState } from "react"
import clsx from "clsx"
import { TextH3 } from "@/ui/components/texts/TextH3"
import { Burger } from "@/ui/components/Burger"
import { MenuItem } from "@/ui/components/MenuItem"
import { TextH4 } from "@/ui/components/texts/TextH4"
import { scrollTo } from "@/utils/scrollTo"

export const Navbar: React.FC<NavbarType> = ({ name, position, menuItems }) => {
  const [selected, setSelected] = useState<string>("/")
  const [isFocused, setIsFocused] = useState(false)
  return (
    <header
      className={clsx(
        "navbar w-full flex flex-col grow items-center justify-between max-h-24 px-7 py-5 bg-white shadow-md z-20 transition-[max-height] duration-150 ease-in-out xl:flex-row",
        isFocused ? "max-h-96" : "max-h-24",
      )}
    >
      <div className={"w-full flex justify-between xl:w-fit"}>
        <Link
          href={"/"}
          className="flex items-center"
          onClick={() => {
            setSelected("/")
            scrollTo("main-block")
          }}
        >
          <div className={"w-5 h-5 border border-buttons bg-buttons"} />
          <TextH3 className={"!text-2xl px-3.5"}>{name}</TextH3>
          <TextH4 className="hidden sm:block">/</TextH4>
          <TextH4 className="hidden sm:block">{position}</TextH4>
        </Link>
        <Burger isFocused={isFocused} setIsFocused={setIsFocused} />
      </div>
      <div
        className={clsx(
          "pt-3 w-full justify-center items-center flex-col",
          isFocused ? "flex" : "hidden",
          "xl:flex-row xl:static xl:w-fit xl:bg-white xl:flex",
        )}
      >
        {map(menuItems, (item) => (
          <MenuItem
            key={item.title}
            item={item}
            selected={selected}
            setSelected={setSelected}
            setIsFocused={setIsFocused}
          />
        ))}
      </div>
    </header>
  )
}
