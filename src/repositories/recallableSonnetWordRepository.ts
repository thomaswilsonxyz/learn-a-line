import { z } from 'zod/v4';

import sonnet116 from '../data/recallableSonnetWords/sonnet-116.json';
import type { IRecallableSonnetWord, RecallableSonnetWord } from '../models/recallableSonnetWord';

const schema = z.object({
	lineIndex: z.int().min(0),
	textLineIndex: z.int().min(0),
	text: z.string()
});

interface IRecallableSonnetWordsRepository {
	getRecallableSonnetWordsForSonnet(sonnetId: string): RecallableSonnetWord[];
}

export class RealRecallableSonnetWordRepository implements IRecallableSonnetWordsRepository {
	private readonly idWordsHash: Record<string, IRecallableSonnetWord[]>;

	constructor() {
		this.idWordsHash = {
			'116': sonnet116.map((d) => schema.parse(d)) as IRecallableSonnetWord[]
		};
	}

	getRecallableSonnetWordsForSonnet(sonnetId: string): RecallableSonnetWord[] {
		const proposed: IRecallableSonnetWord[] | undefined = this.idWordsHash[sonnetId];

		if (proposed === undefined) return [];

		return proposed;
	}
}
