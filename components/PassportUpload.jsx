"use client"

import { UploadButton } from "@uploadthing/react"
import { CheckCircle2, X } from "lucide-react"

export default function PassportUpload({ onUpload, onRemove, fileUrl }) {
  if (fileUrl) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50">
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        <span className="text-sm text-gray-600 flex-1 truncate">Passport uploaded</span>
        <button
          type="button"
          onClick={onRemove}
          className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    )
  }

  return (
    <UploadButton
      endpoint="passportUpload"
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) onUpload(res[0].url)
      }}
      onUploadError={(error) => {
        console.error("Upload error:", error)
      }}
      appearance={{
        button: "w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-red-400 transition-colors text-sm text-gray-500 bg-transparent flex items-center justify-center gap-2",
        allowedContent: "text-xs text-gray-400 mt-1",
      }}
      content={{
        button({ ready }) {
          return ready ? "Upload Passport Data Page" : "Preparing upload..."
        },
        allowedContent({ ready }) {
          return ready ? "Image or PDF up to 4MB" : ""
        },
      }}
    />
  )
}
