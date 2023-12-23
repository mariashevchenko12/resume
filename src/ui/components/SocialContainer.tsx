import React from "react"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"
import { colors } from "@/utils/colors"
import clsx from "clsx"

export const SocialContainer: React.FC<SocialContainerType> = ({ linkedin, telegram, email, size, className }) => (
  <div className={clsx("flex justify-between px-8 xs:px-20", className)}>
    <LinkedinShareButton url={linkedin} style={{ outline: "none" }}>
      <LinkedinIcon iconFillColor={colors.seaBlue} bgStyle={{ fill: "transparent" }} size={size || 55} />
    </LinkedinShareButton>
    <TelegramShareButton url={telegram} style={{ outline: "none" }}>
      <TelegramIcon iconFillColor={colors.seaBlue} bgStyle={{ fill: "transparent" }} size={size || 45} />
    </TelegramShareButton>
    <EmailShareButton url={email} style={{ outline: "none" }}>
      <EmailIcon iconFillColor={colors.seaBlue} bgStyle={{ fill: "transparent" }} size={size || 55} />
    </EmailShareButton>
  </div>
)
