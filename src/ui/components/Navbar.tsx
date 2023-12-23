"use client"
import Link from "next/link"
import map from "lodash/map"
import React, { useState } from "react"
import clsx from "clsx"
import { TextH3 } from "@/ui/components/texts/TextH3"
import { Burger } from "@/ui/components/Burger"
import { MenuItem } from "@/ui/components/MenuItem"
import { TextH4 } from "@/ui/components/texts/TextH4"

export const Navbar: React.FC<NavbarType> = ({ name, position, menuItems }) => {
  const [selected, setSelected] = useState<string>()
  const [isFocused, setIsFocused] = useState(false)
  return (
    <header className="w-full flex items-center justify-between h-28 px-7 fixed bg-white shadow-md z-20">
      <Link href={"/"} className="flex items-center" onClick={() => setSelected(name)}>
        <div className={"w-5 h-5 border border-buttons bg-buttons"} />
        <TextH3 className={"!text-2xl px-3.5"}>{name}</TextH3>
        <TextH4 className="hidden sm:block">/</TextH4>
        <TextH4 className="hidden sm:block">{position}</TextH4>
      </Link>
      <Burger setIsFocused={setIsFocused} />
      {isFocused && (
        <button
          onFocus={() => setIsFocused(false)}
          className={"absolute top-0 left-0 w-full h-screen z-0 bg-cardBGTransparent"}
        />
      )}
      <div
        className={clsx(
          "pt-3 absolute w-full bg-white h-28 justify-center items-center top-0 right-0",
          isFocused ? "flex z-20" : "hidden",
          "xl:static xl:w-fit xl:bg-white xl:flex",
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
