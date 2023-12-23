import { submitContactForm } from "@/utils/bot/submitContactForm"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const answer = await submitContactForm(data)
  const status = answer.errorMessage ? 404 : 200
  return NextResponse.json(answer, { status })
}
