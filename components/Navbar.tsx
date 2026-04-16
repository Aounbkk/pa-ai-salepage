"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/PA_Logo.png"
              alt="PA Academy Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-white font-semibold text-sm sm:text-base">
              PA Academy
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#curriculum"
              className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm"
            >
              เนื้อหาหลักสูตร
            </a>
            <a
              href="#benefits"
              className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm"
            >
              สิ่งที่ได้รับ
            </a>
            <a
              href="#pricing"
              className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm"
            >
              ราคา
            </a>
            <a
              href="#faq"
              className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm"
            >
              คำถามที่พบบ่อย
            </a>
            <a
              href="#pricing"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] font-semibold px-6 py-2.5 rounded-full transition-all text-sm"
            >
              สมัครเรียนทันที
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <a
                href="#curriculum"
                onClick={() => setIsOpen(false)}
                className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm py-2"
              >
                เนื้อหาหลักสูตร
              </a>
              <a
                href="#benefits"
                onClick={() => setIsOpen(false)}
                className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm py-2"
              >
                สิ่งที่ได้รับ
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm py-2"
              >
                ราคา
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="text-[var(--gray-200)] hover:text-[var(--gold)] transition-colors text-sm py-2"
              >
                คำถามที่พบบ่อย
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] font-semibold px-6 py-3 rounded-full transition-all text-sm text-center mt-2"
              >
                สมัครเรียนทันที
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
