declare type MenuItemType = {
  item: { title: string; url: string }
  selected?: string
  setSelected: Dispatch<SetStateAction<string>>
  setIsFocused: Dispatch<SetStateAction<boolean>>
}

declare type NavbarType = {
  name: string
  position: string
  menuItems: { title: string; url: string }[]
}

declare type AboutContainerType = {
  social: {
    linkedin: string
    telegram: string
    email: string
  }
  firstName: string
  lastName: string
  position: string
  subtitle: string
  description: string
}

declare type SocialContainerType = {
  linkedin: string
  telegram: string
  email: string
  size?: number
  className?: string
}

declare type ButtonLinkType = {
  url: string
  title: string
  isTransparent?: boolean
  className?: string
}

declare type FooterType = {
  linkedin: string
  telegram: string
  email: string
  number: string
}

declare type FooterItemType = {
  title: string
  children: ReactElement
}

declare type TextType = {
  children: string
  className?: string
}

declare type BurgerType = {
  setIsFocused: Dispatch<SetStateAction<boolean>>
  className?: string
}