"use client";

import { useState } from "react";

const modules = [
  {
    id: 1,
    time: "09:00 – 10:15",
    title: "Session 1: เปลี่ยน Mindset — จาก 'ใช้ AI' สู่ 'ทำงานกับ AI'",
    subtitle: "เข้าใจว่า Claude เป็น Partner ไม่ใช่ Search Engine",
    topics: [
      "Claude มีตัวตน — มีค่านิยม บอกเมื่อไม่แน่ใจ ไม่แต่งข้อมูลขึ้นมาเอง",
      "ต่างจาก ChatGPT และ AI อื่นยังไง (Demo เปรียบเทียบ prompt เดียวกัน)",
      "Context = หน่วยความจำ — ยิ่งบอก context ครบ ผลลัพธ์ดีขึ้นมาก",
      "Claude บอกเมื่อไม่รู้ — ปลอดภัยกว่าสำหรับงานที่มีผลจริง",
      "วิธีตรวจสอบ output ก่อนนำไปรายงาน exec",
      "Workshop: ลองคุย Claude เหมือนเพื่อนร่วมงาน — บอก role / context / ดูความแตกต่าง (30 นาที)",
    ],
    icon: "🧠",
  },
  {
    id: 2,
    time: "10:30 – 12:00",
    title: "Session 2: งานประจำวันของทีมสนับสนุน × Claude — ลงมือทำจริง",
    subtitle: "นำงานจริง 4 ประเภทมาฝึกกับ Claude ทันที",
    topics: [
      "อีเมลและการสื่อสาร — ร่างอีเมลในนาม exec, ตอบอีเมลยาก/sensitive, แปลง tone",
      "Meeting Prep — สรุป agenda, เตรียม talking points, สร้าง pre-read brief",
      "Briefing Note — รวบข้อมูลหลายแหล่งให้สั้นและตัดสินใจได้",
      "เอกสารทางการ — จดหมาย / MOU outline / report structure พร้อม template",
      "Workshop: เลือก 1 งานจริงมาลอง — เขียน prompt / ดูผล / ปรับ / ดูผลใหม่ (40 นาที)",
    ],
    icon: "✍️",
  },
  {
    id: 3,
    time: "13:00 – 14:30",
    title: "Session 3: Claude เป็น Thinking Partner ของทีมสนับสนุน",
    subtitle: "Superpower ที่ทีมสนับสนุนส่วนใหญ่ยังไม่มี",
    topics: [
      "เตรียมรับมือ exec — Prompt: 'ถ้าเป็น exec คุณจะถามอะไรจากเอกสารนี้?'",
      "ฝึก Scenario Planning ก่อนเข้าห้องประชุม + สร้าง Q&A sheet ล่วงหน้า",
      "Devil's Advocate Mode — ให้ Claude หาจุดอ่อนของ proposal ก่อนส่ง exec",
      "Research Synthesis — วาง source หลายอัน ให้ Claude สรุปประเด็น 1 หน้า",
      "Confidential Layer — อะไรพิมพ์ได้ / อะไรไม่ควรพิมพ์ / วิธี anonymize ข้อมูล",
      "Workshop: กรณีศึกษา — นำสถานการณ์จริงมาฝึก Thinking Partner mode (30 นาที)",
    ],
    icon: "🤝",
  },
  {
    id: 4,
    time: "15:00 – 17:00",
    title: "Session 4: สร้าง Co-Work System ของตัวเอง",
    subtitle: "เรียนจบวันนี้ พรุ่งนี้ใช้ได้เลย",
    topics: [
      "Prompt Library — ระบุ 5 งานที่ทำซ้ำบ่อยที่สุด เขียน template prompt พร้อมใช้",
      "โครงสร้าง Prompt: Role + Context + Task + Format",
      "Claude Projects — สร้าง Project สำหรับ exec ที่ดูแล เก็บสไตล์ / ลำดับสำคัญ / ประวัติ",
      "30-Day Commit Plan — เลือก 3 สิ่งที่จะเริ่มใช้สัปดาห์หน้า พร้อมวัดผล",
      "Workshop: สร้าง Prompt Library + Claude Project ของตัวเอง และนำเสนอ (60 นาที)",
    ],
    icon: "🏗️",
  },
];

export default function CurriculumSection() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section
      id="curriculum"
      className="bg-[var(--gray-50)] py-16 sm:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-[var(--navy)]/5 text-[var(--navy)] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            หลักสูตร 1 วันเต็ม (09:00 – 17:00) | Workshop 65% / Concept 35%
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)] mb-4">
            เนื้อหาหลักสูตร
          </h2>
          <p className="text-[var(--gray-600)] text-base sm:text-lg max-w-2xl mx-auto">
            4 Sessions ที่ออกแบบมาเพื่อให้คุณนำไปใช้ได้จริง ตั้งแต่เปลี่ยน Mindset
            จนถึงสร้าง Co-Work System ของตัวเอง
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openModule === mod.id
                  ? "border-[var(--gold)]/40 shadow-lg shadow-[var(--gold)]/5"
                  : "border-[var(--gray-100)] hover:border-[var(--gray-200)]"
              }`}
            >
              <button
                onClick={() =>
                  setOpenModule(openModule === mod.id ? null : mod.id)
                }
                className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0">
                  {mod.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-xs text-[var(--gold-dark)] font-semibold bg-[var(--gold)]/10 px-2 py-0.5 rounded">
                      {mod.time}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--gray-800)]">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-[var(--gray-600)] mt-0.5 hidden sm:block">
                    {mod.subtitle}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-[var(--gray-400)] flex-shrink-0 transition-transform duration-300 ${
                    openModule === mod.id ? "rotate-180" : ""
                  }`}
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
              </button>

              {openModule === mod.id && (
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <div className="pl-12 sm:pl-16 border-t border-[var(--gray-100)] pt-4">
                    <p className="text-sm text-[var(--gray-600)] mb-3 sm:hidden">
                      {mod.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {mod.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5"
                        >
                          <svg
                            className="w-4 h-4 text-[var(--gold)] mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-[var(--gray-600)]">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
