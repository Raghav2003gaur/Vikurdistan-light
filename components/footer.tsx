"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Vikurdistan</h3>
            <p className="text-white/80 text-sm leading-relaxed">Beyond Borders. Beyond Beauty.</p>
            <p className="text-white/60 text-xs mt-4">Discover the magic of Kurdistan tourism.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {["Tours", "Villas", "Experiences", "About"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/80 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                +964 123 456 7890
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                info@vikurdistan.com
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                Erbil, Kurdistan
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-accent hover:text-primary transition-colors"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2025 Vikurdistan. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              Made with <Heart className="w-4 h-4 text-accent" /> in Kurdistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
