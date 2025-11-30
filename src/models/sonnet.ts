import { SonnetLine } from './sonnetLine';

export class Sonnet {
	public readonly lines: SonnetLine[];

	constructor(
		public readonly id: string,
		public readonly name: string,
		private readonly theText: string
	) {
		this.lines = theText.split(`\n`).map((text) => new SonnetLine(text));
	}

	get fullText() {
		return this.theText;
	}

	getLine(theLineIndex: number): SonnetLine {
		const proposedValue = this.lines[theLineIndex];

		if (proposedValue === undefined) {
			throw new Error(`Line index ${theLineIndex} requested for sonnet, but not found`);
		}

		return proposedValue;
	}
}
