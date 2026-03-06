'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { companyProfile } from '@/data/company';
import { landingDivisions } from '@/data/landingDivisions';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  customerType: string;
  division: string;
  location: string;
  projectBrief: string;
  attachment: File | null;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  customerType: '',
  division: '',
  location: '',
  projectBrief: '',
  attachment: null
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setFormState((prev) => ({ ...prev, attachment: file }));
  };

  const validate = () => {
    if (!formState.fullName || formState.fullName.length < 2) {
      return 'Please enter your full name.';
    }

    if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      return 'Please enter a valid email address.';
    }

    if (!formState.phone || formState.phone.length < 6) {
      return 'Please provide a reachable phone number.';
    }

    if (!formState.customerType) {
      return 'Please select your customer type.';
    }

    if (!formState.division) {
      return 'Please select a division.';
    }

    if (!formState.location) {
      return 'Please provide your project location.';
    }

    if (!formState.projectBrief || formState.projectBrief.length < 20) {
      return 'Please provide a short project brief (minimum 20 characters).';
    }

    if (formState.attachment && formState.attachment.size > 5 * 1024 * 1024) {
      return 'Attachment must be 5MB or smaller.';
    }

    return '';
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('loading');

    try {
      const payload = new FormData();
      payload.append('source', 'contact-page');
      payload.append('fullName', formState.fullName);
      payload.append('email', formState.email);
      payload.append('phone', formState.phone);
      payload.append('customerType', formState.customerType);
      payload.append('division', formState.division);
      payload.append('location', formState.location);
      payload.append('projectBrief', formState.projectBrief);

      if (formState.attachment) {
        payload.append('attachment', formState.attachment);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || 'Submission failed');
      }

      setStatus('success');
      setFormState(initialState);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Could not submit your request right now. Please try again.'
      );
    }
  };

  return (
    <form className="space-y-4 rounded-2xl border border-slate/15 bg-white p-6 shadow-soft" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formState.fullName}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div>
          <label htmlFor="customerType" className="mb-1 block text-sm font-medium text-ink">
            Customer Type
          </label>
          <select
            id="customerType"
            name="customerType"
            value={formState.customerType}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="">Select customer type</option>
            {companyProfile.targetCustomers.map((segment) => (
              <option key={segment} value={segment}>
                {segment}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-1 block text-sm font-medium text-ink">
          Location
        </label>
        <input
          id="location"
          name="location"
          value={formState.location}
          onChange={handleInputChange}
          required
          className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="division" className="mb-1 block text-sm font-medium text-ink">
          Division
        </label>
        <select
          id="division"
          name="division"
          value={formState.division}
          onChange={handleInputChange}
          required
          className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
        <label htmlFor="projectBrief" className="mb-1 block text-sm font-medium text-ink">
          Project brief
        </label>
        <textarea
          id="projectBrief"
          name="projectBrief"
          value={formState.projectBrief}
          onChange={handleInputChange}
          rows={5}
          required
          className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div>
        <label htmlFor="attachment" className="mb-1 block text-sm font-medium text-ink">
          Attachment (optional)
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
          className="w-full rounded-lg border border-slate/25 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-mist file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-ink"
        />
      </div>

      {status === 'success' ? (
        <p className="rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-sm text-accent" role="status">
          Thank you. Your request has been submitted successfully.
        </p>
      ) : null}

      {status === 'error' && errorMessage ? (
        <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}
