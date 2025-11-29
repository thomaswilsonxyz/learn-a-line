export interface IRecallableSonnetWord {
	lineIndex: number;
	text: string;
	textLineIndex: number;
}

export class RecallableSonnetWord implements IRecallableSonnetWord {
	public readonly lineIndex: number;
	public readonly text: string;
	public readonly textLineIndex: number;

	constructor(data: IRecallableSonnetWord) {
		this.lineIndex = data.lineIndex;
		this.text = data.text;
		this.textLineIndex = data.textLineIndex;
	}
}
