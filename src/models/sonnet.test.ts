import { describe, expect, it } from 'vitest';
import { Sonnet } from './sonnet';

describe(`Sonnet`, () => {
	it(`should have an id, name, and text`, () => {
		// given
		const theSonnet = new Sonnet(`the-id`, `the name`, `the text`);

		// then
		expect(theSonnet.id).toBe(`the-id`);
		expect(theSonnet.name).toBe(`the name`);
		expect(theSonnet.fullText).toBe(`the text`);
	});
});
