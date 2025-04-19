"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      const serviceId = "service_c9n1chd"
      const templateId = "template_dcz33k3"
      const publicKey = "9WjkvskObjpJ7IaVg"

      await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)

      setSubmitStatus({
        success: true,
        message: "Thanks for your message! I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus({
        success: false,
        message: "Sorry, there was a problem sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help elevate your brand? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="flex items-start mb-6">
                <Mail className="text-orange-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a
                    href="mailto:ronnienextdoor410@gmail.com"
                    className="text-gray-600 hover:text-orange-500 transition-colors"
                  >
                    ronnienextdoor410@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Phone className="text-orange-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <a href="tel:+2348100041384" className="text-gray-600 hover:text-orange-500 transition-colors">
                    +234 810 004 1384
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-orange-500 mr-4 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {/* Hidden field for to_name */}
              <input type="hidden" name="to_name" value="Caleb" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="from_name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-md ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
