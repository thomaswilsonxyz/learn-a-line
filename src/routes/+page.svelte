<script lang="ts">
	import type { PageProps } from './$types';
	import AnswerForm from './AnswerForm.svelte';
	import SonnetText from './SonnetText.svelte';

	const { data }: PageProps = $props();
	const { sonnet, questions } = data;

	let currentQuestionIndex = $state(0);
	let currentQuestion = $derived(questions[currentQuestionIndex]);
	let wasAnswerCorrect = $state(false);

	function handleAnswerSubmit(submittedAnswer: string) {
		wasAnswerCorrect = submittedAnswer === currentQuestion.answer.value;
		if (wasAnswerCorrect) {
			currentQuestionIndex += 1;
		}
	}
</script>

<h1>{sonnet.name}</h1>
<SonnetText fullText={sonnet.fullText} {currentQuestion} />

<AnswerForm {handleAnswerSubmit} />

{#if wasAnswerCorrect}Yes{:else}No{/if}
