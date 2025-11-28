import { describe, expect, it } from 'vitest';
import { RealSonnetRepository } from './sonnetRepository';

describe(`RealSonnetRepository`, () => {
	it(`should contain a list of Shakespear's sonnets`, () => {
		// given
		const theRepository = new RealSonnetRepository();

		// when
		const allSonnets = theRepository.getAllSonnets();

		// then
		expect(allSonnets).toHaveLength(1);
	});
});
