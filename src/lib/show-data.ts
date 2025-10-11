import starpodConfig from '../../starpod.config';
import episodesData from '../../db/data/episodes';

export type Episode = {
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
};

export type ShowInfo = {
  title: string;
  description: string;
  image: string;
};

// Alias for backwards compatibility
export type Show = ShowInfo;

export async function getShowInfo(): Promise<ShowInfo> {
  return {
    title: 'Whiskey Web and Whatnot',
    description: starpodConfig.description,
    image: '/images/artwork.png'
  };
}

export async function getAllEpisodes(): Promise<Episode[]> {
  return episodesData;
}
