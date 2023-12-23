import React from "react"
import axios from "axios"

export const submitForm = (
  fields: { name: string; email: string; message: string },
  setOpened: React.Dispatch<boolean>,
) => {
  axios
    .post("/api/submitContactForm", { name: fields.name, email: fields.email, message: fields.message })
    .then((_) => {
      setOpened(false)
      return "OK"
    })
    .catch((error) => {
      return error.response.data.error
    })
}
