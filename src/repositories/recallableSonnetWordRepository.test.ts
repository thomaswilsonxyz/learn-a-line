import { describe, it, expect } from 'vitest';
import { RealRecallableSonnetWordRepository } from './recallableSonnetWordRepository';

describe(`ReadRecallableSonnetWordRepository`, () => {
	const theRepository = new RealRecallableSonnetWordRepository();

	it(`should get all of the RecallableSonnetWords for a sonnet`, () => {
		// When
		const theRecallableWords = theRepository.getRecallableSonnetWordsForSonnet('116');

		// Then
		expect(theRecallableWords.length).toBeGreaterThanOrEqual(2);
	});
});
