export const metadata = {
  title: "Advertise with TharkiBaba – Boost Your Brand Visibility",
  description:
    "Partner with India's rising adult platform. 6B+ monthly views. Banner ads, video ads, popunders & more. Start earning with our affiliate program!",
};

export default function AdvertisePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-white">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          📢 Advertise on TharkiBaba.com
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Reach millions of Desi users daily. We serve over{" "}
          <span className="text-cyan-400 font-semibold">6 Billion+ ad impressions</span> per month.
        </p>
        <p className="mt-3 text-blue-300 font-medium">
          High visibility. Fast conversions. Unmatched exposure.
        </p>
        <a
          href="mailto:ads@tharkibaba.com"
          className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition"
        >
          🚀 Start Advertising Now
        </a>
      </section>

      {/* Ad Placements */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-300">
          📊 Ad Formats We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "1. Banner Ads",
              desc: "High-traffic placements (top, side, bottom) for constant exposure.",
              volume: "2.5 Billion",
            },
            {
              title: "2. In-Page Ads",
              desc: "Look like push notifications but show instantly. High click rates.",
              volume: "1.8 Billion",
            },
            {
              title: "3. Video Ads",
              desc: "Play before, during, or after videos. Powerful visibility.",
              volume: "450 Million",
            },
            {
              title: "4. Popunder",
              desc: "Loads in the background and grabs attention after user action.",
              volume: "250 Million",
            },
            {
              title: "5. Full-page Interstitial",
              desc: "Full-screen takeover between pages. Forces action.",
              volume: "900 Million",
            },
          ].map((ad, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] border border-blue-800 p-5 rounded-lg shadow hover:shadow-blue-600/30 transition"
            >
              <h3 className="text-xl font-bold text-blue-300">{ad.title}</h3>
              <p className="text-gray-300 mt-2">{ad.desc}</p>
              <p className="mt-3 text-sm text-cyan-400 font-medium">
                Monthly Volume: {ad.volume} Impressions
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate Program */}
      <section className="bg-blue-950/50 p-6 rounded-xl border border-blue-700 mb-20">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">💸 Join Our Affiliate Program</h2>
        <p className="text-lg text-gray-200">
          Promote TharkiBaba & earn{" "}
          <span className="text-green-400 font-semibold">up to 60% revenue share</span> or{" "}
          <span className="text-green-400 font-semibold">$30+ per sale</span>.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
          <li>Weekly payments via Crypto, PayPal or Bank</li>
          <li>Live dashboard to track clicks, sales & earnings</li>
          <li>Promo banners & content drops provided</li>
          <li>Top affiliate bonuses every month</li>
        </ul>
        <a
          href="mailto:affiliates@tharkibaba.com"
          className="mt-6 inline-block bg-cyan-500 text-black font-semibold py-2 px-6 rounded hover:bg-cyan-600 transition"
        >
          📈 Join as an Affiliate
        </a>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-white">Still have questions?</h2>
        <p className="text-gray-300 mb-4">
          Our team is ready to help you set up custom campaigns and placements.
        </p>
        <a
          href="mailto:ads@tharkibaba.com"
          className="text-blue-400 underline hover:text-blue-500"
        >
          📧 ads@tharkibaba.com
        </a>
      </section>
    </main>
  );
}
