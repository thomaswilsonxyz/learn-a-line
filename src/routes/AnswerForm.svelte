<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		handleAnswerSubmit: (value: string) => void;
	}

	const { handleAnswerSubmit }: Props = $props();

	let value = $state('');
	const inputId = `answer-form-name`;

	function handleSubmit(event: SubmitEvent): void {
		event.preventDefault();
		handleAnswerSubmit(value);
		value = '';
	}

	onMount(() => {
		document.getElementById(inputId)?.focus();
	});
</script>

<form class="answer-form" onsubmit={handleSubmit}>
	<label for={inputId}>Answer</label>
	<input id={inputId} name="answer" type="text" bind:value />
</form>

<style>
	.answer-form {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		max-width: 540px;
	}

	input {
		padding: 0.25rem;
		font-size: 1.5rem;
	}
</style>
