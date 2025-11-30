import type { RecallableSonnetWord } from './recallableSonnetWord';

export class SonnetLine {
	private readonly eolCharacter = '::EOL::';
	private readonly fullTextWithEolCharacter: string;

	constructor(public readonly fullText: string) {
		this.fullTextWithEolCharacter = [fullText, this.eolCharacter].join('');
	}

	private static replaceInstanceOfStringWith(
		theOriginalText: string,
		theTextToReplace: string,
		instanceIndex: number,
		replaceWith: string
	) {
		const matchAllResults = theOriginalText.matchAll(new RegExp(theTextToReplace, 'g')).toArray();

		const theRelevantMatch = matchAllResults.at(instanceIndex);

		if (!theRelevantMatch)
			throw new Error(
				`Could not find match for text '${theTextToReplace}' at index ${instanceIndex} in the following string: \n\n"${theOriginalText}"`
			);

		const { index } = theRelevantMatch;

		const beforeText = theOriginalText.substring(0, index);
		const afterText = theOriginalText.substring(index + theTextToReplace.length);

		return {
			fullText: [beforeText, replaceWith, afterText].join(''),
			beforeText,
			afterText
		};
	}

	applyRecallableSonnetWord(theRecallableSonnetWord: RecallableSonnetWord, replaceWith = '***') {
		const { text: theTextToRemove, textLineIndex: theTextInstanceNumber } = theRecallableSonnetWord;
		return SonnetLine.replaceInstanceOfStringWith(
			this.fullText,
			theTextToRemove,
			theTextInstanceNumber,
			replaceWith
		);
	}

	applyRecallableSonnetWords(
		theRecallableSonnetWords: RecallableSonnetWord[],
		replaceWith = '***'
	) {
		return theRecallableSonnetWords.reduce((currentString, theRecallableSonnetWord) => {
			const { fullText } = SonnetLine.replaceInstanceOfStringWith(
				currentString,
				theRecallableSonnetWord.text,
				theRecallableSonnetWord.textLineIndex,
				replaceWith
			);
			return fullText;
		}, this.fullText);
	}
}
