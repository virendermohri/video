// app/[slug]/page.jsx

import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import VideoCard from '@/components/VideoCard';
import { FaShare } from "react-icons/fa";
import Head from 'next/head';

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




export default  async function  VideoPage ({ params }) {
  const query = await params;
  const video = videos.find((v) => v.slug === query.slug);
  if (!video) return notFound();

  const related = videos.filter((v) => v.category === video.category && v.slug !== video.slug).slice(0, 4);

  return (
    <>
    
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Ad Banner */}
      <div className="mb-4">
        <iframe
          className="w-full h-60"
          src="https://your-ad-provider.com/ad"
          title="Advertisement"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>

      <h1 className="md:text-3xl font-bold mb-3">{video.title}</h1>

      <div className="flex flex-wrap gap-2 text-blue-600 mb-4">
        {video.hashtags.map((tag) => (
          <span
            key={tag}
            className="text-white bg-black px-3 py-1 rounded hover:text-blue-600 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <VideoPlayer src={video.src} />
        <aside className="hidden md:block w-1/4 bg-gray-100 p-4 text-center">
          AD SPACE
        </aside>
      </div>

      <div className="flex md:w-[70%] justify-end items-center gap-6 mt-4 text-sm text-white">
        <p>{video.views.toLocaleString()} Views</p>
        <div className="cursor-pointer flex flex-col items-center">
          <FaShare className="text-2xl" />
          <span>Share</span>
        </div>
      </div>

      <p className="mt-6 mb-4 text-white">{video.description}</p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Related Videos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </main>
    </>

  );
}
export async function generateMetadata({ params }) {
 
let videopath=await params;
console.log(videopath.slug)
  const video = videos.find((v) => v.slug === videopath.slug);
  if (video) {
    return {
      title: 'Video Not Found | DesiPleasure',
      description: 'This video could not be found on DesiPleasure.',
    };
  }

  return {
    title: `${video.title} | DesiPleasure`,
    description: video.description,
    openGraph: {
      title: `${video.title} | DesiPleasure`,
      description: video.description,
      url: `https://yourdomain.com/${video.slug}`,
      images: [
        {
          url: video.thumbnail,
          alt: video.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${video.title} | DesiPleasure`,
      description: video.description,
      images: [video.thumbnail],
    },
  };
}