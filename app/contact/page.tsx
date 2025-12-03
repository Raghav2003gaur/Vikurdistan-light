"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-foreground/70">Let's plan your unforgettable Kurdistan journey</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>

            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+964 123 456 7890",
                  desc: "Available Mon-Fri, 9am-6pm",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "info@vikurdistan.com",
                  desc: "We respond within 24 hours",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  value: "Erbil, Kurdistan",
                  desc: "Tourism Board Building",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  value: "Mon-Fri: 9am-6pm",
                  desc: "Sat-Sun: 10am-4pm (Closed)",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="font-semibold text-primary mb-1">{item.value}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Twitter"].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 bg-muted hover:bg-primary hover:text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 lg:sticky lg:top-24">
            <div className="mb-6">
              <Badge className="bg-accent/20 text-accent border-accent/30">Send us a message</Badge>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+964 123 456 7890"
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans..."
                  rows={6}
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-white h-12 text-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>

            {/* WhatsApp CTA */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-foreground/60 mb-4">Or chat with us directly</p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-8">Our Location</h2>
        <div className="w-full h-96 bg-muted rounded-2xl border border-border overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.6728384774887!2d44.00883!3d36.191151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5e7c9f9f9f9f9d%3A0x0!2sErbil%2C%20Iraq!5e0!3m2!1sen!2s!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
