import { describe, expect, it } from 'vitest';
import { RecallableQuestion } from './recallableQuestion';

describe(`RecallableQuestion`, () => {
	it(`should construct`, () => {
		const theRecallableQuestion = new RecallableQuestion(
			0,
			'the text with replacement value',
			`the before text`,
			`the after text`,
			`the answer text`
		);

		expect(theRecallableQuestion.lineNumber).toBe(0);
		expect(theRecallableQuestion.textWithReplacementValue).toBe(`the text with replacement value`);
		expect(theRecallableQuestion.beforeText).toBe(`the before text`);
		expect(theRecallableQuestion.afterText).toBe(`the after text`);
		expect(theRecallableQuestion.answer).toStrictEqual({
			unitLength: 3,
			unitType: `word`,
			value: `the answer text`
		});
	});
});
