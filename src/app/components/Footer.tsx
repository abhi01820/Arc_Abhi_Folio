import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-gray-800 relative z-10">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0 flex items-center justify-center md:justify-start gap-4">
            <Link href="/" className="block relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#00f2fe] hover:shadow-[0_0_15px_rgba(0,242,254,0.6)] transition-all shrink-0">
              <Image 
                src="/Abhi Rowdy Pic.png" 
                alt="Abhilash" 
                fill 
                className="object-cover"
              />
            </Link>
            <div className="flex flex-col text-left">
              <Link href="/" className="text-xl font-bold text-[#00f2fe] font-mono hover:text-white transition-colors">
                AbhiFolio
              </Link>
              <p className="text-sm text-[#00ff41] mt-1 font-mono">
                © {new Date().getFullYear()} AbhiFolio. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/abhi01820"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/abhilash_01820"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhilash-mekala-b2a903355/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 