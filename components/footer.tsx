import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f3f0eb] py-16 px-4 border-t border-[#e5e1d8]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Contact information */}
          <div>
            <h3 className="font-cormorant text-2xl text-[#2c3e2d] mb-6">Hafa samband</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-[#2c3e2d] mr-3" />
                <a
                  href="mailto:contact@studiobloom.is"
                  className="text-[#4a4a4a] hover:text-[#2c3e2d] transition-colors"
                >
                  contact@studiobloom.is
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-[#2c3e2d] mr-3" />
                <a href="tel:+3547830052" className="text-[#4a4a4a] hover:text-[#2c3e2d] transition-colors">
                  +354 783 0052
                </a>
              </div>
            </div>
          </div>

          {/* Social links - updated to clean outline icons */}
          <div>
            <h3 className="font-cormorant text-2xl text-[#2c3e2d] mb-6">Samfélagsmiðlar</h3>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.instagram.com/studio.bloom.reykjavik?igsh=OGo2c3l6ZnAzZHc0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e2d] hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574531437395"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e2d] hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e1d8] text-center text-sm text-[#4a4a4a]">
          &copy; {new Date().getFullYear()} Studio Bloom. Allur réttur áskilinn.
        </div>
      </div>
    </footer>
  )
}

