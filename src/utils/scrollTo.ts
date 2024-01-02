export const scrollTo = (className: string) => {
  document?.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}
