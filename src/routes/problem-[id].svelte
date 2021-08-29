<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import marked from 'marked';
	import api from '$lib/api';

	let q;
	onMount(async () => {
		q = await api.questionReveal($page.params.id);
	});

	let showQ = true;
</script>

<div class="h-screen p-16">
	<div
		class="h-full ring-0 ring- problem-5d41482d7b6e flex-grow flex p-8 rounded-xl shadow-lg text-center bg-lavender text-gray-700 font-barlow-semi text-6xl text-center"
	>
		{#if !!q}
			<div class="flex flex-col h-full w-full">
				<div class="flex flex-grow items-center justify-center">
					{#if showQ}
						{@html marked(q.q)}
					{:else}
						{@html marked(q.a)}
					{/if}
				</div>
				<div class="flex flex-row justify-center space-x-8">
					<a class="btn" href={'/'}>
						<span class="text-4xl">BACK</span>
					</a>
					<button class="btn" on:click={() => (showQ = !showQ)}>
						<span class="text-4xl">ANSWER</span>
					</button>
				</div>
			</div>
		{:else}
			Loading ...
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(.problem-5d41482d7b6e img) {
		@apply mx-auto my-4;
		height: 32rem;
	}

	.btn {
		@apply font-barlow-semi py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2 rounded;
	}
</style>
