import { describe, expect, test } from 'vitest';
import { SonnetService } from './sonnetService';
import { SonnetFactory, RecallableQuestionFactory } from '../../test/factories';
import recallableSonnetWords from '../data/recallableSonnetWords/sonnet-116.json';
import { RealSonnetRepository } from '../repositories/sonnetRepository';
import { RecallableSonnetWord } from '../models/recallableSonnetWord';

describe(`SonnetService`, () => {
	const sonnetService = SonnetService.withRealRepositories();

	test(`getEntities`, () => {
		// Given
		const { recallableWords, sonnet } = sonnetService.getEntitiesForSonnet('116');

		// Then
		expect(sonnet?.name).toBe('Sonnet 116: Let me not to the marriage of true minds');
		expect(recallableWords.find((w) => w.text === 'marriage')).toBeDefined();
		expect(recallableWords.length).toBeGreaterThanOrEqual(2);
	});
});
