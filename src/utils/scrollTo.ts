export const scrollTo = (className: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  document?.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}
