import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Site Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">DesiBhabi</h3>
          <p className="text-sm text-gray-400">
            India’s naughtiest Desi video platform. 100% free & unlimited.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
            <li><Link href="/trending" className="hover:text-white">Trending</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/advertise" className="hover:text-white text-yellow-400 font-medium">Advertise With Us</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-2">Popular Categories</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/category/desi" className="hover:text-white">Desi</Link></li>
            <li><Link href="/category/college" className="hover:text-white">College</Link></li>
            <li><Link href="/category/bhabhi" className="hover:text-white">Bhabhi</Link></li>
            <li><Link href="/category/hidden" className="hover:text-white">Hidden Cam</Link></li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <p className="text-xs text-gray-500 mb-1">
            <Link href="/terms" className="underline">Terms of Use</Link>
          </p>
          <p className="text-xs text-gray-500">
            <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TharkiBaba.com – All rights reserved. For adults 18+ only.
      </div>
    </footer>
  );
}
