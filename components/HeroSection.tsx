import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy-mid)] overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[var(--gold)]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-[var(--gold-light)] text-sm font-medium">
                สำหรับ PA / EA / ธุรการ / HR / Finance / IT / Ops / Marketing Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
              <span className="block">Claude Co-Work</span>
              <span className="block mt-1">
                for{" "}
                <span className="gold-shimmer">Support Professionals</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--gold)] font-semibold mb-4">
              ทีมสนับสนุนคือผู้กำกับ — Claude คือมือขวา
            </p>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[var(--gray-200)] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              หลักสูตร 1 วันเต็มที่จะเปลี่ยนวิธี &ldquo;ใช้ AI&rdquo;
              ไปสู่การ &ldquo;ทำงานร่วมกับ AI&rdquo;
              เพิ่มประสิทธิภาพงานสนับสนุนหลังบ้านทุกบทบาท
              ด้วยสัดส่วน Workshop 65% / Concept 35%
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {[
                "🧠 เปลี่ยน Mindset การใช้ AI",
                "✍️ Prompt สำหรับงานจริง",
                "🤝 Thinking Partner",
                "⚡ Workshop 65%",
              ].map((feature) => (
                <span
                  key={feature}
                  className="bg-white/5 border border-white/10 text-[var(--gray-200)] text-sm px-4 py-2 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#curriculum"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base sm:text-lg"
              >
                ดูเนื้อหาหลักสูตร
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#pricing"
                className="pulse-glow inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--navy)] font-bold px-8 py-4 rounded-full transition-all duration-300 text-base sm:text-lg hover:scale-105"
              >
                สมัครเรียนทันที
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

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-[var(--gray-400)] text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--gold)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
                </svg>
                <span>ผู้เรียนกว่า 500+ คน</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--gold)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                <span>คะแนนรีวิว 4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="animate-float bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-[420px] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      Claude AI Assistant
                    </p>
                    <p className="text-[var(--gray-400)] text-xs">กำลังทำงาน...</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Chat simulation */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-[var(--gray-200)] text-sm leading-relaxed">
                      ✅ ร่างอีเมลในนาม CEO เรียบร้อย — tone: professional แต่ warm
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-[var(--gray-200)] text-sm leading-relaxed">
                      📋 Briefing Note 1 หน้า พร้อมคาดเดาคำถาม Board
                    </p>
                  </div>
                  <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-[var(--gold-light)] text-sm leading-relaxed">
                      🚀 หาจุดอ่อน Proposal + แนะนำสิ่งที่ควรเพิ่มก่อนส่ง exec
                    </p>
                  </div>
                </div>

                {/* Input bar */}
                <div className="mt-6 bg-white/5 rounded-full px-4 py-3 flex items-center gap-3">
                  <span className="text-[var(--gray-400)] text-sm flex-1">
                    สั่งงาน Claude ต่อ...
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[var(--navy)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Connected ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur border border-white/20 text-white text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Gmail + Drive
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="var(--gray-50)"
          />
        </svg>
      </div>
    </section>
  );
}
