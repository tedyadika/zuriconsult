import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-2">Zuriconsultant</div>
            <p className="text-sm text-gray-300">
              Consulting. Project Development. Technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white">
                  Projects & Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ppp-infrastructure"
                  className="text-gray-300 hover:text-white"
                >
                  PPP & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/investment-development"
                  className="text-gray-300 hover:text-white"
                >
                  Investment & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-digital"
                  className="text-gray-300 hover:text-white"
                >
                  IT & Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-ml"
                  className="text-gray-300 hover:text-white"
                >
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@zuriconsult.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <Mail size={16} />
                  <span>info@zuriconsult.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zuriconsultant/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Zuriconsultant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-300 hover:text-white">
                  Legal
                </Link>
              </li>
          </div>
        </div>
      </div>
    </footer>
  );
}
