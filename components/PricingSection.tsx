export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[var(--gold)]/10 text-[var(--gold-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ราคาพิเศษ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)] mb-4">
            ลงทุนกับอนาคตการทำงานของคุณ
          </h2>
        </div>

        {/* Pricing card */}
        <div className="relative max-w-lg mx-auto">
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--navy)] text-sm font-bold px-6 py-2 rounded-full shadow-lg">
              🔥 ราคาพิเศษช่วงเปิดตัว
            </span>
          </div>

          <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] rounded-3xl p-8 sm:p-10 border border-[var(--gold)]/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-white text-xl font-bold mb-2">
                Claude Co-Work for Support Professionals
              </h3>
              <p className="text-[var(--gray-400)] text-sm">
                หลักสูตร 1 วันเต็ม + Bonus ทั้งหมด
              </p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-[var(--gray-400)] line-through text-lg">
                  ฿7,900
                </span>
                <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  -37%
                </span>
              </div>
              <div className="flex items-end justify-center gap-1">
                <span className="text-[var(--gold)] text-5xl sm:text-6xl font-extrabold">
                  ฿4,900
                </span>
                <span className="text-[var(--gray-400)] text-sm mb-2">
                  /ท่าน
                </span>
              </div>
            </div>

            {/* What's included */}
            <div className="space-y-3 mb-8">
              {[
                "เรียน Workshop 1 วันเต็ม (09:00–17:00) — Workshop 65%",
                "Prompt Library ส่วนตัว พร้อม Template 10–15 แบบ",
                "Claude Project ส่วนตัว ตั้งค่าพร้อมใช้",
                "เคสตัวอย่าง: อีเมล / briefing note / meeting agenda",
                "30-Day Commit Plan พร้อมวิธีวัดผล",
                "Recording ย้อนหลัง 30 วัน",
                "Certificate of Completion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
                  </svg>
                  <span className="text-[var(--gray-200)] text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="pulse-glow block w-full text-center bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--navy)] font-bold text-lg py-4 rounded-full hover:scale-105 transition-transform"
            >
              สมัครเรียนทันที
            </a>

            <p className="text-center text-[var(--gray-400)] text-xs mt-4">
              * รับจำนวนจำกัด 30 ท่าน/รุ่น เพื่อคุณภาพการเรียนรู้
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-[var(--gray-400)] text-sm">
          <div className="flex items-center gap-2">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>ชำระเงินปลอดภัย</span>
          </div>
          <div className="flex items-center gap-2">
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
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span>รองรับบัตรเครดิต/โอนเงิน</span>
          </div>
          <div className="flex items-center gap-2">
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
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
              />
            </svg>
            <span>ออกใบเสร็จ/ใบกำกับภาษีได้</span>
          </div>
        </div>
      </div>
    </section>
  );
}
