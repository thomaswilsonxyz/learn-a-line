import { RecallableQuestion } from '../models/recallableQuestion';
import type { RecallableSonnetWord } from '../models/recallableSonnetWord';
import type { Sonnet } from '../models/sonnet';

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
				theSonnet.id,
				lineIndex,
				beforeText,
				afterText,
				text,
				theReplacementValue
			);
		});
	}
}
