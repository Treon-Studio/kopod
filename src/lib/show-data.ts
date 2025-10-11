import starpodConfig from '../../starpod.config';

export type Episode = {
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
  content: string;
  duration: number;
};

export type ShowInfo = {
  title: string;
  description: string;
  image: string;
};

export async function getShowInfo(): Promise<ShowInfo> {
  return {
    title: 'Whiskey Web and Whatnot',
    description: starpodConfig.description,
    image: '/images/artwork.png'
  };
}

export async function getAllEpisodes(): Promise<Episode[]> {
  // This is a stub implementation. You'll need to provide your episode data
  // either from a CMS, database, or static data files.
  return [];
}
