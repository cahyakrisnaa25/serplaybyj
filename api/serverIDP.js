import axios from "axios";

export default async function handler(req, res) {
  try {
    const url = "https://servers-frontend.fivem.net/api/servers/single/bak4pl";
    const { data } = await axios.get(url, { timeout: 5000 });

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: "Gagal ambil data dari server IDP",
      details: err.message
    });
  }
}
