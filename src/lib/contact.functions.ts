import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './contact-schema';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendInquiryNotification(submission: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env['RESEND_API_KEY'];
  const to = process.env['INQUIRY_NOTIFICATION_EMAIL'];
  const from = process.env['RESEND_FROM_EMAIL'];
  console.log('[Email config check]', {
  apiKeyPresent: Boolean(apiKey),
  recipientPresent: Boolean(to),
  sender: from,
});
  // Email is optional in local development until Resend is configured.
  // The enquiry is already saved before this function is called.
  if (!apiKey || !to || !from) {
    console.warn(
      '[submitInquiry] Email notification skipped: configure RESEND_API_KEY, INQUIRY_NOTIFICATION_EMAIL, and RESEND_FROM_EMAIL.',
    );
    return;
  }

  const rows = [
    ['Name', submission.name],
    ['Email', submission.email],
    ['Phone', submission.phone || 'Not provided'],
    ['Company', submission.company || 'Not provided'],
    ['Service', submission.service],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(value)}</td></tr>`,
    )
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#222;max-width:640px;margin:auto;">
      <h2>New Brand Thrills enquiry</h2>
      <p>A new enquiry has been submitted through the website.</p>
      <table style="border-collapse:collapse;width:100%;">${htmlRows}</table>
      <h3>Project message</h3>
      <p style="white-space:pre-wrap;">${escapeHtml(submission.message)}</p>
    </div>
  `;

  const text = [
    'New Brand Thrills enquiry',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Project message:',
    submission.message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `New website enquiry: ${submission.name}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      // Do not log the API key or the full submitted message.
      const responseText = await response.text();
      console.error('[submitInquiry] Email notification failed:', {
        status: response.status,
        response: responseText.slice(0, 500),
      });
    }
  } catch (error) {
    console.error(
      '[submitInquiry] Email notification request failed:',
      error instanceof Error ? error.message : 'Unknown email error',
    );
  }
}

export const submitInquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { website: _website, ...submission } = data;
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

    const { data: saved, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert(submission)
      .select('id')
      .single();

    if (error || !saved) {
      console.error('[submitInquiry] Supabase insert failed:', {
        code: error?.code,
        message: error?.message,
        details: error?.details,
        hint: error?.hint,
      });
      return {
        success: false,
        message: 'Your inquiry could not be saved. Please try again or call us.',
      };
    }

    // The database insert is authoritative. A temporary email failure should
    // not tell the visitor to resubmit and accidentally create a duplicate.
    await sendInquiryNotification(submission);

    return {
      success: true,
      message: 'Your inquiry has been received.',
      id: saved.id,
    };
  });
