"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, Wallet, Star, Edit2, Download } from "lucide-react"

export default function DashboardPage() {
  const userBookings = [
    {
      id: 1,
      name: "Mountain Majesty Tour",
      type: "Tour",
      date: "Mar 15-20, 2025",
      status: "confirmed",
      price: 1299,
      image: "placeholder.svg?key=db001",
    },
    {
      id: 2,
      name: "Mountain Panorama Villa",
      type: "Villa",
      date: "Apr 1-5, 2025",
      status: "pending",
      price: 2250,
      image: "placeholder.svg?key=db002",
    },
  ]

  const favorites = [
    {
      id: 1,
      name: "Cliff Edge Retreat",
      type: "Villa",
      price: 550,
      image: "placeholder.svg?key=db003",
    },
    {
      id: 2,
      name: "Culinary Adventure",
      type: "Experience",
      price: 749,
      image: "placeholder.svg?key=db004",
    },
    {
      id: 3,
      name: "Peak Explorer",
      type: "Tour",
      price: 1599,
      image: "placeholder.svg?key=db005",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">My Dashboard</h1>
            <p className="text-foreground/70">Welcome back, Sarah</p>
          </div>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Bookings", value: "2" },
            { icon: Heart, label: "Favorites", value: "12" },
            { icon: Wallet, label: "Total Spent", value: "$3,549" },
            { icon: Star, label: "Avg Rating", value: "4.8" },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-primary/20" />
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="mt-8">
            <div className="space-y-6">
              {userBookings.map((booking) => (
                <Card key={booking.id} className="p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={`/ceholder-svg-key-bk.jpg?key=bk${booking.id}`}
                        alt={booking.name}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-serif font-bold">{booking.name}</h3>
                          <p className="text-sm text-foreground/60 mt-1">{booking.type}</p>
                        </div>
                        <Badge
                          className={`${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                        <Calendar className="w-4 h-4" />
                        {booking.date}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary">${booking.price}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                            <Download className="w-4 h-4" />
                            Receipt
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                            <Edit2 className="w-4 h-4" />
                            Modify
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={`/ceholder-svg-key-fav.jpg?key=fav${item.id}`}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full hover:bg-accent transition-colors">
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-foreground/60 mb-3">{item.type}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-primary">${item.price}</p>
                      <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-8">
            <Card className="p-8 max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Mitchell"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="sarah@example.com"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 234 567 8900"
                    className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Language</label>
                  <select className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>English</option>
                    <option>Kurdish</option>
                    <option>Arabic</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button className="bg-primary hover:bg-primary-dark text-white">Save Changes</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Footer />
    </main>
  )
}
