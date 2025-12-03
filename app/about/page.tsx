"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Globe, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Kurdistan</h1>
          <p className="text-xl text-foreground/70">
            Discover the heartland of ancient civilization, stunning nature, and vibrant culture
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Population", value: "5M+", icon: Users },
            { label: "Area", value: "131K km²", icon: MapPin },
            { label: "Languages", value: "3+", icon: Globe },
            { label: "History", value: "7000+ yrs", icon: Zap },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx} className="p-6 text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-sm text-foreground/60 mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Introduction */}
          <div>
            <Badge className="mb-4">Who We Are</Badge>
            <h2 className="text-4xl font-serif font-bold mb-6">Welcome to Kurdistan</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Kurdistan is a transcontinental region spanning southeastern Turkey, northern Iraq, northwestern Iran, and
              northeastern Syria. With a population of over 5 million, the Kurdish people have maintained a rich
              cultural heritage spanning thousands of years.
            </p>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Known for its breathtaking natural landscapes, historic significance, and warm hospitality, Kurdistan is
              an emerging tourism destination that offers experiences unlike anywhere else on Earth.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From the snow-capped Zagros Mountains to ancient Mesopotamian ruins, from vibrant bazaars to serene
              valleys, Kurdistan invites travelers to explore its untouched beauty and rich culture.
            </p>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="/placeholder.svg?key=ab001"
              alt="Kurdistan landscape"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted rounded-3xl">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">A Journey Through Time</h2>

        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent md:transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          {[
            {
              period: "7000 BCE",
              title: "Ancient Settlements",
              description: "Early settlements in the region with evidence of advanced civilization.",
            },
            {
              period: "3000 BCE",
              title: "Mesopotamian Era",
              description: "Height of Mesopotamian civilization with cities and trade routes.",
            },
            {
              period: "1000 BCE - 1258 CE",
              title: "Medieval Kingdoms",
              description: "Various empires and kingdoms ruling the region with cultural flourishing.",
            },
            {
              period: "1258 - 1918",
              title: "Ottoman Rule",
              description: "Four centuries of Ottoman administration and cultural development.",
            },
            {
              period: "1918 - Present",
              title: "Modern Era",
              description: "Formation of modern Kurdistan with three governments and growing autonomy.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                {/* Left Side (Odd Items) */}
                <div className={`${idx % 2 === 0 ? "md:text-right md:pr-6" : "md:hidden"}`}>
                  {idx % 2 === 0 && (
                    <>
                      <p className="text-sm font-bold text-primary mb-1">{item.period}</p>
                      <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </>
                  )}
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
                </div>

                {/* Right Side (Even Items) */}
                <div className={`ml-16 md:ml-0 md:pl-6 ${idx % 2 === 1 ? "md:block" : "md:hidden"}`}>
                  {idx % 2 === 1 ? (
                    <>
                      <p className="text-sm font-bold text-primary mb-1">{item.period}</p>
                      <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-bold text-primary mb-1 md:hidden">{item.period}</p>
                      <h3 className="text-xl font-serif font-bold mb-2 md:hidden">{item.title}</h3>
                      <p className="text-foreground/70 md:hidden">{item.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Rich Culture & Traditions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎭",
              title: "Arts & Music",
              description: "Traditional Kurdish music, dance, and visual arts with centuries-old traditions.",
            },
            {
              icon: "🍲",
              title: "Culinary Heritage",
              description: "Authentic Kurdish cuisine featuring grilled meats, vegetable dishes, and fresh bread.",
            },
            {
              icon: "🧵",
              title: "Craftsmanship",
              description: "Intricate weaving, pottery, and traditional crafts passed down through generations.",
            },
            {
              icon: "👗",
              title: "Traditional Dress",
              description: "Colorful and ornate traditional clothing reflecting Kurdish identity and pride.",
            },
            {
              icon: "🏘️",
              title: "Village Life",
              description: "Strong community bonds and hospitality that define Kurdish social fabric.",
            },
            {
              icon: "📚",
              title: "Language & Literature",
              description: "Kurdish language with rich literary traditions and contemporary writers.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-8 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Geography & Nature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted rounded-3xl">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Geography & Natural Wonders</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {[
                {
                  name: "Zagros Mountains",
                  desc: "The world's longest mountain range spanning 1,600 km with peaks over 3,600m.",
                },
                {
                  name: "Dokan Lake",
                  desc: "Stunning alpine lake surrounded by mountains offering water sports and relaxation.",
                },
                {
                  name: "Hawraman Valley",
                  desc: "Ancient stepped village carved into mountain slopes with traditional lifestyle.",
                },
                {
                  name: "Erbil Citadel",
                  desc: "UNESCO heritage site, one of the oldest continuously inhabited settlements.",
                },
              ].map((item, idx) => (
                <div key={idx} className="pb-6 border-b border-primary/20 last:border-0">
                  <h3 className="text-lg font-serif font-bold mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="/placeholder.svg?key=ab002"
              alt="Kurdistan nature"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Visit Kurdistan?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Pristine, untouched mountain landscapes and natural beauty",
            "Rich cultural heritage spanning thousands of years",
            "Legendary Kurdish hospitality and warm welcomes",
            "Authentic experiences away from mass tourism",
            "Affordable luxury accommodations and dining",
            "Year-round activities from skiing to desert exploration",
            "Emerging destination for adventurous travelers",
            "Growing tourism infrastructure with personal service",
          ].map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <Badge className="bg-accent/20 text-accent border-accent/30 mt-1">✓</Badge>
              </div>
              <p className="text-lg text-foreground/80">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
