import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/PA_Logo.png"
              alt="PA Academy"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-white font-semibold text-sm">
              PA Academy
            </span>
          </div>

          <div className="flex items-center gap-6 text-[var(--gray-400)] text-sm">
            <a href="#" className="hover:text-white transition-colors">
              นโยบายความเป็นส่วนตัว
            </a>
            <a href="#" className="hover:text-white transition-colors">
              เงื่อนไขการใช้งาน
            </a>
            <a href="#" className="hover:text-white transition-colors">
              ติดต่อเรา
            </a>
          </div>

          <p className="text-[var(--gray-400)] text-xs">
            © 2026 PA Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
