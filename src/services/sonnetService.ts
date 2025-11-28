import type { Sonnet } from '../models/sonnet';

interface RecallableSonnetWord {
	lineIndex: number;
	text: string;
	textLineIndex: number;
}

interface RecallableQuestion {
	lineNumber: number;
	textWithReplacementValue: string;
	beforeText: string;
	afterText: string;
	answer: {
		value: string;
		unitType: `word`;
		unitLength: number;
	};
}

export class SonnetService {
	getWordsToRecall(
		theSonnet: Sonnet,
		theRecallableWords: RecallableSonnetWord[],
		theReplacementValue: string
	): RecallableQuestion[] {
		return theRecallableWords.map(({ lineIndex, text, textLineIndex }) => {
			const theLine = theSonnet.getLine(lineIndex);
			const { afterText, beforeText } = theLine.withoutTextInstance(text, textLineIndex);
			return {
				beforeText,
				afterText,
				textWithReplacementValue: `${beforeText}${theReplacementValue}${afterText}`,
				lineNumber: lineIndex,
				answer: {
					value: text,
					unitLength: 1,
					unitType: 'word'
				}
			};
		});
	}
}
