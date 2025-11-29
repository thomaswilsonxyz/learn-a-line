interface IRecallableQuestionAnswer {
	value: string;
	unitType: `word`;
	unitLength: number;
}

export interface IRecallableQuestion {
	sonnetId: string;
	lineIndex: number;
	textWithReplacementValue: string;
	beforeText: string;
	afterText: string;
	answer: IRecallableQuestionAnswer;
}

export interface RecallableQuestionDTO {
	sonnetId: string;
	lineIndex: number;
	lineNumber: number;
	beforeText: string;
	afterText: string;
	answerText: string;
}

export class RecallableQuestion implements IRecallableQuestion {
	public readonly answer: IRecallableQuestionAnswer;
	public readonly textWithReplacementValue: string;
	constructor(
		public readonly sonnetId: string,
		public readonly lineIndex: number,
		public readonly beforeText: string,
		public readonly afterText: string,
		answerText: string,
		replacementString = '***'
	) {
		this.answer = {
			value: answerText,
			unitLength: answerText.split(' ').length ?? 1,
			unitType: 'word'
		};

		this.textWithReplacementValue = [beforeText, replacementString, afterText].join('');
	}

	static fromDto(dto: RecallableQuestionDTO, replacementString?: string): RecallableQuestion {
		return new RecallableQuestion(
			dto.sonnetId,
			dto.lineIndex,
			dto.beforeText,
			dto.afterText,
			dto.answerText,
			replacementString
		);
	}
}
