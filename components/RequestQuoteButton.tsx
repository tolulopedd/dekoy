'use client';

import { useQuoteModal } from './QuoteModalProvider';

type RequestQuoteButtonProps = {
  divisionId?: string;
  className?: string;
  label?: string;
};

export function RequestQuoteButton({
  divisionId,
  className,
  label = 'Request a Quote'
}: RequestQuoteButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      className={className}
      onClick={() => openQuoteModal(divisionId)}
      aria-label={`${label} for ${divisionId ?? 'your project'}`}
    >
      {label}
    </button>
  );
}
