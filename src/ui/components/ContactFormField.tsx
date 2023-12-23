"use client"
import React from "react"
import clsx from "clsx"

export const ContactFormField: React.FC<ContactFormFieldType> = ({
  label,
  type,
  isTextarea,
  rows,
  validationFailed,
  ...props
}) => {
  return (
    <div className={"my-3 text-left"}>
      <label htmlFor={label} className="font-bold text-gray-label-title theme-colored-label-title">
        {label}
        <span className={"text-buttons"}>*</span>
      </label>
      {isTextarea ? (
        <textarea
          id={label}
          {...props}
          rows={rows}
          placeholder={`Enter ${label}`}
          className={clsx(
            "bg-cardBGFormField w-full mt-4 border-b-2 border-disabled outline-none focus:border-buttons",
            {
              "border-wrongFormField": validationFailed,
            },
          )}
        />
      ) : (
        <input
          id={label}
          {...props}
          type={type}
          placeholder={`Enter ${label}`}
          className={clsx(
            "bg-cardBGFormField w-full mt-4 border-b-2 border-disabled outline-none focus:border-buttons",
            {
              "border-wrongFormField": validationFailed,
            },
          )}
        />
      )}
    </div>
  )
}
