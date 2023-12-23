"use client"
import React, { useState } from "react"
import { submitForm } from "@/utils/submitForm"
import isEmpty from "lodash/isEmpty"
import { Field, Form } from "react-final-form"
import { ContactFormField } from "@/ui/components/ContactFormField"
import { MainButton } from "@/ui/components/MainButton"
import { TextH3 } from "@/ui/components/texts/TextH3"

export const ContactForm = () => {
  const [isOpen, setOpened] = useState(true)
  return (
    <div className={"flex flex-col items-center mb-16"}>
      <div className={"flex items-center"}>
        <div className={"w-5 h-5 border border-buttons bg-buttons"} />
        <TextH3 className={"text-2xl px-3.5"}>{isOpen ? "Let's talk!" : "Thank you!"}</TextH3>
      </div>
      {isOpen ? (
        <Form
          onSubmit={(values: FormFieldsType) => {
            submitForm(values, setOpened)
          }}
        >
          {({ handleSubmit, submitting, pristine }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-white px-7 py-5 mt-5 border w-[80%] border-[transparent] shadow-xl sm:py-10 sm:px-14 xl:w-[45%] 2xl:w-1/3 3xl:w-1/4"
            >
              <Field name={"name"} validate={isEmpty}>
                {({ input, meta }) => (
                  <ContactFormField
                    label={"Name"}
                    type={"text"}
                    validationFailed={meta.error && meta.touched}
                    {...input}
                  />
                )}
              </Field>
              <Field name={"email"} validate={isEmpty}>
                {({ input, meta }) => (
                  <ContactFormField
                    label={"Email"}
                    type={"email"}
                    validationFailed={meta.error && meta.touched}
                    {...input}
                  />
                )}
              </Field>
              <Field name={"message"} validate={isEmpty}>
                {({ input, meta }) => (
                  <ContactFormField
                    label={"Message"}
                    type={"text"}
                    isTextarea={true}
                    rows={3}
                    validationFailed={meta.error && meta.touched}
                    {...input}
                  />
                )}
              </Field>
              <MainButton type={"submit"} title={"Send"} disabled={submitting || pristine} />
            </form>
          )}
        </Form>
      ) : (
        <></>
      )}
    </div>
  )
}
