export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const ENDPOINT = process.env.WEBINAR_APPS_SCRIPT_URL;
    const TOKEN = process.env.WEBINAR_TOKEN;

    if (!ENDPOINT) return res.status(500).json({ ok: false, error: "Missing WEBINAR_APPS_SCRIPT_URL" });
    if (!TOKEN) return res.status(500).json({ ok: false, error: "Missing WEBINAR_TOKEN" });

    const body = req.body || {};
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const org = String(body.org || "").trim();
    const role = String(body.role || "").trim();

    if (!name || !email || !org || !role) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    const payload = { ...body, name, email, org, role, token: TOKEN, received_at: new Date().toISOString() };

    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const txt = await r.text();

    // Intenta parsear JSON del Apps Script
    let upstream;
    try { upstream = JSON.parse(txt); } catch { upstream = { ok: r.ok, raw: txt }; }

    if (!r.ok) {
      return res.status(502).json({ ok: false, error: "Upstream error", upstream });
    }

    // ✅ Reenvía lo que dijo Apps Script (incluye deduped:true)
    return res.status(200).json(upstream);

  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
