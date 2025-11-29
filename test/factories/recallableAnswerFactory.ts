import { RecallableQuestion } from '../../src/models/recallableQuestion';

export class RecallableQuestionFactory {
	private lineNumber = 0;
	private textWithReplacementValue = `default-textWithReplacementValue`;
	private beforeText = `default-beforeText`;
	private afterText = `default-afterText`;
	private answerText = `default-answerText`;

	withLineNumber(value: number) {
		this.lineNumber = value;
		return this;
	}
	withTextWithReplacementValue(value: string) {
		this.textWithReplacementValue = value;
		return this;
	}
	withBeforeText(value: string) {
		this.beforeText = value;
		return this;
	}
	withAfterText(value: string) {
		this.afterText = value;
		return this;
	}
	withAnswerText(value: string) {
		this.answerText = value;
		return this;
	}
	build(): RecallableQuestion {
		return new RecallableQuestion(
			this.lineNumber,
			this.textWithReplacementValue,
			this.beforeText,
			this.afterText,
			this.answerText
		);
	}
}
