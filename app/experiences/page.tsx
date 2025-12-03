"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Clock, MapPin, Star } from "lucide-react"

const experiences = {
  nature: [
    {
      id: 1,
      title: "Hiking Through Pristine Valleys",
      location: "Zagros Mountains",
      duration: "6 hours",
      guests: "4-10",
      price: 89,
      rating: 4.9,
      reviews: 156,
      image: "placeholder.svg?key=h2j4k",
      description: "Trek through untouched valleys with breathtaking vistas and mountain air.",
    },
    {
      id: 2,
      title: "Waterfall Exploration",
      location: "Dokan Lake",
      duration: "4 hours",
      guests: "2-8",
      price: 65,
      rating: 4.8,
      reviews: 128,
      image: "placeholder.svg?key=w5n8p",
      description: "Discover hidden waterfalls and pristine natural pools in lush canyons.",
    },
    {
      id: 3,
      title: "Bird Watching Expedition",
      location: "Hawraman",
      duration: "5 hours",
      guests: "3-6",
      price: 75,
      rating: 4.7,
      reviews: 94,
      image: "placeholder.svg?key=m7q2s",
      description: "Spot rare bird species in their natural habitat with expert guides.",
    },
  ],
  culture: [
    {
      id: 4,
      title: "Ancient City Tour",
      location: "Erbil Citadel",
      duration: "3 hours",
      guests: "5-20",
      price: 45,
      rating: 4.9,
      reviews: 287,
      image: "placeholder.svg?key=a1c9v",
      description: "Walk through 7,000 years of history in one of the world's oldest cities.",
    },
    {
      id: 5,
      title: "Traditional Bazaar Walking Tour",
      location: "Sulaymaniyah",
      duration: "4 hours",
      guests: "2-10",
      price: 50,
      rating: 4.8,
      reviews: 201,
      image: "placeholder.svg?key=x3r7f",
      description: "Explore bustling souks, meet local artisans, and discover authentic crafts.",
    },
    {
      id: 6,
      title: "Museum & Art Gallery Tour",
      location: "Erbil",
      duration: "2 hours",
      guests: "1-15",
      price: 30,
      rating: 4.7,
      reviews: 112,
      image: "placeholder.svg?key=d8e4l",
      description: "Discover Kurdish art, history, and contemporary culture in world-class museums.",
    },
  ],
  food: [
    {
      id: 7,
      title: "Street Food Adventure",
      location: "Erbil Night Market",
      duration: "3 hours",
      guests: "4-10",
      price: 55,
      rating: 4.9,
      reviews: 312,
      image: "placeholder.svg?key=b6k1m",
      description: "Taste authentic Kurdish street food and local specialties from street vendors.",
    },
    {
      id: 8,
      title: "Kurdish Cooking Class",
      location: "Local Kitchen",
      duration: "4 hours",
      guests: "2-8",
      price: 80,
      rating: 4.9,
      reviews: 234,
      image: "placeholder.svg?key=n4j8q",
      description: "Learn to cook traditional Kurdish dishes from a local chef in their kitchen.",
    },
    {
      id: 9,
      title: "Wine Tasting & Cheese Selection",
      location: "Local Vineyard",
      duration: "2 hours",
      guests: "2-6",
      price: 60,
      rating: 4.8,
      reviews: 89,
      image: "placeholder.svg?key=t5r3w",
      description: "Sample local wines, artisan cheeses, and regional delicacies with sommelier guidance.",
    },
  ],
  snow: [
    {
      id: 10,
      title: "Skiing & Snowboarding",
      location: "Salim Bagh Ski Resort",
      duration: "8 hours",
      guests: "1-20",
      price: 120,
      rating: 4.8,
      reviews: 76,
      image: "placeholder.svg?key=z2v6s",
      description: "Hit the slopes at Kurdistan's premier ski resort with certified instructors.",
    },
    {
      id: 11,
      title: "Snowshoeing Through Pine Forests",
      location: "Zagros Snow Fields",
      duration: "5 hours",
      guests: "2-8",
      price: 70,
      rating: 4.9,
      reviews: 123,
      image: "placeholder.svg?key=h8p1n",
      description: "Trek through pristine snow-covered forests and enjoy the winter wilderness.",
    },
    {
      id: 12,
      title: "Ice Climbing Adventure",
      location: "Mountain Cliffs",
      duration: "6 hours",
      guests: "2-4",
      price: 150,
      rating: 4.7,
      reviews: 45,
      image: "placeholder.svg?key=k9b4f",
      description: "Challenge yourself with thrilling ice climbing on frozen waterfalls.",
    },
  ],
  history: [
    {
      id: 13,
      title: "Ancient Ruins Expedition",
      location: "Hewraman",
      duration: "7 hours",
      guests: "2-6",
      price: 95,
      rating: 4.9,
      reviews: 167,
      image: "placeholder.svg?key=w3q8j",
      description: "Explore archaeological sites with expert historians and uncover hidden secrets.",
    },
    {
      id: 14,
      title: "Textile & Weaving Heritage Tour",
      location: "Local Villages",
      duration: "4 hours",
      guests: "3-8",
      price: 65,
      rating: 4.8,
      reviews: 98,
      image: "placeholder.svg?key=x7m2a",
      description: "Learn about traditional Kurdish weaving and meet master artisans at work.",
    },
    {
      id: 15,
      title: "War Museum & Story Sharing",
      location: "Erbil",
      duration: "3 hours",
      guests: "1-15",
      price: 40,
      rating: 4.8,
      reviews: 203,
      image: "placeholder.svg?key=c5e9v",
      description: "Understand modern Kurdish history through stories and museum exhibits.",
    },
  ],
}

export default function ExperiencesPage() {
  const [activeTab, setActiveTab] = useState("nature")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Experiences</h1>
          <p className="text-xl text-foreground/70">Create unforgettable memories with our curated experiences</p>
        </div>
      </section>

      {/* Experiences Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl grid-cols-5 mb-12">
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="snow">Snow</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {Object.entries(experiences).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((exp) => (
                  <Card key={exp.id} className="overflow-hidden hover:shadow-2xl transition-all group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={`/ceholder-svg-key-exp.jpg?key=exp${exp.id}&${exp.image}`}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-serif font-bold mb-2">{exp.title}</h3>

                      {/* Meta Info */}
                      <div className="space-y-2 mb-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {exp.guests} people
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{exp.description}</p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(exp.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold">{exp.rating}</span>
                        <span className="text-xs text-foreground/60">({exp.reviews})</span>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-foreground/60">Price</p>
                          <p className="text-xl font-bold text-primary">${exp.price}</p>
                        </div>
                        <Button className="bg-primary hover:bg-primary-dark text-white">Book</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-lg text-white/80 mb-8">
            Book your experience today and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-accent whitespace-nowrap">Explore All Experiences</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 whitespace-nowrap bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
