---
id: security
title: Security
---

- Authentication: sessions/JWT; MFA roadmap.
- Authorization: least privilege, RLS (if Postgres) or equivalent.
- Data Isolation: per-tenant row isolation; no cross-tenant queries.
- Backups & DR: schedules, retention; RPO/RTO targets.
- Privacy & Compliance: GDPR stance, DPA availability, sub-processors.
- Vulnerability Mgmt: dependency scans, patch cadence.
- Uptime: status page, incident playbooks.
