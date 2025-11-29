interface IRecallableQuestionAnswer {
	value: string;
	unitType: `word`;
	unitLength: number;
}

export interface IRecallableQuestion {
	lineNumber: number;
	textWithReplacementValue: string;
	beforeText: string;
	afterText: string;
	answer: IRecallableQuestionAnswer;
}

export class RecallableQuestion implements IRecallableQuestion {
	public readonly answer: IRecallableQuestionAnswer;
	constructor(
		public readonly lineNumber: number,
		public readonly textWithReplacementValue: string,
		public readonly beforeText: string,
		public readonly afterText: string,
		answerText: string
	) {
		this.answer = {
			value: answerText,
			unitLength: answerText.split(' ').length,
			unitType: 'word'
		};
	}
}
