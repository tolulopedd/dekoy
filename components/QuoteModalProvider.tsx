'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FormEvent, ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { landingDivisions } from '@/data/landingDivisions';
import { Icon } from './Icons';

type QuoteModalContextType = {
  openQuoteModal: (divisionId?: string) => void;
};

const QuoteModalContext = createContext<QuoteModalContextType | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [divisionId, setDivisionId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const openQuoteModal = (prefillDivisionId?: string) => {
    setDivisionId(prefillDivisionId ?? '');
    setStatus('idle');
    setErrorMessage('');
    setIsOpen(true);
  };

  const submitQuickQuote = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      source: 'modal',
      fullName: String(formData.get('fullName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      division: String(formData.get('division') ?? '').trim(),
      projectBrief: String(formData.get('projectBrief') ?? '').trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || 'Request failed');
      }

      setStatus('success');
      setDivisionId('');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'We could not submit your request. Please try again.'
      );
    }
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/55 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-label="Request quote dialog"
          >
            <motion.div
              className="w-full max-w-xl rounded-2xl border border-white/25 bg-white p-6 shadow-soft"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">Request a Quote</h2>
                  <p className="mt-1 text-sm text-slate">
                    Share your requirements and a DeKoy advisor will respond promptly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-slate/25 p-2 text-slate transition hover:border-slate/50 hover:text-ink"
                  aria-label="Close request quote dialog"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={submitQuickQuote}>
                <div>
                  <label htmlFor="quote-fullName" className="mb-1 block text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input
                    id="quote-fullName"
                    name="fullName"
                    required
                    className="w-full rounded-lg border border-slate/30 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="mb-1 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate/30 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="quote-division" className="mb-1 block text-sm font-medium text-ink">
                    Division
                  </label>
                  <select
                    id="quote-division"
                    name="division"
                    required
                    value={divisionId}
                    onChange={(event) => setDivisionId(event.target.value)}
                    className="w-full rounded-lg border border-slate/30 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Select division</option>
                    {landingDivisions.map((division) => (
                      <option key={division.id} value={division.id}>
                        {division.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-projectBrief" className="mb-1 block text-sm font-medium text-ink">
                    Project brief
                  </label>
                  <textarea
                    id="quote-projectBrief"
                    name="projectBrief"
                    required
                    rows={3}
                    className="w-full rounded-lg border border-slate/30 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                {status === 'success' ? (
                  <p className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-accent" role="status">
                    Request received. Our team will contact you shortly.
                  </p>
                ) : null}
                {status === 'error' ? (
                  <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                    {errorMessage || 'We could not submit your request. Please try again.'}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'Submitting...' : 'Send Request'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider');
  }

  return context;
}
