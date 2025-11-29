<script lang="ts">
	import type { PageProps } from './$types';
	import SonnetText from './SonnetText.svelte';

	const { data }: PageProps = $props();
	const { sonnet } = data;
</script>

<h1>{sonnet.name}</h1>
<SonnetText fullText={sonnet.fullText} />
