export default function BenefitsSection() {
  const benefits = [
    {
      icon: "📋",
      title: "Prompt Library ส่วนตัว",
      desc: "คลัง Prompt สำเร็จรูป 10–15 แบบ แยกตามงานจริงของแต่ละบทบาท พร้อมใช้ทันที",
    },
    {
      icon: "🏗️",
      title: "Claude Project ส่วนตัว",
      desc: "Project ที่ตั้งค่าไว้สำหรับ exec ที่ดูแล เก็บสไตล์การสื่อสาร + ลำดับความสำคัญ",
    },
    {
      icon: "📝",
      title: "Prompt Template เปล่า",
      desc: "โครงสร้าง Role + Context + Task + Format พร้อม template สำหรับทุก use case",
    },
    {
      icon: "🎯",
      title: "30-Day Commit Plan",
      desc: "แผนปฏิบัติการ 30 วัน เลือก 3 สิ่งที่จะเริ่มใช้ พร้อมวิธีวัดผล",
    },
    {
      icon: "🎥",
      title: "Recording ย้อนหลัง",
      desc: "วิดีโอบันทึกการสอนดูย้อนหลังได้ 30 วัน",
    },
    {
      icon: "📜",
      title: "Certificate of Completion",
      desc: "ใบประกาศนียบัตรจาก PA Academy",
    },
  ];

  return (
    <section id="benefits" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-emerald-50 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            มูลค่ารวมกว่า 15,000 บาท
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)] mb-4">
            สิ่งที่คุณจะได้รับ
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-[var(--gray-50)] hover:bg-gradient-to-br hover:from-[var(--navy)] hover:to-[var(--navy-mid)] rounded-2xl p-6 transition-all duration-300 border border-[var(--gray-100)] hover:border-[var(--gold)]/20"
            >
              <span className="text-3xl block mb-4">{b.icon}</span>
              <h3 className="text-lg font-bold text-[var(--gray-800)] group-hover:text-white mb-2 transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-[var(--gray-600)] group-hover:text-[var(--gray-200)] leading-relaxed transition-colors">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
