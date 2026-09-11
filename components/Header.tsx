'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  {
    name: 'PPP & Infrastructure',
    href: '/services/ppp-infrastructure',
  },
  {
    name: 'Investment & Project Development',
    href: '/services/investment-development',
  },
  {
    name: 'IT & Digital Transformation',
    href: '/services/it-digital',
  },
  {
    name: 'AI & Machine Learning',
    href: '/services/ai-ml',
  },
  {
    name: 'Cloud Migration: Azure & AWS',
    href: '/services/cloud-azure',
  },
  {
    name: 'Technology & Innovation',
    href: '/services/technology-innovation',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-blue-600">Zuriconsultant</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium">
            Projects & Opportunities
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Mobile Services */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center justify-between"
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transform transition ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setIsServicesOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Projects & Opportunities
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
