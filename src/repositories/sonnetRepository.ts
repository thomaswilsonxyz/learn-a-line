import { Sonnet } from '../models/sonnet';
import sonnetData from '../data/sonnets.json';

interface ISonnetRepository {
	getAllSonnets: () => Sonnet[];
	getSonnet: (id: string) => Sonnet | null;
}

const allSonnets = sonnetData.map(
	(entry) => new Sonnet(entry.id, entry.title, entry.lines.join('\n'))
);

export class RealSonnetRepository implements ISonnetRepository {
	private readonly allSonnets = allSonnets;

	getAllSonnets() {
		return this.allSonnets;
	}

	getSonnet(theId: string) {
		return this.allSonnets.find((sonnet) => sonnet.id === theId) ?? null;
	}
}
