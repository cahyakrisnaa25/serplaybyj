import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("https://servers-frontend.fivem.net/api/servers/single/bak4pl");
    const data = await response.json();
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IDP", details: error.message });
  }
}
