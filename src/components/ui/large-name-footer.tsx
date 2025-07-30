
"use client";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-background border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8 h-8 text-primary" />
              <h2 className="text-lg font-bold text-foreground">FancyType</h2>
            </Link>
            <p className="text-sm text-muted-foreground mt-5">
              © {new Date().getFullYear()} FancyType. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-2">
                <Link href="#" aria-label="Twitter">
                    <Button variant="outline" size="icon">
                        <Icons.twitter className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href="#" aria-label="GitHub">
                    <Button variant="outline" size="icon">
                        <Icons.gitHub className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/web-development" className="text-muted-foreground hover:text-primary">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/app-development" className="text-muted-foreground hover:text-primary">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/erp-software" className="text-muted-foreground hover:text-primary">
                    ERP Software
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-primary"> {/* Assuming #about is on homepage */}
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-primary"> {/* Assuming #projects is on homepage */}
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                 <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-primary"> {/* Assuming #contact is on homepage */}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-12 pt-8 border-t border-border items-center justify-center">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-muted-foreground to-foreground select-none">
            FancyType
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
