import { SonnetLine } from './sonnetLine';

export class Sonnet {
	constructor(private readonly theText: string) {}

	getLine(theLineIndex: number): SonnetLine {
		const proposedValue = this.theText.split(`\n`)[theLineIndex];

		if (proposedValue === undefined) {
			throw new Error(`Line index ${theLineIndex} requested for sonnet, but not found`);
		}

		return new SonnetLine(proposedValue);
	}
}
