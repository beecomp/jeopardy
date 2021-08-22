<script type="text/javascript">
	import _ from 'lodash';
	const categories = [
		'BEFORE AND AFTER',
		'TEMANNYA OTTO',
		'ANAGRAMS',
		'STUPID ANSWERS',
		'HOMOPHONES'
	];

	const contestants = [
		{
			name: 'Otto - Sumendap',
			score: 300
		},
		{
			name: 'Otto - Sumendap',
			score: 200
		},
		{
			name: 'Otto - Sumendap',
			score: 900
		},
		{
			name: 'Otto - Sumendap',
			score: -100
		},
		{
			name: 'Otto - Sumendap',
			score: -100
		}
	];
</script>

<svelte:head>
	<title>Jeopardy!</title>
</svelte:head>
<div class="flex flex-col h-screen">
	<div class="flex-grow grid grid-cols-5 gap-4 p-4 font-barlow-semi text-gray-700">
		{#each categories as c}
			<div class="p-4 bg-coral rounded shadow-md h-full text-2xl">
				<div class="flex flex-row h-full items-center justify-center text-center">{c}</div>
			</div>
		{/each}
		{#each _.range(5) as i}
			{#each _.range(5) as _}
				<div class="p-4 bg-lavender rounded shadow-md h-full text-6xl">
					<div class="flex flex-col h-full items-center justify-center">
						${i * 100 + 100}
					</div>
				</div>
			{/each}
		{/each}
	</div>
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
</div>
