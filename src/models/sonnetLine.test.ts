import { describe, expect, it } from 'vitest';
import { SonnetLine } from './sonnetLine';

describe(`SonnetLine`, () => {
	it(`should be able to blank out the specific instance of a word`, () => {
		// given
		const theLine = new SonnetLine(`here is the word to remember or to not remember`);

		// When/Then
		expect(theLine.withoutTextInstance('remember', 0, '***')).toStrictEqual({
			fullText: `here is the word to *** or to not remember`,
			beforeText: `here is the word to `,
			afterText: ' or to not remember'
		});

		expect(theLine.withoutTextInstance('remember', 1, '***')).toStrictEqual({
			fullText: `here is the word to remember or to not ***`,
			beforeText: `here is the word to remember or to not `,
			afterText: ''
		});
	});
});
