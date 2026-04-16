import Image from "next/image";

export default function InstructorSection() {
  return (
    <section className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-mid)] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-[var(--gold-light)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ผู้สอน
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            เรียนกับผู้เชี่ยวชาญตัวจริง
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[var(--gold)]/30 to-[var(--gold)]/10 border-2 border-[var(--gold)]/30 flex items-center justify-center">
                <Image
                  src="/PAITORSI_Logo.png"
                  alt="Instructor"
                  width={120}
                  height={120}
                  className="rounded-xl object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 text-center sm:text-left">
                PA Academy
              </h3>
              <p className="text-[var(--gold)] font-medium mb-4 text-center sm:text-left">
                สถาบันพัฒนาศักยภาพ PA & Admin มืออาชีพ
              </p>
              <div className="space-y-3 text-[var(--gray-200)] text-sm leading-relaxed">
                <p>
                  ทีมวิทยากรจาก PA Academy ผู้เชี่ยวชาญด้านการพัฒนาทักษะ
                  PA, EA และ Admin มากว่า 10 ปี
                  ผสมผสานกับความเชี่ยวชาญด้าน AI และ Automation
                </p>
                <p>
                  ผ่านการฝึกอบรมให้กับองค์กรชั้นนำมากกว่า 100 องค์กร
                  และผู้เรียนกว่า 5,000+ คน
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "AI for Business",
                  "Claude Expert",
                  "PA Development",
                  "Process Automation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-[var(--gray-200)] text-xs px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
