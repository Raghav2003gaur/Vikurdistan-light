"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

const tours = [
  {
    id: 1,
    title: "Mountain Majesty",
    city: "zagros",
    days: 5,
    price: 1299,
    rating: 4.9,
    reviews: 234,
    difficulty: "moderate",
    image: "placeholder.svg?key=of7tg",
    description: "Experience breathtaking mountain views and pristine nature trails.",
  },
  {
    id: 2,
    title: "Cultural Heritage",
    city: "erbil",
    days: 4,
    price: 899,
    rating: 4.8,
    reviews: 189,
    difficulty: "easy",
    image: "placeholder.svg?key=b88ir",
    description: "Explore ancient cities, historic sites, and traditional culture.",
  },
  {
    id: 3,
    title: "Culinary Adventure",
    city: "sulaymaniyah",
    days: 3,
    price: 749,
    rating: 4.9,
    reviews: 156,
    difficulty: "easy",
    image: "placeholder.svg?key=yhqy7",
    description: "Taste authentic Kurdish cuisine and discover local markets.",
  },
  {
    id: 4,
    title: "Wilderness Expedition",
    city: "dohuk",
    days: 7,
    price: 1899,
    rating: 4.7,
    reviews: 98,
    difficulty: "hard",
    image: "placeholder.svg?key=wcl8m",
    description: "Ultimate adventure with camping, hiking, and wildlife spotting.",
  },
  {
    id: 5,
    title: "Desert Dreams",
    city: "erbil",
    days: 2,
    price: 599,
    rating: 4.6,
    reviews: 142,
    difficulty: "easy",
    image: "placeholder.svg?key=k4d5a",
    description: "Explore ancient desert landscapes and nomadic traditions.",
  },
  {
    id: 6,
    title: "Peak Explorer",
    city: "zagros",
    days: 6,
    price: 1599,
    rating: 4.9,
    reviews: 201,
    difficulty: "hard",
    image: "placeholder.svg?key=n9e2f",
    description: "Conquer the highest peaks and enjoy panoramic vistas.",
  },
]

export default function ToursPage() {
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [sortBy, setSortBy] = useState("popular")

  const cities = ["all", "erbil", "sulaymaniyah", "dohuk", "zagros"]
  const difficulties = ["all", "easy", "moderate", "hard"]

  const filtered = tours.filter((tour) => {
    const cityMatch = selectedCity === "all" || tour.city === selectedCity
    const difficultyMatch = selectedDifficulty === "all" || tour.difficulty === selectedDifficulty
    const priceMatch = tour.price >= priceRange[0] && tour.price <= priceRange[1]
    return cityMatch && difficultyMatch && priceMatch
  })

  // Sort
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating)
  } else {
    filtered.sort((a, b) => b.reviews - a.reviews)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Explore Our Tours</h1>
          <p className="text-xl text-foreground/70">Choose from {tours.length} carefully curated experiences</p>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* City Filter */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-serif font-bold text-lg mb-4">Destinations</h3>
                <div className="space-y-3">
                  {cities.map((city) => (
                    <label key={city} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="city"
                        value={city}
                        checked={selectedCity === city}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm capitalize group-hover:text-primary transition-colors">
                        {city === "all" ? "All Destinations" : city}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-serif font-bold text-lg mb-4">Difficulty</h3>
                <div className="space-y-3">
                  {difficulties.map((diff) => (
                    <label key={diff} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="difficulty"
                        value={diff}
                        checked={selectedDifficulty === diff}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                        className="w-4 h-4 accent-primary"
                      />
                      <span className="text-sm capitalize group-hover:text-primary transition-colors">
                        {diff === "all" ? "All Levels" : diff}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-serif font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">${priceRange[0]}</span>
                    <span className="font-semibold text-primary">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-foreground/70">
                Showing <span className="font-bold text-primary">{filtered.length}</span> tours
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm appearance-none pr-8 cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Tours Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filtered.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all group">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <img
                        src={`/placeholder.png?${tour.image}`}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/20 text-primary border-primary/30 capitalize">
                          {tour.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent/20 text-accent border-accent/30">{tour.days}d</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-2">{tour.title}</h3>
                      <p className="text-sm text-foreground/70 mb-4">{tour.description}</p>
                      <div className="flex items-center text-sm text-foreground/60 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="capitalize">{tour.city}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-6">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(tour.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold ml-1">{tour.rating}</span>
                        <span className="text-xs text-foreground/60">({tour.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-foreground/60">From</p>
                          <p className="text-2xl font-bold text-primary">${tour.price}</p>
                        </div>
                        <Button className="bg-primary hover:bg-primary-dark text-white">View Tour</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-foreground/60 mb-4">No tours match your filters</p>
                <Button
                  onClick={() => {
                    setSelectedCity("all")
                    setSelectedDifficulty("all")
                    setPriceRange([0, 2000])
                  }}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
