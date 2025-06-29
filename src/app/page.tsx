// @ts-nocheck
// "use client";
// import { useState, useEffect } from "react";

// export default function HomePage() {
//   const [domain, setDomain] = useState("");
//   const [text, setText] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [label, setLabel] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [websites, setWebsites] = useState([]);
//   const [cookieList, setCookieList] = useState([]);

//   const [streamingName, setStreamingName] = useState("");
//   const [streamingDomain, setStreamingDomain] = useState("");

//   const fetchCookies = async () => {
//     const res = await fetch("/api/cookies-data");
//     const json = await res.json();
//     setCookieList(json);
//   };

//   const fetchWebsite = async () => {
//     const result = await fetch("/api/website");
//     const data = await result.json();
//     setWebsites(data);
//   };

//   const handleDelete = async (id: number) => {
//     await fetch(`/api/cookies-data?id=${id}`, { method: "DELETE" });
//     fetchCookies();
//   };

//   const handleSubmit = async () => {
//     if (!text || !domain || !label) return;

//     setLoading(true);
//     const res = await fetch("/api/cookies", {
//       method: "POST",
//       body: JSON.stringify({ raw: text, domain, label }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (res.ok) {
//       setSuccess(true);
//       setText("");
//       setLabel("");
//     }
//     setLoading(false);
//   };

//   const handleAddStreaming = async () => {
//     if (!streamingName || !streamingDomain) return;

//     const res = await fetch("/api/website", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: streamingName, domain: streamingDomain }),
//     });

//     if (res.ok) {
//       setStreamingName("");
//       setStreamingDomain("");
//       fetchWebsite(); // refresh
//     }
//   };

//   useEffect(() => {
//     fetchWebsite();
//     fetchCookies();
//   }, []);

//   return (
//     <>
//       <main className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 space-y-6">
//         <h1 className="text-3xl font-bold text-center">Input Cookie</h1>

//         {/* Form Tambah Streaming */}
//         <div className="space-y-2 border-t pt-4 mt-6">
//           <h2 className="text-xl font-semibold">Tambah Streaming Baru</h2>
//           <input
//             className="w-full border rounded p-2"
//             placeholder="Nama Streaming (contoh: Netflix)"
//             value={streamingName}
//             onChange={(e) => setStreamingName(e.target.value)}
//           />
//           <input
//             className="w-full border rounded p-2"
//             placeholder="Domain (contoh: netflix.com)"
//             value={streamingDomain}
//             onChange={(e) => setStreamingDomain(e.target.value)}
//           />
//           <button
//             onClick={handleAddStreaming}
//             disabled={!streamingName || !streamingDomain}
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
//           >
//             Tambah Streaming
//           </button>
//         </div>

//         {/* Form Input Cookie */}
//         <div className="space-y-2">
//           <label className="block font-semibold">Pilih Website</label>
//           <select
//             className="w-full border rounded p-2"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           >
//             <option value="">-- Pilih Website --</option>
//             {websites.map((site: any, i: number) => (
//               <option key={i} value={site.id}>
//                 {site.name} - {site.id}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="space-y-2">
//           <label className="block font-semibold">Nama Cookie</label>
//           <input
//             className="w-full border rounded p-2"
//             placeholder="Contoh: session_token"
//             value={label}
//             onChange={(e) => setLabel(e.target.value)}
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block font-semibold">
//             Paste Cookie (Netscape Format)
//           </label>
//           <textarea
//             rows={10}
//             className="w-full border rounded p-2 font-mono text-sm"
//             placeholder="# Netscape HTTP Cookie File..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={loading || !text || !domain || !label}
//           className={`w-full py-2 px-4 rounded text-white font-semibold transition ${
//             loading || !text || !domain || !label
//               ? "bg-blue-300 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Menyimpan..." : "Simpan Cookie"}
//         </button>

//         {success && (
//           <p className="text-green-600 text-center font-medium">
//             Cookie berhasil disimpan!
//           </p>
//         )}
//       </main>

//       {/* List Cookie */}
//       <div className="mt-10 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Daftar Cookie Tersimpan</h2>
//         {cookieList.length === 0 ? (
//           <p className="text-gray-500">Belum ada data cookie.</p>
//         ) : (
//           <div className="space-y-4">
//             {cookieList.map((cookie: any) => (
//               <div
//                 key={cookie.id}
//                 className="p-4 border rounded-md flex justify-between items-start"
//               >
//                 <div>
//                   <p className="font-semibold">{cookie.label}</p>
//                   <p className="text-sm text-gray-600">
//                     Website: {cookie.streaming?.name} (
//                     {cookie.streaming?.domain})
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(cookie.id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Hapus
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Cookie,
  Globe,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function HomePage() {
  const [domain, setDomain] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  const [label, setLabel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [websites, setWebsites] = useState([]);
  const [cookieList, setCookieList] = useState([]);

  const [streamingName, setStreamingName] = useState("");
  const [streamingDomain, setStreamingDomain] = useState("");
  const [addingStreaming, setAddingStreaming] = useState(false);

  const [activeTab, setActiveTab] = useState("cookies");

  const fetchCookies = async () => {
    try {
      const res = await fetch("/api/cookies-data");
      const json = await res.json();
      setCookieList(json);
    } catch (err) {
      setError("Gagal memuat data cookies");
    }
  };

  const fetchWebsite = async () => {
    try {
      const result = await fetch("/api/website");
      const data = await result.json();
      setWebsites(data);
    } catch (err) {
      setError("Gagal memuat data website");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/cookies-data?id=${id}`, { method: "DELETE" });
      fetchCookies();
    } catch (err) {
      setError("Gagal menghapus cookie");
    }
  };

  const handleSubmit = async () => {
    if (!text || !domain || !label) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/cookies", {
        method: "POST",
        body: JSON.stringify({ raw: text, domain, label }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
        setText("");
        setLabel("");
        fetchCookies();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Gagal menyimpan cookie");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menyimpan");
    }

    setLoading(false);
  };

  const handleAddStreaming = async () => {
    if (!streamingName || !streamingDomain) return;

    setAddingStreaming(true);
    setError("");

    try {
      const res = await fetch("/api/website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: streamingName, domain: streamingDomain }),
      });

      if (res.ok) {
        setStreamingName("");
        setStreamingDomain("");
        fetchWebsite();
      } else {
        setError("Gagal menambah streaming");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat menambah streaming");
    }

    setAddingStreaming(false);
  };

  useEffect(() => {
    fetchWebsite();
    fetchCookies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-4 shadow-lg">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Cookie Manager
          </h1>
          <p className="text-gray-600 text-lg">
            Kelola cookies website streaming dengan mudah
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-red-800 font-medium">{error}</p>
              <button
                onClick={() => setError("")}
                className="text-red-600 text-sm hover:underline mt-1"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* Success Alert */}
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-green-800 font-medium">
              Cookie berhasil disimpan!
            </p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 shadow-md">
            <button
              onClick={() => setActiveTab("cookies")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "cookies"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Kelola Cookies
            </button>
            <button
              onClick={() => setActiveTab("websites")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "websites"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Kelola Website
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "cookies" ? (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Cookie className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Tambah Cookie Baru
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Website Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pilih Website
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                    >
                      <option value="">-- Pilih Website --</option>
                      {websites.map((site, i) => (
                        <option key={i} value={site.id}>
                          {site.name} - {site.domain}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Cookie Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Cookie
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Contoh: session_token"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                    />
                  </div>

                  {/* Cookie Data */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data Cookie (Netscape Format)
                    </label>
                    <textarea
                      rows={8}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-mono text-sm resize-none"
                      placeholder="# Netscape HTTP Cookie File..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !text || !domain || !label}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      loading || !text || !domain || !label
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Menyimpan...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        <span>Simpan Cookie</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Tambah Website Baru
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Streaming
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Contoh: Netflix"
                      value={streamingName}
                      onChange={(e) => setStreamingName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Domain Website
                    </label>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Contoh: netflix.com"
                      value={streamingDomain}
                      onChange={(e) => setStreamingDomain(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={handleAddStreaming}
                    disabled={
                      addingStreaming || !streamingName || !streamingDomain
                    }
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      addingStreaming || !streamingName || !streamingDomain
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    }`}
                  >
                    {addingStreaming ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Menambahkan...</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        <span>Tambah Website</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cookie List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Cookie className="w-5 h-5 text-blue-600" />
                <span>Cookies Tersimpan</span>
              </h3>

              {cookieList.length === 0 ? (
                <div className="text-center py-8">
                  <Cookie className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Belum ada cookie tersimpan</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {cookieList.map((cookie) => (
                    <div
                      key={cookie.id}
                      className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 truncate">
                            {cookie.label}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {cookie.streaming?.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {cookie.streaming?.domain}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(cookie.id)}
                          className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Website List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>Website Tersedia</span>
              </h3>

              {websites.length === 0 ? (
                <div className="text-center py-8">
                  <Globe className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Belum ada website terdaftar</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {websites.map((site, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg border">
                      <p className="font-medium text-gray-800">{site.name}</p>
                      <p className="text-sm text-gray-600">{site.domain}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
