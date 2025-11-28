export class SonnetLine {
	constructor(public readonly fullText: string) {}

	withoutTextInstance(theTextToRemove: string, theTextInstanceNumber: number, replaceWith = '***') {
		const segments = this.fullText.split(theTextToRemove).filter((text) => text.length > 0);

		const beforeText = segments
			.filter((_text, index) => index <= theTextInstanceNumber)
			.map((text, index) => (index === theTextInstanceNumber ? text : `${text}${theTextToRemove}`))
			.join('');

		const afterText = segments
			.filter((_text, index) => index > theTextInstanceNumber)
			.map((text) => `${text}${theTextToRemove}`)
			.join('');

		const fullText = [beforeText, replaceWith, afterText].join('');

		return { fullText, beforeText, afterText };
	}
}
