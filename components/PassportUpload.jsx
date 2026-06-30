"use client"

import { UploadButton } from "@uploadthing/react"
import { X } from "lucide-react"

export default function PassportUpload({ onUpload, onRemove, fileUrl }) {
  if (fileUrl) {
    return (
      <div className="relative rounded-xl border border-gray-200 overflow-hidden group">
        <img
          src={fileUrl}
          alt="Passport data page"
          className="w-full h-40 object-contain bg-gray-100"
        />
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent h-12" />
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 left-3 text-xs text-white font-medium underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Open full size
        </a>
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
