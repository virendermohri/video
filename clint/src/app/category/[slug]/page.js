import VideoCard from '@/components/VideoCard';
import { notFound } from 'next/navigation';

const videos = [
  // Category: beginner (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    slug: `beginner-video-${i + 1}`,
    title: `Beginner Video ${i + 1}`,
    hashtags: ['#Fitness', '#Beginner', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 100000 + i * 1000,
    likes: 2000 + i * 100,
    category: 'beginner',
    description: `Beginner video number ${i + 1} description.`,
  })),

  // Category: yoga (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    slug: `yoga-video-${i + 1}`,
    title: `Yoga Video ${i + 1}`,
    hashtags: ['#Yoga', '#Energy', '#Relax'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 95000 + i * 1100,
    likes: 3000 + i * 120,
    category: 'yoga',
    description: `Yoga video number ${i + 1} description.`,
  })),

  // Category: cardio (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    slug: `cardio-video-${i + 1}`,
    title: `Cardio Video ${i + 1}`,
    hashtags: ['#Cardio', '#Fitness', '#Health'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 110000 + i * 900,
    likes: 2500 + i * 150,
    category: 'cardio',
    description: `Cardio video number ${i + 1} description.`,
  })),

  // Category: strength (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 31,
    slug: `strength-video-${i + 1}`,
    title: `Strength Training Video ${i + 1}`,
    hashtags: ['#Strength', '#Workout', '#Muscle'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 120000 + i * 800,
    likes: 2700 + i * 130,
    category: 'strength',
    description: `Strength training video number ${i + 1} description.`,
  })),

  // Category: pilates (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 41,
    slug: `pilates-video-${i + 1}`,
    title: `Pilates Video ${i + 1}`,
    hashtags: ['#Pilates', '#Core', '#Flexibility'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 90000 + i * 850,
    likes: 2200 + i * 140,
    category: 'pilates',
    description: `Pilates video number ${i + 1} description.`,
  })),

  // Category: dance (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 51,
    slug: `dance-video-${i + 1}`,
    title: `Dance Workout Video ${i + 1}`,
    hashtags: ['#Dance', '#Cardio', '#Fun'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 130000 + i * 950,
    likes: 3100 + i * 160,
    category: 'dance',
    description: `Dance workout video number ${i + 1} description.`,
  })),

  // Category: meditation (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 61,
    slug: `meditation-video-${i + 1}`,
    title: `Meditation Video ${i + 1}`,
    hashtags: ['#Meditation', '#Calm', '#Mindfulness'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 85000 + i * 800,
    likes: 2100 + i * 120,
    category: 'meditation',
    description: `Meditation video number ${i + 1} description.`,
  })),

  // Category: hiit (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 71,
    slug: `hiit-video-${i + 1}`,
    title: `HIIT Video ${i + 1}`,
    hashtags: ['#HIIT', '#Fitness', '#Quick'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 140000 + i * 1000,
    likes: 3200 + i * 180,
    category: 'hiit',
    description: `HIIT video number ${i + 1} description.`,
  })),

  // Category: stretching (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 81,
    slug: `stretching-video-${i + 1}`,
    title: `Stretching Video ${i + 1}`,
    hashtags: ['#Stretching', '#Flexibility', '#Warmup'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 75000 + i * 700,
    likes: 1900 + i * 110,
    category: 'stretching',
    description: `Stretching video number ${i + 1} description.`,
  })),

  // Category: crossfit (10 videos)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 91,
    slug: `crossfit-video-${i + 1}`,
    title: `Crossfit Video ${i + 1}`,
    hashtags: ['#Crossfit', '#Strength', '#Conditioning'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail: 'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 125000 + i * 850,
    likes: 2900 + i * 140,
    category: 'crossfit',
    description: `Crossfit video number ${i + 1} description.`,
  })),
];

// export default videos;


// Pagination constants
const VIDEOS_PER_PAGE = 8;

// Generate metadata for SEO dynamically
export async function generateMetadata({ params, searchParams }) {
  const { slug } = params;
  const categoryVideos = videos.filter(v => v.category === slug);

  if (!categoryVideos.length) {
    return {
      title: 'Category Not Found | DesiPleasure',
      description: `No videos found for category "${slug}".`,
      robots: 'noindex, nofollow',
    };
  }

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Videos | DesiPleasure`,
    description: `Watch the best videos in the ${slug} category on DesiPleasure. Free streaming, high quality, and trending videos.`,
    keywords: `${slug}, free videos, streaming, DesiPleasure, adult videos`,
    openGraph: {
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Videos | DesiPleasure`,
      description: `Watch the best videos in the ${slug} category on DesiPleasure.`,
      images: [
        {
          url: categoryVideos[0].thumbnail,
          alt: `${slug} category thumbnail`,
        },
      ],
    },
  };
}

// Main Category Page Component
export default function CategoryPage({ params, searchParams }) {
  const { slug } = params;
  const page = parseInt(searchParams.page) || 1;

  // Filter videos by category slug
  const categoryVideos = videos.filter(video => video.category === slug);

  if (categoryVideos.length === 0) {
    notFound();
  }

  // Pagination calculation
  const startIndex = (page - 1) * VIDEOS_PER_PAGE;
  const paginatedVideos = categoryVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);
  const totalPages = Math.ceil(categoryVideos.length / VIDEOS_PER_PAGE);

  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug} Videos</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedVideos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation" className="flex justify-center mt-8 space-x-4">
        {page > 1 && (
          <a
            href={`/category/${slug}?page=${page - 1}`}
            className="px-4 py-2  bg-black rounded text-white shadow hover:bg-gray-800 transition"
          >
            Previous
          </a>
        )}
        <span className="px-4 py-2  rounded">Page {page} of {totalPages}</span>
        {page < totalPages && (
          <a
            href={`/category/${slug}?page=${page + 1}`}
            className="px-4 py-2 bg-blue-500  shadow  rounded "
          >
            Next
          </a>
        )}
      </nav>
    </main>
  );
}
