<script lang="ts">
	const { fullText }: { fullText: string } = $props();

	const lines = $derived(
		fullText.split('\n').map((line, index) => ({ id: `${index}`, text: line }))
	);
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
