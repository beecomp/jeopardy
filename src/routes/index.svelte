<script type="text/javascript">
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import api from '$lib/api';

	let qcs = [];
	onMount(async () => {
		qcs = await api.fetchBoard();
	});

	const contestants = [
		{
			name: 'Otto - Sumendap',
			score: 300,
		},
		{
			name: 'Otto - Sumendap',
			score: 200,
		},
		{
			name: 'Otto - Sumendap',
			score: 900,
		},
		{
			name: 'Otto - Sumendap',
			score: -100,
		},
		{
			name: 'Otto - Sumendap',
			score: -100,
		},
	];
</script>

<svelte:head>
	<title>Jeopardy!</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<div class="flex-grow grid grid-cols-5 gap-4 p-4 font-barlow-semi text-gray-700">
		{#each qcs as { name }}
			<div class="p-4 bg-coral rounded shadow-md h-full text-2xl">
				<div class="flex flex-row h-full items-center justify-center text-center">{name}</div>
			</div>
		{/each}
		{#each qcs as { qs }, i}
			{#each qs as { id, revealed }, j}
				<a href={`problem-${id}`}>
					<div
						class="p-4 bg-lavender rounded shadow-md h-full text-6xl"
						class:bg-lavender={(i ^ j) & 1}
						class:bg-red-400={i & 1 && ~(i ^ j) & 1}
						class:bg-coral={~i & 1 && ~(i ^ j) & 1}
						class:opacity-40={revealed}
					>
						<div class="flex flex-col h-full items-center justify-center">
							${i * 100 + 100}
						</div>
					</div>
				</a>
			{/each}
		{/each}
	</div>

	<!--
	<div class="grid grid-flow-col gap-8 p-6">
		{#each contestants as { name, score }}
			<div class="bg-lavender rounded shadow-md p-2 ring-4 ring-green-500 ring-offset-2">
				<div class="text-xl text-center font-barlow-semi">
					{name}
				</div>
				<div class="text-3xl text-center font-barlow-semi" class:text-red-600={score < 0}>
					{score}
				</div>
			</div>
		{/each}
	</div>
	-->
</div>
