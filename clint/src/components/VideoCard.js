// components/VideoCard.js
import Link from 'next/link';
import Image from 'next/image';
export default function VideoCard({ video }) {
  const truncateWords = (text, numWords) => {
    const words = text.split(' ');
    if (words.length <= numWords) return text;
    return words.slice(0, numWords).join(' ') + '…';
  };
  const displayTitle = truncateWords(video.title, 4);
  return (
    <Link href={`/video/${video.slug}`}>
      <div className=" shadow  overflow-hidden cursor-pointer hover:scale-105 transition">
        <img src={video.thumbnail} alt={video.title} className="md:w-80 md:h-50 w-40 h-40  object-cover" />
        <div className="p-2 ">
          <h3 className=" text-xs">{displayTitle}..</h3>
          <div className="text-xs text-gray-500">1M Views</div>
        </div>
      </div>
    </Link>
  );
}
