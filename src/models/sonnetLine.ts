export class SonnetLine {
	private readonly eolCharacter = '::EOL::';
	private readonly fullTextWithEolCharacter: string;
	constructor(public readonly fullText: string) {
		this.fullTextWithEolCharacter = [fullText, this.eolCharacter].join('');
	}

	withoutTextInstance(theTextToRemove: string, theTextInstanceNumber: number, replaceWith = '***') {
		const segments = this.fullTextWithEolCharacter
			.split(theTextToRemove)
			.filter((text) => text.length > 0);

		const beforeText = segments
			.filter((_text, index) => index <= theTextInstanceNumber)
			.map((text, index) => (index === theTextInstanceNumber ? text : `${text}${theTextToRemove}`))
			.join('');

		const afterText = segments
			.filter((_text, index) => index > theTextInstanceNumber)
			.map((text, index, array) =>
				index === array.length - 1 ? text : `${text}${theTextToRemove}`
			)
			.join('')
			.replace(this.eolCharacter, '');

		const fullText = [beforeText, replaceWith, afterText].join('');

		return { fullText, beforeText, afterText };
	}
}
