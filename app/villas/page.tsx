"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Users, Wifi, UtensilsCrossed, Waves, Heart } from "lucide-react"

const villas = {
  luxury: [
    {
      id: 1,
      title: "Mountain Panorama Villa",
      location: "Salim Bagh",
      price: 450,
      guests: 8,
      bedrooms: 4,
      image: "placeholder.svg?key=ueq4i",
      rating: 4.9,
      reviews: 87,
      amenities: ["Pool", "Spa", "Kitchen", "WiFi", "Gym", "Terrace"],
      description: "Stunning villa with panoramic mountain views and world-class amenities.",
    },
    {
      id: 2,
      title: "Cliff Edge Retreat",
      location: "Rawanduz",
      price: 550,
      guests: 10,
      bedrooms: 5,
      image: "placeholder.svg?key=xcau1",
      rating: 5.0,
      reviews: 64,
      amenities: ["Infinity Pool", "Fireplace", "Bar", "Concierge", "Cinema", "Wine Cellar"],
      description: "Exclusive clifftop villa with unparalleled luxury and privacy.",
    },
    {
      id: 3,
      title: "Desert Oasis Palace",
      location: "Erbil",
      price: 400,
      guests: 12,
      bedrooms: 6,
      image: "placeholder.svg?key=d7k2x",
      rating: 4.8,
      reviews: 52,
      amenities: ["Pool", "Spa", "Restaurant", "Helipad", "Golf Course", "Stables"],
      description: "Palatial villa with desert views and exclusive outdoor spaces.",
    },
  ],
  budget: [
    {
      id: 4,
      title: "Valley View Cottage",
      location: "Sulaymaniyah",
      price: 120,
      guests: 4,
      bedrooms: 2,
      image: "placeholder.svg?key=f9m3l",
      rating: 4.7,
      reviews: 156,
      amenities: ["Kitchen", "WiFi", "Heating", "Terrace", "Parking"],
      description: "Charming cottage with comfortable amenities and stunning views.",
    },
    {
      id: 5,
      title: "Mountain Lodge",
      location: "Dohuk",
      price: 95,
      guests: 6,
      bedrooms: 3,
      image: "placeholder.svg?key=n4p8s",
      rating: 4.6,
      reviews: 203,
      amenities: ["Kitchen", "WiFi", "Fireplace", "Deck", "Parking"],
      description: "Cozy lodge perfect for families and groups seeking nature.",
    },
    {
      id: 6,
      title: "City Center Apartment",
      location: "Erbil",
      price: 80,
      guests: 2,
      bedrooms: 1,
      image: "placeholder.svg?key=q1r7v",
      rating: 4.5,
      reviews: 298,
      amenities: ["Kitchen", "WiFi", "AC", "Parking", "Laundry"],
      description: "Modern apartment in city center with easy access to attractions.",
    },
  ],
}

const amenityIcons = {
  Pool: Waves,
  Spa: Star,
  Kitchen: UtensilsCrossed,
  WiFi: Wifi,
  Gym: Heart,
  Terrace: Users,
}

export default function VillasPage() {
  const [activeTab, setActiveTab] = useState("luxury")
  const [selectedVilla, setSelectedVilla] = useState(null)
  const [wishlist, setWishlist] = useState(new Set())

  const toggleWishlist = (villaId) => {
    const newWishlist = new Set(wishlist)
    if (newWishlist.has(villaId)) {
      newWishlist.delete(villaId)
    } else {
      newWishlist.add(villaId)
    }
    setWishlist(newWishlist)
  }

  const displayVillas = villas[activeTab]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Luxury Villas & Stays</h1>
          <p className="text-xl text-foreground/70">Experience comfort and elegance in Kurdistan</p>
        </div>
      </section>

      {/* Villas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="luxury" className="text-lg">
              Luxury Collection
            </TabsTrigger>
            <TabsTrigger value="budget" className="text-lg">
              Budget Friendly
            </TabsTrigger>
          </TabsList>

          {/* Content */}
          <TabsContent value={activeTab} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayVillas.map((villa) => (
                <Card key={villa.id} className="overflow-hidden hover:shadow-2xl transition-all group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={`/placeholder.png?${villa.image}`}
                      alt={villa.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleWishlist(villa.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          wishlist.has(villa.id) ? "fill-red-500 text-red-500" : "text-foreground/40"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2">{villa.title}</h3>
                    <div className="flex items-center text-sm text-foreground/60 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {villa.location}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(villa.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold ml-1">{villa.rating}</span>
                      <span className="text-xs text-foreground/60">({villa.reviews})</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{villa.description}</p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-foreground/60 mb-2">AMENITIES</p>
                      <div className="flex flex-wrap gap-2">
                        {villa.amenities.slice(0, 4).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                      <div className="text-sm">
                        <p className="text-foreground/60 text-xs">Guests</p>
                        <p className="font-bold">{villa.guests}</p>
                      </div>
                      <div className="text-sm">
                        <p className="text-foreground/60 text-xs">Bedrooms</p>
                        <p className="font-bold">{villa.bedrooms}</p>
                      </div>
                      <div className="text-sm text-right">
                        <p className="text-foreground/60 text-xs">Per Night</p>
                        <p className="font-bold text-primary">${villa.price}</p>
                      </div>
                    </div>

                    {/* Button */}
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">Book Villa</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Why Our Villas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Locations",
              description: "Handpicked villas in the most stunning locations across Kurdistan.",
            },
            {
              title: "World-Class Service",
              description: "24/7 concierge service and dedicated support for an unforgettable stay.",
            },
            {
              title: "Authentic Experience",
              description: "Experience genuine Kurdish hospitality and local culture in luxury comfort.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="bg-card p-8">
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
