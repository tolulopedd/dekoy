'use client';

import { useState } from 'react';
import { FaqItem } from '@/lib/types';

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? '');

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="rounded-xl border border-slate/15 bg-white p-4">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? '' : item.id)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
              id={`${item.id}-trigger`}
            >
              <span className="text-sm font-semibold text-ink sm:text-base">{item.question}</span>
              <span className="text-lg font-medium text-accent">{isOpen ? '-' : '+'}</span>
            </button>
            <div
              id={`${item.id}-content`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              className={`${isOpen ? 'mt-3 block' : 'hidden'} text-sm leading-relaxed text-slate`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
