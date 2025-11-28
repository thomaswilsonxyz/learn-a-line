import type { Sonnet } from "../models/sonnet";

interface RecallableSonnetWord {
    lineIndex: number;
    text: string;
    textLineIndex: number;
}

interface RecallableQuestion {
    lineNumber: number,
    beforeText: string,
    afterText: string,
    answer: {
        value: string,
        unitType: `word`,
        unitLength: number,
    }
}

export class SonnetService {
    getWordsToRecall(
        theSonnet: Sonnet,
        theRecallableWords: RecallableSonnetWord[]
    ): RecallableQuestion[] {
        return theRecallableWords.map(({ lineIndex, text, textLineIndex }) => {
            const theLine = theSonnet.getLine(lineIndex)
            const allSplits = theLine.split(text)
            const { 
                beforeText, 
                afterText } = allSplits.reduce(
                    (currentValue, c, i) => {
                        let { afterText, beforeText } = currentValue
                        if (i === textLineIndex) beforeText += 
                        if (i < textLineIndex) beforeText += `${c} ${text}`
                        return { afterText, beforeText }
                    }, {beforeText: '', afterText: ''}
                ) 
            return {
                beforeText,
                afterText,
                lineNumber: lineIndex,
                answer: {
                    value: text,
                    unitLength: 1,
                    unitType: 'word'

                }
            }
        })
    }
}