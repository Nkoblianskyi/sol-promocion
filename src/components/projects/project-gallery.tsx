"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Galería del Proyecto</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || `/placeholder.svg?height=300&width=400&query=marketing project ${index + 1}`}
              alt={`Imagen del proyecto ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada del proyecto"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
