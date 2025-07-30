
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactUsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-10 md:mb-16 max-w-2xl mx-auto">
          Have a question or want to discuss a project? We&apos;d love to hear from you.
        </p>
        
        <Card className="shadow-lg rounded-xl overflow-hidden mb-10 md:mb-16">
          {/* Responsive iframe container using padding-bottom trick for 16:9 aspect ratio */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Delhi"
              className="rounded-xl"
            ></iframe>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl font-semibold text-foreground">
                <MapPin className="h-6 w-6 mr-3 text-primary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                24/B, Near Nehru Metro,
                <br />
                New Delhi, 111001,
                <br />
                India
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl font-semibold text-foreground">
                <Mail className="h-6 w-6 mr-3 text-primary" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                <a href="mailto:info@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
