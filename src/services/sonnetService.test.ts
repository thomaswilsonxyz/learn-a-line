import { describe, expect, test } from 'vitest';
import { SonnetService } from './sonnetService';
import { SonnetFactory } from '../../test/factories';
import { RecallableQuestion } from '../models/recallableQuestion';

describe(`SonnetService`, () => {
	test(`Get some words to recall for the sonnet`, () => {
		// Given
		const sonnetService = new SonnetService();

		const theSonnetText: string = `This is a test
sentence to remember or not remember
first word to recall
`;

		// When
		const wordsToRecall = sonnetService.getWordsToRecall(
			new SonnetFactory().withFullText(theSonnetText).build(),
			[
				{ lineIndex: 0, text: 'test', textLineIndex: 0 },
				{ lineIndex: 1, text: 'remember', textLineIndex: 0 }
			],
			'::the_empty_value::'
		);

		// Then
		expect(wordsToRecall).toHaveLength(2);

		expect(wordsToRecall[0]).toStrictEqual(
			new RecallableQuestion(0, `This is a ::the_empty_value::`, `This is a `, ``, `test`)
		);
		expect(wordsToRecall[1]).toStrictEqual(
			new RecallableQuestion(
				1,
				`sentence to ::the_empty_value:: or not remember`,
				`sentence to `,
				` or not remember`,
				`remember`
			)
		);
	});
});
