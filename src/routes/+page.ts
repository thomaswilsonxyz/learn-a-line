import type { PageLoad } from './$types';
import { RealSonnetRepository } from '../repositories/sonnetRepository';
import { RealRecallableSonnetWordRepository } from '../repositories/recallableSonnetWordRepository';
import { SonnetService } from '../services/sonnetService';

export const load: PageLoad = () => {
	const sonnetRepository = new RealSonnetRepository();
	const theRecallableSonnetWordRepository = new RealRecallableSonnetWordRepository();
	const theService = new SonnetService();

	const theSonnet = sonnetRepository.getSonnet('116');
	const theRecallableWords =
		theRecallableSonnetWordRepository.getRecallableSonnetWordsForSonnet('116');

	if (!theSonnet) {
		throw new Error(`Could not find sonnet with ID '116'`);
	}

	const questions = theService.getWordsToRecall(theSonnet, theRecallableWords, '___');

	return {
		sonnet: theSonnet,
		questions
	};
};
