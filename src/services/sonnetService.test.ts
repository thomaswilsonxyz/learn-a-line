import { describe, expect, test } from 'vitest';
import { SonnetService } from './sonnetService';
import { SonnetFactory } from '../../test/factories';

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

		expect(wordsToRecall[0]).toStrictEqual({
			lineNumber: 0,
			textWithReplacementValue: `This is a ::the_empty_value::`,
			beforeText: `This is a `,
			afterText: ``,
			answer: {
				value: `test`,
				unitType: `word`,
				unitLength: 1
			}
		});

		expect(wordsToRecall[1]).toStrictEqual({
			lineNumber: 1,
			beforeText: `sentence to `,
			textWithReplacementValue: `sentence to ::the_empty_value:: or not remember`,
			afterText: ` or not remember`,
			answer: {
				value: `remember`,
				unitType: `word`,
				unitLength: 1
			}
		});
	});
});
