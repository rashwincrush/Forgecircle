---
id: developer/rls-policies
title: RLS Policies
---

Principles:

- Default deny on all tables.
- Include `tenant_id` on every table; enforce `USING` and `WITH CHECK` clauses to scope to current tenant.
- Use SECURITY DEFINER helpers (e.g., `is_group_admin()`) for complex checks.
- Avoid recursive policies. Keep policy logic minimal and testable.

Example pattern (pseudocode):

```sql
CREATE POLICY org_row_access ON public.table
  FOR ALL
  USING (tenant_id = current_setting('app.tenant_id')::uuid)
  WITH CHECK (tenant_id = current_setting('app.tenant_id')::uuid);
```
