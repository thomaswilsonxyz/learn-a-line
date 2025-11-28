import { SonnetLine } from './sonnetLine';

export class Sonnet {
	constructor(
		public readonly id: string,
		public readonly name: string,
		private readonly theText: string
	) {}

	get fullText() {
		return this.theText;
	}

	getLine(theLineIndex: number): SonnetLine {
		const proposedValue = this.theText.split(`\n`)[theLineIndex];

		if (proposedValue === undefined) {
			throw new Error(`Line index ${theLineIndex} requested for sonnet, but not found`);
		}

		return new SonnetLine(proposedValue);
	}
}
