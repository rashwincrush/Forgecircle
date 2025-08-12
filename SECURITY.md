# Security Overview

- Authentication: Supabase Auth (JWT). MFA on roadmap.
- Authorization: RLS on all tables; SECURITY DEFINER helpers for admin checks; no client-side trust.
- Data isolation: Per-tenant `tenant_id` scoping; strict default-deny policies.
- Secrets: Service role keys server-only; least privilege; env scoping.
- Backups & DR: Scheduled backups; retention; tested restores; RPO/RTO targets.
- Privacy & Compliance: GDPR stance; DPA available; sub-processors listed.
- Vulnerability Management: Dependency scans and regular patch cadence.
- Uptime & Incidents: Status page; incident process; communication playbooks.

See `/docs/security` for deeper technical details.
