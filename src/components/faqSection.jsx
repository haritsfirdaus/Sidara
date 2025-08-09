import { useState } from "react";
import { faqs } from "../data/dataFAQ";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
  
    const toggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    const filteredFaqs = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">FAQ - Pertanyaan Umum</h2>
  
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-silver p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
  
        {/* FAQ List */}
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, index) => (
            <div key={index} className="mb-4 border rounded-lg shadow transition-all duration-300">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 bg-primary hover:bg-primary/95 font-semibold rounded-t-lg text-white transition duration-300"
              >
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-screen p-4 bg-silver rounded-b-lg text-primary' : 'max-h-0'
                }`}
              >
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Pertanyaan tidak ditemukan.</p>
        )}
      </div>
    );
  }

