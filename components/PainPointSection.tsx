export default function PainPointSection() {
  const painPoints = [
    {
      icon: "😩",
      title: "สื่อสารแทนคนอื่น",
      desc: "ต้องร่างอีเมล เอกสาร ในนาม exec ให้ได้ tone ที่ใช่ ทุกครั้ง",
    },
    {
      icon: "🔄",
      title: "รวบรวมและสรุปข้อมูล",
      desc: "ต้องสรุปข้อมูลจากหลายแหล่ง ให้ผู้อื่นตัดสินใจได้เร็ว",
    },
    {
      icon: "⏰",
      title: "งานซ้ำที่ใช้เวลามาก",
      desc: "Meeting prep, briefing note, follow-up ทำมือทุกครั้ง",
    },
    {
      icon: "🤯",
      title: "ใช้ AI ไม่เต็มศักยภาพ",
      desc: "ใช้ AI แค่ถาม-ตอบ เหมือน search engine ไม่ได้ผลลัพธ์ที่ตรงงาน",
    },
  ];

  return (
    <section className="bg-[var(--gray-50)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ปัญหาที่ PA ทุกคนเจอ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)]">
            คุณเคยเจอปัญหาเหล่านี้ไหม?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--gray-100)] hover:shadow-md hover:border-red-100 transition-all duration-300 group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">
                {point.icon}
              </span>
              <h3 className="text-lg font-bold text-[var(--gray-800)] mb-2">
                {point.title}
              </h3>
              <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
