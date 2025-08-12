---
id: developer/realtime
title: Realtime Channels
---

Guidelines:

- Maintain a single channel subscription per scope; prevent duplicate `.subscribe()` calls.
- Implement exponential backoff + jitter for reconnects; mark offline/online states.
- Make handlers idempotent; de-duplicate events via IDs or timestamps.
- Clean up listeners on unmount.
