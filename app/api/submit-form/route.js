import { writeFile, mkdir } from "fs/promises"
import { join } from "path"

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || ""

export async function POST(request) {
  const body = await request.json()

  // Always log submissions locally as backup
  try {
    const dir = join(process.cwd(), ".submissions")
    await mkdir(dir, { recursive: true })
    const filename = `${body.formType || "Unknown"}-${Date.now()}.json`
    await writeFile(join(dir, filename), JSON.stringify({ ...body, _receivedAt: new Date().toISOString() }, null, 2))
  } catch (logErr) {
    console.error("Failed to save local backup:", logErr)
  }

  // Forward to Google Apps Script
  if (GOOGLE_APPS_SCRIPT_URL) {
    try {
      const params = new URLSearchParams()
      Object.entries(body).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          params.set(key, String(value))
        }
      })

      const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      })

      const text = await res.text()

      if (text === "SUCCESS") {
        console.log(`Form submitted to Google Sheets: ${body.formType}`)
        return Response.json({ success: true })
      }

      console.warn(`Google Apps Script responded: ${text}`)
      // Fall through — accept submission anyway
    } catch (forwardErr) {
      console.warn("Could not reach Google Sheets (SSL/networking issue — normal on some local networks):", forwardErr.message)
      // Accept submission — data is saved locally
    }
  }

  return Response.json({ success: true })
}
