
import { TubelightNavbarDemo } from "@/components/tubelight-navbar-demo";
import { FooterSection } from "@/components/footer-section";
import { Newspaper } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <TubelightNavbarDemo />
      <main className="container mx-auto px-4 py-24 md:py-32 min-h-[calc(100vh-180px)]"> {/* Adjusted padding & min-height */}
        <div className="flex flex-col items-center text-center">
          <Newspaper className="w-16 h-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12">
            Welcome to our blog! Discover insights, tips, and updates from the FancyType team.
          </p>
          <div className="p-8 border rounded-lg shadow-sm bg-card w-full max-w-3xl">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">Coming Soon!</h2>
            <p className="text-muted-foreground">
              We're working hard to bring you exciting content. Stay tuned for our latest articles.
            </p>
            <div className="mt-8">
              <img 
                src="https://placehold.co/600x400.png" 
                alt="Blog placeholder" 
                data-ai-hint="writing desk"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
