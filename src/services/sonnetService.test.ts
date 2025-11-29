import { describe, expect, test } from 'vitest';
import { SonnetService } from './sonnetService';
import { SonnetFactory, RecallableQuestionFactory } from '../../test/factories';
import recallableSonnetWords from '../data/recallableSonnetWords/sonnet-116.json';
import { RealSonnetRepository } from '../repositories/sonnetRepository';

describe(`SonnetService`, () => {
	test(`Get some words to recall for the sonnet`, () => {
		// Given
		const theSonnetRepo = new RealSonnetRepository();
		const sonnetService = new SonnetService();

		// When
		const wordsToRecall = sonnetService.getWordsToRecall(
			theSonnetRepo.getSonnet('116')!,
			recallableSonnetWords,
			'::the_empty_value::'
		);

		// Then
		expect(wordsToRecall).toHaveLength(2);

		expect(wordsToRecall[0]).toStrictEqual(
			new RecallableQuestionFactory()
				.withSonnetId('116')
				.withBeforeText(`Let me not to the `)
				.withAfterText(` of true minds`)
				.withAnswerText(`marriage`)
				.withReplacementString(`::the_empty_value::`)
				.build()
		);

		expect(wordsToRecall[1]).toStrictEqual(
			new RecallableQuestionFactory()
				.withSonnetId('116')
				.withBeforeText(`Let me not to the marriage of `)
				.withAfterText(` minds`)
				.withAnswerText(`true`)
				.withReplacementString(`::the_empty_value::`)
				.build()
		);
	});
});
