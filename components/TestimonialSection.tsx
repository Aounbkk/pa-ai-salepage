export default function TestimonialSection() {
  const testimonials = [
    {
      name: "คุณพลอย",
      role: "Executive Assistant, บริษัทข้ามชาติ",
      text: "เมื่อก่อนใช้ AI แค่แปลภาษา ตอนนี้ Claude ช่วยสรุปอีเมล 50 ฉบับใน 5 นาที พร้อมร่าง reply ให้เลย ประหยัดเวลาไปวันละ 2 ชั่วโมง!",
      rating: 5,
    },
    {
      name: "คุณเมย์",
      role: "PA to CEO, บริษัทอสังหาริมทรัพย์",
      text: "Workshop นี้เปลี่ยนวิธีทำงานของเราเลย ตอนนี้ Claude ช่วยเตรียม Meeting Brief ให้ผู้บริหารได้เองอัตโนมัติ CEO ชมว่างานเร็วขึ้นมาก",
      rating: 5,
    },
    {
      name: "คุณแนน",
      role: "HR Admin, บริษัทเทคโนโลยี",
      text: "การเชื่อมต่อ Gmail กับ Google Drive เป็นสิ่งที่ตามหามานาน ตอนนี้ Claude จัดระเบียบเอกสาร HR ให้อัตโนมัติ ลดงาน manual ไปได้เกือบ 70%",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[var(--gray-50)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-purple-50 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            เสียงจากผู้เรียน
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)]">
            ผู้เรียนพูดถึงเราว่าอย่างไร
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[var(--gray-100)] hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[var(--gold)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                ))}
              </div>

              <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[var(--gray-100)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(3)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--gray-800)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--gray-400)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
