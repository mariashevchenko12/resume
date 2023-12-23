import TelegramBot from "node-telegram-bot-api"
const channelId = process.env.NEXT_TG_CHANNEL_ID
const botToken = process.env.NEXT_TG_BOT_TOKEN
const bot = botToken && new TelegramBot(botToken, { polling: false })

const messageBuilder = ({ name, email, message }: FormFieldsType) => {
  return `<b>Name:</b> ${name}\n<b>Email:</b> ${email}\n${message}`
}

export const submitContactForm = async (req: FormFieldsType) => {
  const okMessage = "Form was successfully submitted"
  try {
    const message = messageBuilder({ ...req })
    if (!bot) return { errorMessage: "BotToken is undefined" }
    if (!channelId) return { errorMessage: "ChannelId is undefined" }
    await bot.sendMessage(channelId, message, {
      parse_mode: "HTML",
    })
    return { okMessage }
  } catch (error) {
    return { errorMessage: error }
  }
}
