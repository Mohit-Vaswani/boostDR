'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What do I really get?',
    answer: 'You’ll get instant access to a curated database (in notion) of 200+ high DR websites & directories to submit your website, tool, or SaaS.'
  },
  {
    question: 'How often is it updated?',
    answer: 'We’ll monthly update and add new directories.'
  },
  {
    question: 'Will I get access to new sites for free?',
    answer: 'Yes, all updates are included in your one-time payment.'
  },
  {
    question: 'Can I filter or search the data?',
    answer: 'Yes! The database is structured so you can easily filter by domain rating, niche, traffic, and more.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'No, its a digital product, so no refund will provided.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-[#FFF8E7] p-8 text-black'>
      <h2 className='text-3xl md:text-5xl font-bold text-center mb-10'>Got Questions?</h2>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-special p-6 rounded-lg shadow-md border-2 border-black transition-all ${openIndex === index ? 'bg-pink-400' : 'bg-[#ffd66b]'}`}
          >
            <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFAQ(index)}>
              <h3 className='font-semibold'>{faq.question}</h3>
              {openIndex === index ? <Minus /> : <Plus />}
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className='mt-2 text-sm'
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
