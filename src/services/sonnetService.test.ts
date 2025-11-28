import { describe, expect, test } from 'vitest'
import { SonnetService } from './sonnetService'
import { Sonnet } from '../models/sonnet'

describe(`SonnetService`, () => {
    test(`Get some words to recall for the sonnet`, () => {
        // Given
        const sonnetService = new SonnetService()

        const theSonnetText: string = `This is a test
        sentence to remember or not remember
        first word to recall
        `

        // When
        const wordsToRecall = sonnetService.getWordsToRecall(
            new Sonnet(theSonnetText),
            [
                {lineIndex: 0, text: 'test', textLineIndex: 0},
                {lineIndex: 1, text: 'remember', textLineIndex: 0},
            ]
        )

        // Then
        expect(wordsToRecall).toHaveLength(2)
        expect(wordsToRecall[0]).toStrictEqual({
            lineNumber: 0,
            beforeText: `This is a `,
            afterText: ``,
            answer: {
                value: `test`,
                unitType: `word`,
                unitLength: 1,
            }
        })
        expect(wordsToRecall[1]).toStrictEqual({
            lineNumber: 0,
            beforeText: `sentence to `,
            afterText: ` or not remember`,
            answer: {
                value: `remember`,
                unitType: `word`,
                unitLength: 1,
            }
        })
    })

})
