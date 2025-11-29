import { describe, expect, it } from 'vitest';
import { RecallableQuestion } from './recallableQuestion';

describe(`RecallableQuestion`, () => {
	it(`should construct`, () => {
		const theRecallableQuestion = new RecallableQuestion(
			'the-sonnet-id',
			0,
			`the before text`,
			`the after text`,
			`the answer text`,
			'::replacement::'
		);

		expect(theRecallableQuestion.sonnetId).toBe('the-sonnet-id');
		expect(theRecallableQuestion.textWithReplacementValue).toBe(
			`the before text::replacement::the after text`
		);
		expect(theRecallableQuestion.beforeText).toBe(`the before text`);
		expect(theRecallableQuestion.afterText).toBe(`the after text`);
		expect(theRecallableQuestion.answer).toStrictEqual({
			unitLength: 3,
			unitType: `word`,
			value: `the answer text`
		});
	});
});
