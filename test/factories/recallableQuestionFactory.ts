import { RecallableQuestion } from '../../src/models/recallableQuestion';

export class RecallableQuestionFactory {
	private sonnetId = 'default-sonnetId';
	private lineIndex = 0;
	private beforeText = `default-beforeText`;
	private afterText = `default-afterText`;
	private answerText = `default-answerText`;
	private replacementString = `***`;

	withSonnetId(value: string) {
		this.sonnetId = value;
		return this;
	}
	withLineIndex(value: number) {
		this.lineIndex = value;
		return this;
	}
	withReplacementString(value: string) {
		this.replacementString = value;
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
			this.sonnetId,
			this.lineIndex,
			this.beforeText,
			this.afterText,
			this.answerText,
			this.replacementString
		);
	}
}
