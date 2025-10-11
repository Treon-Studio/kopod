export interface EpisodeData {
  id: string;
  title: string;
  episodeNumber: string;
  episodeSlug: string;
  description: string;
  published: string;
  audio?: {
    src: string;
    type: string;
  };
  episodeImage?: string;
  episodeThumbnail?: string;
  content: string;
  duration: number;
}

const episodes: EpisodeData[] = [
  {
    id: '209',
    title: 'Is Cracker Barrel a JS Framework',
    episodeNumber: '209',
    episodeSlug: 'is-cracker-barrel-a-js-framework',
    description: 'A whiskey fueled discussion about web development, frameworks, and everything in between.',
    published: '2024-10-01T00:00:00Z',
    audio: {
      src: 'https://example.com/episode-209.mp3',
      type: 'audio/mpeg'
    },
    content: '<p>A whiskey fueled discussion about web development, frameworks, and everything in between.</p>',
    duration: 3600,
    episodeImage: '/images/artwork.png',
    episodeThumbnail: '/images/artwork.png'
  },
  {
    id: '208',
    title: 'Dial Up is Dead Long Live Adam Argyle',
    episodeNumber: '208',
    episodeSlug: 'dial-up-is-dead-long-live-adam-argyle',
    description: 'Discussing the evolution of web technologies with Adam Argyle.',
    published: '2024-09-24T00:00:00Z',
    audio: {
      src: 'https://example.com/episode-208.mp3',
      type: 'audio/mpeg'
    },
    content: '<p>Discussing the evolution of web technologies with Adam Argyle.</p>',
    duration: 3400,
    episodeImage: '/images/artwork.png',
    episodeThumbnail: '/images/artwork.png'
  },
  {
    id: '207',
    title: 'Will Frameworks Survive Web Development in an AI Driven World w/ Typecraft and Robert Jackson',
    episodeNumber: '207',
    episodeSlug: 'will-frameworks-survive-web-development-in-an-ai-driven-world-w-typecraft-and-robert-jackson',
    description: 'Exploring the future of web frameworks in the age of AI.',
    published: '2024-09-17T00:00:00Z',
    audio: {
      src: 'https://example.com/episode-207.mp3',
      type: 'audio/mpeg'
    },
    content: '<p>Exploring the future of web frameworks in the age of AI.</p>',
    duration: 3800,
    episodeImage: '/images/artwork.png',
    episodeThumbnail: '/images/artwork.png'
  },
  {
    id: '206',
    title: 'Live from Big Sky Dev Con Code Debates Content Insights and Whats Next for Web Development',
    episodeNumber: '206',
    episodeSlug: 'live-from-big-sky-dev-con-code-debates-content-insights-and-whats-next-for-web-development',
    description: 'Live recording from Big Sky Dev Con covering the latest in web development.',
    published: '2024-09-10T00:00:00Z',
    audio: {
      src: 'https://example.com/episode-206.mp3',
      type: 'audio/mpeg'
    },
    content: '<p>Live recording from Big Sky Dev Con covering the latest in web development.</p>',
    duration: 4200,
    episodeImage: '/images/artwork.png',
    episodeThumbnail: '/images/artwork.png'
  },
  {
    id: '205',
    title: 'Error 500 Our Lives',
    episodeNumber: '205',
    episodeSlug: 'error-500-our-lives',
    description: 'When everything breaks: stories from production.',
    published: '2024-09-03T00:00:00Z',
    audio: {
      src: 'https://example.com/episode-205.mp3',
      type: 'audio/mpeg'
    },
    content: '<p>When everything breaks: stories from production.</p>',
    duration: 3200,
    episodeImage: '/images/artwork.png',
    episodeThumbnail: '/images/artwork.png'
  }
];

export default episodes;
