<script lang="ts">
	import type { RecallableQuestion } from '../models/recallableQuestion';

	const { fullText, currentQuestion }: { fullText: string; currentQuestion: RecallableQuestion } =
		$props();

	function getLines(
		fullText: string,
		currentQuestion: RecallableQuestion
	): { text: string; id: string }[] {
		return fullText.split('\n').map((line, index) => {
			const id = `${index}`;
			if (currentQuestion.lineIndex === index) {
				return { text: currentQuestion.textWithReplacementValue, id };
			}
			return { text: line, id };
		});
	}

	const lines = $derived(getLines(fullText, currentQuestion));
</script>

<div class="sonnet-text">
	{#each lines as line (line.id)}
		<p class="line">{line.text}</p>
	{/each}
</div>

<style>
	.sonnet-text {
	}

	.line {
		font-size: 1.35rem;
	}
</style>
