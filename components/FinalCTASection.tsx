export default function FinalCTASection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy-mid)] py-16 sm:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          พร้อมเปลี่ยนจาก &ldquo;ใช้ AI&rdquo;
          <br />
          <span className="gold-shimmer">สู่ &ldquo;ทำงานร่วมกับ AI&rdquo; แล้วหรือยัง?</span>
        </h2>
        <p className="text-[var(--gray-200)] text-base sm:text-lg mb-8 max-w-xl mx-auto">
          ทีมสนับสนุนคือคนที่องค์กรไว้ใจ — Claude ทำให้คุณทำงานได้เร็วขึ้นและฉลาดขึ้น
          เรียนจบวันนี้ พรุ่งนี้ใช้ได้เลย
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#pricing"
            className="pulse-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--navy)] font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform"
          >
            สมัครเรียนทันที — ฿4,900
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <p className="text-[var(--gray-400)] text-sm">
          รับจำนวนจำกัด 30 ท่าน/รุ่น | มีคำถาม?{" "}
          <a href="#" className="text-[var(--gold)] hover:underline">
            ติดต่อทีมงาน
          </a>
        </p>
      </div>
    </section>
  );
}
