---
id: developer/architecture
title: Architecture Overview
---

High-level architecture:

- Frontend: React (Vite) for app; Next.js for marketing site.
- Backend: Node/Express with Drizzle ORM.
- Database: PostgreSQL (hosted). Row-Level Security (RLS) recommended for per-tenant isolation.
- Realtime: WebSocket-based updates; ensure single-subscription guards.

Note: If using Supabase, leverage Auth (JWT), Realtime channels, and Postgres RLS for strict isolation.
