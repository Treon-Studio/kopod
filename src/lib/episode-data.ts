import people from '../../db/data/people';
import peoplePerEpisode from '../../db/data/people-per-episode';
import sponsors from '../../db/data/sponsors';
import sponsorsPerEpisode from '../../db/data/sponsors-per-episode';

export type Person = {
  id: string;
  name: string;
  img?: string;
};

export type Sponsor = {
  id: string;
  name: string;
  img?: string;
  url: string;
};

export type HostOrGuest = {
  id: string;
  img?: string;
  isHost: boolean;
  name: string;
};

const DEFAULT_HOSTS = ['argyleink', 'chuckcarpenter', 'robbiethewagner'];

export function getHostsAndGuestsForEpisode(episodeSlug: string): HostOrGuest[] {
  const episodePeople = peoplePerEpisode[episodeSlug];

  if (!episodePeople) {
    return [];
  }

  return episodePeople.map((personRef) => {
    const person = people.find((p) => p.id === personRef.id);

    if (!person) {
      return null;
    }

    const isHost =
      personRef.host !== undefined
        ? Boolean(personRef.host)
        : DEFAULT_HOSTS.includes(personRef.id);

    return {
      id: person.id,
      img: person.img,
      isHost,
      name: person.name
    };
  }).filter((p): p is HostOrGuest => p !== null);
}

export function getSponsorsForEpisode(episodeSlug: string): Sponsor[] {
  const episodeSponsors = sponsorsPerEpisode[episodeSlug];

  if (!episodeSponsors) {
    return [];
  }

  return episodeSponsors
    .map((sponsorRef) => {
      const sponsor = sponsors.find((s) => s.id === sponsorRef.id);
      return sponsor || null;
    })
    .filter((s): s is Sponsor => s !== null);
}
