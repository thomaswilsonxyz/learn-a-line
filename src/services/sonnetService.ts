import { RecallableQuestion } from '../models/recallableQuestion';
import type { Sonnet } from '../models/sonnet';

interface RecallableSonnetWord {
	lineIndex: number;
	text: string;
	textLineIndex: number;
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
			return new RecallableQuestion(
				lineIndex,
				`${beforeText}${theReplacementValue}${afterText}`,
				beforeText,
				afterText,
				text
			);
		});
	}
}
