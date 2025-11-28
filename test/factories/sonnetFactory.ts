import { Sonnet } from '../../src/models/sonnet';
export class SonnetFactory {
	private id: string = 'default-id';
	private name: string = 'default name';
	private fullText = `default full text`;

	withId(value: string): this {
		this.id = value;
		return this;
	}

	withName(value: string): this {
		this.name = value;
		return this;
	}

	withFullText(value: string): this {
		this.fullText = value;
		return this;
	}

	build(): Sonnet {
		return new Sonnet(this.id, this.name, this.fullText);
	}
}
