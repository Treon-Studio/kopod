import people from '../../db/data/people';
import peoplePerEpisode from '../../db/data/people-per-episode';
import sponsors from '../../db/data/sponsors';
import sponsorsPerEpisode from '../../db/data/sponsors-per-episode';

export type HostOrGuest = {
  id: string;
  img: string | null;
  isHost: boolean;
  name: string;
};

export type Sponsor = {
  id: string;
  img: string | null;
  name: string;
  url: string;
};

const DEFAULT_HOSTS = ['argyleink', 'chuckcarpenter', 'robbiethewagner'];

export function getHostsAndGuestsForEpisode(episodeSlug: string): HostOrGuest[] {
  const episodePeople = peoplePerEpisode[episodeSlug];

  if (!episodePeople) {
    return [];
  }

  const results: HostOrGuest[] = [];

  for (const personRef of episodePeople) {
    const person = people.find((p) => p.id === personRef.id);

    if (!person) {
      continue;
    }

    const isHost =
      personRef.host !== undefined
        ? Boolean(personRef.host)
        : DEFAULT_HOSTS.includes(personRef.id);

    results.push({
      id: person.id,
      img: ('img' in person ? person.img : null) as string | null,
      isHost,
      name: person.name
    });
  }

  return results;
}

export function getSponsorsForEpisode(episodeSlug: string): Sponsor[] {
  const episodeSponsors = sponsorsPerEpisode[episodeSlug];

  if (!episodeSponsors) {
    return [];
  }

  const results: Sponsor[] = [];

  for (const sponsorRef of episodeSponsors) {
    const sponsor = sponsors.find((s) => s.id === sponsorRef.id);

    if (!sponsor) {
      continue;
    }

    results.push({
      id: sponsor.id,
      img: ('img' in sponsor ? sponsor.img : null) as string | null,
      name: sponsor.name,
      url: sponsor.url
    });
  }

  return results;
}
