import { Globe, ArrowUp, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FooterLinks } from "@/components/footer/footer-links"
import { FooterContact } from "@/components/footer/footer-contact"
import { CCLicense } from "@/components/footer/cc-license"

export function Footer() {
  return (
    <footer className="border-t bg-green-950 text-white">
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FooterLinks
            title="About Courses"
            links={[
              { label: "Request Online Course", href: "#" },
              { label: "Verify citehub.net Certificate", href: "#" },
              { label: "Help", href: "#" },
              { label: "Training Events", href: "#" },
              { label: "Pricing", href: "#" },
            ]}
          />

          <FooterLinks
            title="Company"
            links={[
              { label: "About Us", href: "#" },
              { label: "References", href: "#" },
              { label: "News", href: "#" },
              { label: "Our Crew", href: "#" },
              { label: "Affiliate Programme", href: "#" },
            ]}
          />

          <FooterContact />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="outline"
            className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-green-950"
          >
            <Globe className="mr-2 h-4 w-4" />
            Turkish
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-green-950"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Go To Top
          </Button>
        </div>

        <Separator className="my-6 bg-green-900" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-xs">
            Copyright © 2025 citehub.net all rights reserved |{" "}
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>

          <CCLicense />

          <div className="flex items-center gap-2">
            <div className="text-xs">Follow Us</div>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white hover:text-green-950">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white hover:text-green-950">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:justify-end">
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Agreements
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
