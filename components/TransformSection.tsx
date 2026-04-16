export default function TransformSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[var(--gold)]/10 text-[var(--gold-dark)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)] mb-4">
            จาก &ldquo;ผู้ใช้ AI&rdquo; สู่ &ldquo;ผู้กำกับ AI&rdquo;
          </h2>
          <p className="text-[var(--gray-600)] text-base sm:text-lg max-w-2xl mx-auto">
            หลักสูตรนี้จะเปลี่ยนวิธีที่คุณทำงานกับ AI อย่างสิ้นเชิง
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Before */}
          <div className="bg-[var(--gray-50)] rounded-3xl p-8 border border-[var(--gray-100)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-xl">
                😔
              </div>
              <div>
                <p className="text-xs text-red-500 font-semibold uppercase tracking-wider">
                  Before
                </p>
                <p className="text-lg font-bold text-[var(--gray-800)]">
                  ก่อนเรียน
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "ใช้ AI แบบถาม-ตอบ เหมือน search engine",
                "Copy-paste ข้อมูลไปมา ไม่เป็นระบบ",
                "เขียน Prompt กว้างๆ ได้ผลลัพธ์ไม่ตรงงาน",
                "ต้อง verify output เอง ไม่รู้วิธีตรวจสอบ",
                "ไม่มี Prompt Library — ทำใหม่ทุกครั้ง",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[var(--gray-600)] text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] rounded-3xl p-8 border border-[var(--gold)]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-xl">
                🚀
              </div>
              <div>
                <p className="text-xs text-[var(--gold)] font-semibold uppercase tracking-wider">
                  After
                </p>
                <p className="text-lg font-bold text-white">หลังเรียน</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "ทำงาน 'ร่วมกับ AI' ได้อย่างเป็นระบบ",
                "เขียน Prompt ที่มีประสิทธิภาพ — ได้ผลตรงงานจริง",
                "ใช้ Claude เป็น Thinking Partner เตรียมรับมือ exec",
                "มี Prompt Library + Claude Project ส่วนตัว",
                "Verify output ได้อย่างมั่นใจ — ใช้ AI อย่างปลอดภัย",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
                  </svg>
                  <span className="text-[var(--gray-200)] text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
