"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/majestic-kurdistan-landscape-mountains-valley.jpg" alt="Kurdistan landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <Badge className="bg-accent/20 text-accent border-accent/30">Welcome to Kurdistan</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Beyond Borders.
            <br />
            Beyond Beauty.
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the untouched beauty, rich culture, and culinary wonders of Kurdistan. Your journey begins here.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Destination */}
              <div className="text-left">
                <label className="block text-sm font-semibold text-foreground mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Dates */}
              <div className="text-left">
                <label className="block text-sm font-semibold text-foreground mb-2">Dates</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Guests */}
              <div className="text-left">
                <label className="block text-sm font-semibold text-foreground mb-2">Guests</label>
                <select className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>1-2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>

            <Button className="w-full mt-6 bg-primary hover:bg-primary-dark text-white h-12 text-lg">
              Search Experiences
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-white">
            <div className="text-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-white/70">Tours & Packages</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">50+</p>
              <p className="text-white/70">Luxury Villas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">10K+</p>
              <p className="text-white/70">Happy Travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4">Featured Tours</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Unforgettable Experiences Await</h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Curated journeys through Kurdistan's most magical destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Mountain Majesty",
              location: "Zagros Mountains",
              days: 5,
              price: "$1,299",
              rating: 4.9,
              reviews: 234,
              image: "/snow-mountains-zagros-peaks.jpg",
            },
            {
              title: "Cultural Heritage",
              location: "Erbil & Dohuk",
              days: 4,
              price: "$899",
              rating: 4.8,
              reviews: 189,
              image: "/ancient-kurdish-architecture-historic.jpg",
            },
            {
              title: "Culinary Adventure",
              location: "Sulaymaniyah",
              days: 3,
              price: "$749",
              rating: 4.9,
              reviews: 156,
              image: "/kurdish-food-cuisine-traditional.jpg",
            },
          ].map((tour, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-foreground">{tour.days}d Tour</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-serif font-bold flex-1">{tour.title}</h3>
                </div>
                <div className="flex items-center text-sm text-foreground/60 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {tour.location}
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-accent text-accent" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold ml-2">{tour.rating}</span>
                  <span className="text-sm text-foreground/60">({tour.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">From</p>
                    <p className="text-2xl font-bold text-primary">{tour.price}</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary-dark text-white">View</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted rounded-3xl">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Luxury Stays</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Stunning Villas & Retreats</h2>
          <p className="text-foreground/70 text-lg max-w-2xl">
            Experience luxury in the heart of Kurdistan's most exclusive locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Mountain Panorama Villa",
              location: "Salim Bagh",
              price: "$450/night",
              guests: 8,
              image: "/luxury-modern-villa-mountain-view-architecture.jpg",
              amenities: ["Pool", "Spa", "Kitchen", "WiFi"],
            },
            {
              title: "Cliff Edge Retreat",
              location: "Rawanduz",
              price: "$350/night",
              guests: 6,
              image: "/contemporary-villa-terrace-overlooking-valley.jpg",
              amenities: ["Terrace", "Fireplace", "Bar", "Concierge"],
            },
          ].map((villa, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-80 overflow-hidden bg-muted">
                <img
                  src={villa.image || "/placeholder.svg"}
                  alt={villa.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{villa.title}</h3>
                <div className="flex items-center text-foreground/60 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  {villa.location}
                </div>
                <div className="flex gap-2 mb-6">
                  {villa.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-primary">{villa.price}</p>
                    <p className="text-sm text-foreground/60">Sleeps {villa.guests}</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary-dark text-white">Book Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4">Why Visit</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Discover Kurdistan's Magic</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Untouched Nature",
              description: "Experience pristine mountains, valleys, and waterways that remain largely undiscovered.",
              icon: "🏔️",
            },
            {
              title: "Rich Culture",
              description: "Immerse yourself in millennia of history, art, and traditions of the Kurdish people.",
              icon: "🎭",
            },
            {
              title: "Culinary Excellence",
              description: "Taste authentic Kurdish cuisine crafted from centuries-old family recipes.",
              icon: "🍲",
            },
            {
              title: "Warm Hospitality",
              description: "Feel welcomed by the legendary hospitality of the Kurdish people.",
              icon: "🤝",
            },
            {
              title: "Adventure Awaits",
              description: "From hiking to paragliding, endless outdoor activities await thrill-seekers.",
              icon: "⛰️",
            },
            {
              title: "Hidden Gems",
              description: "Discover off-the-beaten-path locations that showcase true Kurdish beauty.",
              icon: "💎",
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-8 bg-gradient-to-br from-muted to-background">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What Our Travelers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Mitchell",
              location: "USA",
              text: "An absolutely unforgettable experience! The mountains, the food, the people—everything was perfect.",
              rating: 5,
            },
            {
              name: "Jean Pierre",
              location: "France",
              text: "The villas are stunning, and the attention to detail is impeccable. Highly recommend!",
              rating: 5,
            },
            {
              name: "Aisha Khan",
              location: "UAE",
              text: "Finally exploring my heritage in such a beautiful and organized way. Worth every penny!",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <Card key={idx} className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8">Get exclusive offers and travel tips delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent text-primary hover:bg-accent-light whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
