import { Caste, Castes } from '@/constants/castes';
import { Captions } from '@/constants/captions';

export type FeedItem = {
  caste: Caste;
  caption: string;
};

const totalWeight = Castes.reduce((sum, caste) => sum + caste.weight, 0);

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function rollCaste(): Caste {
  let remaining = Math.random() * totalWeight;
  for (const caste of Castes) {
    remaining -= caste.weight;
    if (remaining < 0) return caste;
  }
  return Castes[0];
}

export function oddsOf(caste: Caste) {
  return (caste.weight / totalWeight) * 100;
}

export function rarityOf(caste: Caste) {
  const odds = oddsOf(caste);
  if (odds >= 10) return 'Common';
  if (odds >= 3) return 'Uncommon';
  if (odds >= 1) return 'Rare';
  if (odds >= 0.3) return 'Epic';
  return 'Legendary';
}

function rollFeedItem(): FeedItem {
  return { caste: rollCaste(), caption: pickRandom(Captions) };
}

export function rollFeedItems(count: number) {
  return Array.from({ length: count }, rollFeedItem);
}
