import { randomUUID } from 'crypto';
import { appendFile, mkdir } from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const CONTACT_RECIPIENT = 'abiodun.adekoya@dekoyng.com';
const emailRegex = /^\S+@\S+\.\S+$/;

type SubmissionPayload = {
  source: string;
  fullName: string;
  email: string;
  phone?: string;
  customerType?: string;
  division: string;
  location?: string;
  projectBrief: string;
  attachment?: {
    name: string;
    type: string;
    size: number;
  } | null;
};

const requiredForContactPage = [
  'fullName',
  'email',
  'phone',
  'customerType',
  'division',
  'location',
  'projectBrief'
] as const;

function validatePayload(payload: SubmissionPayload): string | null {
  if (!payload.fullName || payload.fullName.length < 2) {
    return 'Invalid full name.';
  }

  if (!emailRegex.test(payload.email)) {
    return 'Invalid email address.';
  }

  if (!payload.division) {
    return 'Division is required.';
  }

  if (!payload.projectBrief || payload.projectBrief.length < 10) {
    return 'Project brief is too short.';
  }

  if (payload.source !== 'modal') {
    for (const field of requiredForContactPage) {
      if (!payload[field]) {
        return `Missing required field: ${field}`;
      }
    }
  }

  return null;
}

async function parsePayload(request: NextRequest): Promise<SubmissionPayload> {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    const body = await request.json();
    return {
      source: String(body.source ?? 'unknown').trim(),
      fullName: String(body.fullName ?? '').trim(),
      email: String(body.email ?? '').trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      customerType: body.customerType ? String(body.customerType).trim() : undefined,
      division: String(body.division ?? '').trim(),
      location: body.location ? String(body.location).trim() : undefined,
      projectBrief: String(body.projectBrief ?? '').trim(),
      attachment: null
    };
  }

  const formData = await request.formData();
  const attachment = formData.get('attachment');

  return {
    source: String(formData.get('source') ?? 'contact-page').trim(),
    fullName: String(formData.get('fullName') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    customerType: String(formData.get('customerType') ?? '').trim(),
    division: String(formData.get('division') ?? '').trim(),
    location: String(formData.get('location') ?? '').trim(),
    projectBrief: String(formData.get('projectBrief') ?? '').trim(),
    attachment:
      attachment instanceof File
        ? {
            name: attachment.name,
            type: attachment.type,
            size: attachment.size
          }
        : null
  };
}

function buildEmailText(payload: SubmissionPayload): string {
  const lines = [
    'New website quote request',
    '',
    `Source: ${payload.source}`,
    `Full Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone ?? 'N/A'}`,
    `Customer Type: ${payload.customerType ?? 'N/A'}`,
    `Division: ${payload.division}`,
    `Location: ${payload.location ?? 'N/A'}`,
    '',
    'Project Brief:',
    payload.projectBrief
  ];

  if (payload.attachment) {
    lines.push('');
    lines.push(
      `Attachment: ${payload.attachment.name} (${payload.attachment.type || 'unknown type'}, ${payload.attachment.size} bytes)`
    );
  }

  return lines.join('\n');
}

async function sendSubmissionEmail(payload: SubmissionPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  if (!from) {
    throw new Error('RESEND_FROM_EMAIL is not configured.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_RECIPIENT],
      reply_to: payload.email,
      subject: `New Quote Request - ${payload.division}`,
      text: buildEmailText(payload)
    })
  });

  if (!response.ok) {
    const result = (await response.json().catch(() => null)) as
      | { message?: string; error?: string; name?: string }
      | null;
    throw new Error(result?.message || result?.error || 'Resend email delivery failed.');
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await parsePayload(request);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    const record = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload
    };

    const storageDirectory = path.join(process.cwd(), 'storage');
    const filePath = path.join(storageDirectory, 'quote-submissions.jsonl');

    await mkdir(storageDirectory, { recursive: true });
    await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8');

    await sendSubmissionEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to process submission.';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
