import { AnsweringSession } from '../models/answeringSession';
import type { RecallableSonnetWord } from '../models/recallableSonnetWord';
import type { Sonnet } from '../models/sonnet';
import {
	RealRecallableSonnetWordRepository,
	type IRecallableSonnetWordsRepository
} from '../repositories/recallableSonnetWordRepository';
import { RealSonnetRepository, type ISonnetRepository } from '../repositories/sonnetRepository';

export class SonnetService {
	constructor(
		private readonly sonnetRepo: ISonnetRepository,
		private readonly recallableWordRepo: IRecallableSonnetWordsRepository
	) {}

	public static withRealRepositories(): SonnetService {
		return new SonnetService(new RealSonnetRepository(), new RealRecallableSonnetWordRepository());
	}

	public getEntitiesForSonnet(theSonnetId: string) {
		return {
			sonnet: this.sonnetRepo.getSonnet(theSonnetId),
			recallableWords: this.recallableWordRepo.getRecallableSonnetWordsForSonnet(theSonnetId)
		};
	}

	startAnswering(
		theSonnet: Sonnet,
		theRecallableWords: RecallableSonnetWord[],
		theReplacementValue: string
	) {
		return new AnsweringSession(theSonnet, theRecallableWords, theReplacementValue);
	}
}
