import AdBanner from '@/components/AdBanner';
import VideoCard from '@/components/VideoCard';

// Mock 100 video data
const videos = [
  {
    id: 1,
    slug: 'beginner-full-body-workout',
    title: 'Beginner Full Body Workout',
    hashtags: ['#Fitness', '#Beginner', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 125000,
    likes: 4500,
    category: 'beginner',
    description: 'Great for beginners looking to get started!',
  },
  {
    id: 2,
    slug: 'morning-yoga-energy',
    title: 'Morning Yoga for Energy',
    hashtags: ['#Yoga', '#Morning', '#Energy'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 98000,
    likes: 5600,
    category: 'yoga',
    description: 'Start your day right with calming morning yoga.',
  },
  {
    id: 3,
    slug: 'intense-cardio-blast',
    title: 'Intense Cardio Blast',
    hashtags: ['#Cardio', '#Intense', '#FatBurn'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 110000,
    likes: 5000,
    category: 'cardio',
    description: 'Burn calories fast with this intense cardio routine.',
  },
  {
    id: 4,
    slug: 'relaxing-evening-yoga',
    title: 'Relaxing Evening Yoga',
    hashtags: ['#Yoga', '#Relax', '#Evening'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 75000,
    likes: 4300,
    category: 'yoga',
    description: 'Calm your mind with this evening yoga flow.',
  },
  {
    id: 5,
    slug: 'strength-training-basics',
    title: 'Strength Training Basics',
    hashtags: ['#Strength', '#Training', '#Basics'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 105000,
    likes: 4700,
    category: 'strength',
    description: 'Learn the basics of strength training.',
  },
  {
    id: 6,
    slug: 'core-workout-challenge',
    title: 'Core Workout Challenge',
    hashtags: ['#Core', '#Challenge', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 90000,
    likes: 4200,
    category: 'core',
    description: 'Tighten your abs with this core challenge.',
  },
  {
    id: 7,
    slug: 'flexibility-stretch-routine',
    title: 'Flexibility Stretch Routine',
    hashtags: ['#Flexibility', '#Stretch', '#Routine'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 80000,
    likes: 3900,
    category: 'stretching',
    description: 'Improve flexibility with this daily stretch.',
  },
  {
    id: 8,
    slug: 'hiit-fat-burn',
    title: 'HIIT Fat Burn',
    hashtags: ['#HIIT', '#FatBurn', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 130000,
    likes: 6000,
    category: 'hiit',
    description: 'High-intensity interval training for fat loss.',
  },
  {
    id: 9,
    slug: 'pilates-core-strength',
    title: 'Pilates Core Strength',
    hashtags: ['#Pilates', '#Core', '#Strength'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 72000,
    likes: 3500,
    category: 'pilates',
    description: 'Build core strength with Pilates exercises.',
  },
  {
    id: 10,
    slug: 'advanced-strength-training',
    title: 'Advanced Strength Training',
    hashtags: ['#Strength', '#Advanced', '#Training'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 115000,
    likes: 5200,
    category: 'strength',
    description: 'Take your strength training to the next level.',
  },
  {
    id: 11,
    slug: 'morning-meditation-session',
    title: 'Morning Meditation Session',
    hashtags: ['#Meditation', '#Morning', '#Mindfulness'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 67000,
    likes: 3000,
    category: 'meditation',
    description: 'Start your day calm and focused.',
  },
  {
    id: 12,
    slug: 'evening-relaxation-yoga',
    title: 'Evening Relaxation Yoga',
    hashtags: ['#Yoga', '#Relaxation', '#Evening'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 80000,
    likes: 4000,
    category: 'yoga',
    description: 'Wind down with this evening yoga routine.',
  },
  {
    id: 13,
    slug: 'quick-fat-burn-workout',
    title: 'Quick Fat Burn Workout',
    hashtags: ['#FatBurn', '#Quick', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 95000,
    likes: 4700,
    category: 'cardio',
    description: 'Fast and effective fat burn workout.',
  },
  {
    id: 14,
    slug: 'stretching-for-beginners',
    title: 'Stretching for Beginners',
    hashtags: ['#Stretching', '#Beginners', '#Flexibility'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 70000,
    likes: 3200,
    category: 'stretching',
    description: 'Easy stretching routine for beginners.',
  },
  {
    id: 15,
    slug: 'power-yoga-session',
    title: 'Power Yoga Session',
    hashtags: ['#Yoga', '#Power', '#Fitness'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 115000,
    likes: 5400,
    category: 'yoga',
    description: 'Build strength and stamina with power yoga.',
  },
  {
    id: 16,
    slug: 'core-strength-yoga',
    title: 'Core Strength Yoga',
    hashtags: ['#Yoga', '#Core', '#Strength'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 85000,
    likes: 4100,
    category: 'yoga',
    description: 'Strengthen your core with yoga poses.',
  },
  {
    id: 17,
    slug: 'full-body-hiit',
    title: 'Full Body HIIT',
    hashtags: ['#HIIT', '#FullBody', '#Workout'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 140000,
    likes: 6500,
    category: 'hiit',
    description: 'High intensity full body workout.',
  },
  {
    id: 18,
    slug: 'beginner-pilates',
    title: 'Beginner Pilates',
    hashtags: ['#Pilates', '#Beginner', '#Fitness'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 68000,
    likes: 3300,
    category: 'pilates',
    description: 'Start Pilates with this beginner workout.',
  },
  {
    id: 19,
    slug: 'advanced-cardio-circuit',
    title: 'Advanced Cardio Circuit',
    hashtags: ['#Cardio', '#Advanced', '#Circuit'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 120000,
    likes: 5800,
    category: 'cardio',
    description: 'Push yourself with this advanced cardio circuit.',
  },
  {
    id: 20,
    slug: 'meditation-for-sleep',
    title: 'Meditation for Sleep',
    hashtags: ['#Meditation', '#Sleep', '#Relax'],
    src: 'https://cdn2.kamababa.desi/2025/05/A-dirty-couple-earns-money-through-live-video-call-sex.mp4',
    thumbnail:
      'https://tse3.mm.bing.net/th?id=OIP.OpswJwVFceXjSTwTY34dBAHaFj&pid=Api&P=0&h=180',
    views: 67000,
    likes: 3100,
    category: 'meditation',
    description: 'Relax and improve sleep with meditation.',
  },
];

function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 2) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (currentPage >= totalPages - 1) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage, '...', totalPages);
    }
  }

  return pages;
}

export default async function HomePage({ searchParams }) {
  const query = await searchParams;
  const sortedVideos = [...videos].sort((a, b) => b.views - a.views);
  const currentPage = parseInt(query?.page || '1', 10);

  // Pagination Logic
  let startIndex = 0;
  let endIndex = 0;
  if (currentPage === 1) {
    startIndex = 0;
    endIndex = 12;
  } else {
    startIndex = 12 + (currentPage - 2) * 10;
    endIndex = startIndex + 10;
  }

  const paginatedVideos = sortedVideos.slice(startIndex, endIndex);
  const totalVideos = sortedVideos.length;
  const totalPages = totalVideos <= 12 ? 1 : 1 + Math.ceil((totalVideos - 12) / 10);
  const pagination = getPaginationPages(currentPage, totalPages);

  // Merge ads inside videos (as grid items)
  const mixedItems = [];
  paginatedVideos.forEach((video, index) => {
    mixedItems.push({ type: 'video', data: video });
    if ((index + 1) %5 === 0) {
      mixedItems.push({ type: 'ad', data: { id: `ad-${index}` } });
    }
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 text-white">
      {/* Ad Banner */}
      <iframe
        className="w-full h-24 md:h-28 mb-6"
        src="https://your-ad-provider.com/ad"
        title="Ad Banner"
      ></iframe>

      <h1 className="text-2xl md:text-3xl font-bold mb-4">Trending Free Porn Videos</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {mixedItems.map((item, idx) =>
          item.type === 'video' ? (
            <VideoCard key={item.data.id} video={item.data} />
          ) : (
            <AdBanner key={item.data.id} />
          )
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm">
        {currentPage > 1 && (
          <a
            href={`/?page=${currentPage - 1}`}
            className="px-3 py-2 bg-black text-white rounded"
          >
            Prev
          </a>
        )}
        {pagination.map((p, idx) =>
          p === '...' ? (
            <span key={idx+Math.floor(Math.random*9999)} className="px-3 py-2 text-gray-400">...</span>
          ) : (
            <a
              key={p}
              href={`/?page=${p}`}
              className={`px-3 py-2 rounded ${p === currentPage
                ? 'bg-blue-700 text-white font-bold'
                : 'text-white bg-black hover:bg-blue-600'
              }`}
            >
              {p}
            </a>
          )
        )}
        {currentPage < totalPages && (
          <a
            href={`/?page=${currentPage + 1}`}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Next
          </a>
        )}
      </div>
    </div>
  );
}
