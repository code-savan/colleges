"use client"

import { useState } from "react"
import { UploadButton } from "@uploadthing/react"
import { X, Loader2, Upload, CheckCircle2 } from "lucide-react"

export default function PassportUpload({ onUpload, onRemove, fileUrl }) {
  const [isUploading, setIsUploading] = useState(false)

  if (fileUrl) {
    return (
      <div className="relative rounded-2xl overflow-hidden group bg-gray-50 ring-1 ring-gray-200">
        <img
          src={fileUrl}
          alt="Passport data page"
          className="w-full h-40 object-contain bg-white"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-xl px-2.5 py-1 shadow-sm ring-1 ring-gray-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-xs font-medium text-gray-700">Uploaded</span>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm ring-1 ring-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:shadow-md"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/20 to-transparent h-14" />
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2.5 left-3 text-xs text-white/90 font-medium underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Open full size →
        </a>
      </div>
    )
  }

  if (isUploading) {
    return (
      <div className="flex items-center gap-3.5 p-5 rounded-2xl bg-gray-50 ring-1 ring-gray-200">
        <div className="w-11 h-11 rounded-xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
          <Loader2 className="w-5 h-5 text-red-500 animate-spin" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">Uploading...</p>
          <p className="text-xs text-gray-400 mt-0.5">Please wait while your file is uploaded</p>
        </div>
      </div>
    )
  }

  return (
    <UploadButton
      endpoint="passportUpload"
      onUploadProgress={() => setIsUploading(true)}
      onClientUploadComplete={(res) => {
        setIsUploading(false)
        if (res?.[0]?.url) onUpload(res[0].url)
      }}
      onUploadError={(error) => {
        setIsUploading(false)
        console.error("Upload error:", error)
      }}
      appearance={{
        button:
          "w-full px-4 py-6 rounded-2xl ring-1 ring-gray-200 hover:ring-red-400 hover:bg-red-50/30 transition-all duration-200 text-sm text-gray-500 bg-transparent flex items-center justify-center gap-3 cursor-pointer ut-uploading:opacity-50 group",
        allowedContent: "hidden",
      }}
      content={{
        button({ ready }) {
          return (
            <>
              <div className="w-11 h-11 rounded-xl bg-gray-50 ring-1 ring-gray-200 flex items-center justify-center group-hover:bg-red-50 group-hover:ring-red-200 transition-all">
                <Upload className="w-5 h-5 text-gray-500 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">
                  {ready ? "Upload Passport Data Page" : "Preparing..."}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Image or PDF up to 4MB</p>
              </div>
            </>
          )
        },
      }}
    />
  )
}
