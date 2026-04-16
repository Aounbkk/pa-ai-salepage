"use client";

import { useState } from "react";

const faqs = [
  {
    q: "ต้องมีพื้นฐาน AI มาก่อนไหม?",
    a: "ไม่ต้องมากค่ะ แค่เคย chat กับ AI มาบ้าง (ChatGPT, Gemini หรือ Claude) ก็พอ หลักสูตรจะพาตั้งแต่เปลี่ยน Mindset จนถึงสร้าง Co-Work System ของตัวเอง",
  },
  {
    q: "หลักสูตรนี้เหมาะกับใครบ้าง?",
    a: "เหมาะกับ 'ทุกบทบาทที่ทำให้องค์กรเดินหน้าได้' ได้แก่ PA/EA, ธุรการ/Admin, HR/People Ops, Finance, Legal/Compliance, IT Support, Ops/Project Coord. และ Marketing Support เพราะงานสนับสนุนทุกประเภทมีลักษณะร่วมกัน: ต้องสื่อสารแทนคนอื่น, ต้องสรุปข้อมูลให้ผู้อื่นตัดสินใจ, และต้องทำงานซ้ำที่ใช้เวลามาก",
  },
  {
    q: "เรียนแล้วใช้กับงานจริงได้เลยไหม?",
    a: "ได้เลยค่ะ สัดส่วน Workshop 65% ทุก Session ให้นำงานจริงมาลอง และ Session 4 คุณจะสร้าง Prompt Library + Claude Project ของตัวเอง พร้อมแผนปฏิบัติการ 30 วัน",
  },
  {
    q: "ถ้าเรียนไม่ทันหรือต้องการดูย้อนหลัง?",
    a: "มี Recording ให้ดูย้อนหลังได้ 30 วัน และเข้ากลุ่ม Community ถามคำถามกับทีมวิทยากรได้ตลอด",
  },
  {
    q: "ข้อมูลองค์กรปลอดภัยไหม?",
    a: "ในหลักสูตรจะสอน Confidential Layer — อะไรพิมพ์ได้ อะไรไม่ควรพิมพ์ วิธี anonymize ข้อมูลก่อนใช้ Claude และแนวทาง Data Privacy Policy ขั้นต้นสำหรับองค์กร",
  },
  {
    q: "องค์กรส่งคนมาเรียนหลายคนได้ไหม?",
    a: "ได้ค่ะ สมัครตั้งแต่ 3 คนขึ้นไปมีราคาพิเศษ ติดต่อทีมงานได้โดยตรงเพื่อรับ Corporate Package",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--gray-50)] py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--gray-800)]">
            คำถามที่พบบ่อย
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[var(--gray-100)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span className="text-base font-semibold text-[var(--gray-800)]">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--gray-400)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
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
              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <p className="text-sm text-[var(--gray-600)] leading-relaxed border-t border-[var(--gray-100)] pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
