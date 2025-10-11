import { signal } from '@preact/signals';
import type { Episode } from '../lib/show-data';

export const currentEpisode = signal<Episode | null>(null);
export const isPlaying = signal(false);
export const isMuted = signal(false);
