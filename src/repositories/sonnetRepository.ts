import { Sonnet } from '../models/sonnet';

interface ISonnetRepository {
	getAllSonnets: () => Sonnet[];
}

export class RealSonnetRepository implements ISonnetRepository {
	getAllSonnets() {
		return [sonnet116];
	}
}

const sonnet116 = new Sonnet(
	`116`,
	`Sonnet #116`,
	`Let me not to the marriage of true minds
Admin impediments.  Love is not Love
Which alters when it alteration finds,
Or bends with the remove to remove:
O, no! it is an ever-fixed mark,
That looks on tempests and is never shaken;
It is the star to every wandering bark,
Whose worth's unknown, although his height be taken.
Loves's not Time's fool, though rosy lips and cheeks
Within his bending sickle's compass come;
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.
`
);
