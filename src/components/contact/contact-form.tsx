"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    if (!formState.privacy) {
      newErrors.privacy = "Debe aceptar la política de privacidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      setSubmitError("Ha ocurrido un error al enviar el formulario. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Envíenos un Mensaje</h3>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start">
          <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>
            ¡Gracias por contactarnos! Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible.
          </p>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Nombre *</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="subject">Asunto</Label>
          <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="privacy" checked={formState.privacy} onCheckedChange={handleCheckboxChange} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="privacy"
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${errors.privacy ? "text-red-500" : ""}`}
            >
              Acepto la{" "}
              <Link href="/politica-privacidad" className="text-orange-500 hover:underline">
                Política de Privacidad
              </Link>{" "}
              y el procesamiento de mis datos personales.
            </label>
            {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy}</p>}
          </div>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </div>
  )
}
