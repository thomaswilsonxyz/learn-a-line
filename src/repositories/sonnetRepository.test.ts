import { describe, expect, it } from 'vitest';
import { RealSonnetRepository } from './sonnetRepository';

describe(`RealSonnetRepository`, () => {
	const theRepository = new RealSonnetRepository();

	it(`should contain a list of Shakespear's sonnets`, () => {
		// when
		const allSonnets = theRepository.getAllSonnets();

		// then
		expect(allSonnets).toHaveLength(1);
	});

	it(`should get a sonnet by ID`, () => {
		// When
		const theSonnet = theRepository.getSonnet('116');

		// then
		expect(theSonnet).not.toBeNull();
		expect(theSonnet!.id).toBe('116');
	});

	it(`should return null when no sonnet with an id exists`, () => {
		// When/then
		expect(theRepository.getSonnet('does-not-exist')).toBeNull();
	});
});
