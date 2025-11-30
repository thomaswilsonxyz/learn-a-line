import { describe, expect, it } from 'vitest';
import { SonnetLine } from './sonnetLine';
import { RecallableSonnetWord } from './recallableSonnetWord';

describe(`SonnetLine`, () => {
	it(`should be able to blank out the specific instance of a word`, () => {
		// given
		const theLine = new SonnetLine(`here is the word to remember or to not remember`);

		// When/Then
		expect(
			theLine.applyRecallableSonnetWord(
				new RecallableSonnetWord({
					lineIndex: 0,
					text: 'remember',
					textLineIndex: 0
				}),
				'***'
			)
		).toStrictEqual({
			fullText: `here is the word to *** or to not remember`,
			beforeText: `here is the word to `,
			afterText: ' or to not remember'
		});

		expect(
			theLine.applyRecallableSonnetWord(
				new RecallableSonnetWord({
					lineIndex: 0,
					text: 'remember',
					textLineIndex: 1
				}),
				'***'
			)
		).toStrictEqual({
			fullText: `here is the word to remember or to not ***`,
			beforeText: `here is the word to remember or to not `,
			afterText: ''
		});
	});
});
