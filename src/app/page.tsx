"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [domain, setDomain] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);

  const [websites, setWebsites] = useState([]);

  const [cookieList, setCookieList] = useState([]);

  const fetchCookies = async () => {
    const res = await fetch("/api/cookies-data");
    const json = await res.json();
    setCookieList(json);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/cookies-data/${id}`, { method: "DELETE" });
    fetchCookies();
  };

  useEffect(() => {
    fetchWebsite();
    fetchCookies();
  }, []);

  const handleSubmit = async () => {
    if (!text || !domain || !label) return;

    setLoading(true);
    const res = await fetch("/api/cookies", {
      method: "POST",
      body: JSON.stringify({ raw: text, domain, label }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      setText("");
      setLabel("");
    }
    setLoading(false);
  };

  const fetchWebsite = async () => {
    const result = await fetch("/api/website");
    const data = await result.json();
    setWebsites(data);
  };

  return (
    <>
      <main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 space-y-6">
        <h1 className="text-3xl font-bold text-center">Input Cookie</h1>

        <div className="space-y-2">
          <label className="block font-semibold">Pilih Website</label>
          <select
            className="w-full border rounded p-2"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            <option value="">-- Pilih Website --</option>
            {websites.map((site: any, i: number) => (
              <option key={i} value={site.id}>
                {site.name} - {site.id}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Nama Cookie</label>
          <input
            className="w-full border rounded p-2"
            placeholder="Contoh: session_token"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">
            Paste Cookie (Netscape Format)
          </label>
          <textarea
            rows={10}
            className="w-full border rounded p-2 font-mono text-sm"
            placeholder="# Netscape HTTP Cookie File..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !text || !domain || !label}
          className={`w-full py-2 px-4 rounded text-white font-semibold transition ${
            loading || !text || !domain || !label
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Menyimpan..." : "Simpan Cookie"}
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium">
            Cookie berhasil disimpan!
          </p>
        )}
      </main>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Daftar Cookie Tersimpan</h2>
        {cookieList.length === 0 ? (
          <p className="text-gray-500">Belum ada data cookie.</p>
        ) : (
          <div className="space-y-4">
            {cookieList.map((cookie: any) => (
              <div
                key={cookie.id}
                className="p-4 border rounded-md flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold">{cookie.label}</p>
                  <p className="text-sm text-gray-600">
                    Website: {cookie.streaming?.name} (
                    {cookie.streaming?.domain})
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(cookie.id)}
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
