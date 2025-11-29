import type { ServerLoadEvent } from '@sveltejs/kit';
import { RealSonnetRepository } from '../repositories/sonnetRepository';
export const load = () => {
	const sonnetRepository = new RealSonnetRepository();

	const theSonnet = sonnetRepository.getSonnet('116');

	if (!theSonnet) {
		throw new Error(`Could not find sonnet with ID '116'`);
	}

	return {
		sonnet: theSonnet
	};
};
