"use client"

import { useState } from "react"
import { UploadButton } from "@uploadthing/react"
import { X, Loader2, Upload, CheckCircle2, FileImage } from "lucide-react"

export default function PassportUpload({ onUpload, onRemove, fileUrl }) {
  const [isUploading, setIsUploading] = useState(false)

  if (fileUrl) {
    return (
      <div className="relative rounded-2xl overflow-hidden group bg-gray-50 ring-1 ring-gray-200">
        <img
          src={fileUrl}
          alt="Uploaded document"
          className="w-full h-52 object-cover bg-white"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur rounded-xl px-3 py-1.5 shadow-sm ring-1 ring-gray-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-semibold text-gray-700">Uploaded</span>
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="absolute top-3 right-3 w-9 h-9 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-sm ring-1 ring-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:shadow-md"
          title="Remove"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/30 to-transparent h-16" />
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 text-xs text-white font-medium underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-sm"
        >
          Open full size →
        </a>
      </div>
    )
  }

  if (isUploading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-52 rounded-2xl bg-gray-50 ring-1 ring-gray-200">
        <div className="w-12 h-12 rounded-2xl bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-red-500 animate-spin" />
        </div>
        <div className="text-center">
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
          "w-full h-52 rounded-2xl border-2 border-dashed border-gray-200 hover:border-red-400 hover:bg-red-50/20 transition-all duration-200 text-sm text-gray-500 bg-transparent flex flex-col items-center justify-center gap-3 cursor-pointer ut-uploading:opacity-50 group",
        allowedContent: "hidden",
      }}
      content={{
        button({ ready }) {
          return (
            <>
              <div className="w-14 h-14 rounded-2xl bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center group-hover:bg-red-50 group-hover:ring-red-200 transition-all">
                <Upload className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                  {ready ? "Upload Passport Data Page" : "Preparing..."}
                </p>
                <p className="text-xs text-gray-400 mt-1">Image or PDF up to 4MB</p>
                <p className="text-xs text-gray-300 mt-0.5">Click to browse or drag & drop</p>
              </div>
            </>
          )
        },
      }}
    />
  )
}
