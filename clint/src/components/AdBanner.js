// components/AdBanner.js
export default function AdBanner({ index }) {
  return (
    <div className="bg-blue-100 text-blue-800 md:w-62 md:h-50 w-40 h-40 text-center p-4 rounded shadow">
      <p className="text-sm font-semibold ">Ad #{index + 1}</p>
      <a
        href="https://your-ad-provider.com"
        target="_blank"
        className="text-xs underline"
      >
        Promote your brand here
      </a>
    </div>
  );
}
