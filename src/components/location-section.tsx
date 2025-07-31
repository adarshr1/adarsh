"use client"

import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Section } from "./ui/section"
import { DirectionButton } from "./ui/direction-button"
import { cn } from "@/lib/utils"

export function LocationSection() {
  const businessAddress = "123 Business St, Tech City, TC 12345"
  const businessCoords = "40.7128,-74.0060" // Example coordinates (NYC)
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${businessCoords}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C${businessCoords}&key=YOUR_GOOGLE_MAPS_API_KEY`

  return (
    <Section 
      title="Find Us" 
      description="Visit our office or get in touch"
      id="location"
      className="bg-gradient-to-b from-background to-muted/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Map Preview */}
        <div className="relative group overflow-hidden rounded-xl border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <div className="aspect-video bg-muted/30 relative">
            {/* Map iframe or image */}
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(businessAddress)}`}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <DirectionButton 
                address={businessAddress}
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Our Office</h3>
            <p className="text-muted-foreground flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
              {businessAddress}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Working Hours</h4>
                <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Call Us</h4>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Email Us</h4>
                <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <DirectionButton 
              address={businessAddress}
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
