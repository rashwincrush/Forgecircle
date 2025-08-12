import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }
  try {
    const { name, phone, college, address, designation, email, message, company_website } = req.body || {};

    // Honeypot check
    if (company_website) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !phone || !college || !address || !designation) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Placeholder: log to server. Replace with email, Slack, or CRM integration.
    console.log('[Contact] New submission', { name, phone, college, address, designation, email, message });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error', err);
    return res.status(500).json({ ok: false, error: 'Internal error' });
  }
}
