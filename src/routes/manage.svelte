<script>
	import _ from 'lodash';

	import { onMount } from 'svelte';
	import api from '$lib/api';

	let qcs = [];
	onMount(async () => {
		qcs = await api.fetchBoard();
	});

	let filename = null;
	let token = '';
	let gameFiles = null;
	$: gameFile = gameFiles?.item(0);

	const submitSetToken = async (t) => {
		await api.setToken(t);
	};

	const submitGameFile = async (f) => {
		const data = JSON.parse(await f.text());
		console.log(data);
		await api.loadBoard(data);
	};

	const setQnState = async (q, r) => {
		if (r) {
			await api.questionReveal(q.id);
		} else {
			await api.questionUnreveal(q.id);
		}
		q.revealed = r;
		qcs = qcs;
	};
</script>

<div class="container mx-auto">
	<div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto space-y-0 pt-8">
		<div class="mt-5 pt-3 md:mt-0">
			<div class="shadow sm:rounded-md sm:overflow-hidden">
				<div class="px-4 py-5 bg-white space-y-4 sm:p-6">
					<form action="#" on:submit|preventDefault={submitSetToken(token)}>
						<div class="grid grid-cols-3 gap-6">
							<div class="col-span-3 sm:col-span-2">
								<label for="company-website" class="block text-sm font-medium text-gray-700">
									Set Token
								</label>
								<div class="mt-1 flex rounded-md shadow-sm">
									<span
										class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
									>
										Token
									</span>
									<input
										type="text"
										name="token"
										id="token"
										bind:value={token}
										class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
										placeholder="xuwavexuughiemoopheequaixocaikai"
									/>
								</div>
							</div>
						</div>
						<div class="py-3 text-right">
							<button
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								class:opacity-50={!token}
								disabled={!token}
							>
								Save
							</button>
						</div>
					</form>

					<form action="#" on:submit|preventDefault={submitGameFile(gameFile)}>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="block text-sm font-medium text-gray-700"> Game file </label>
						<div
							class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
						>
							<div class="space-y-1 text-center">
								<div class="flex flex-col text-sm text-gray-600">
									{#if gameFile}
										<div>
											{gameFile.name}
										</div>
									{/if}
									<label
										for="file-upload"
										class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
									>
										{#if gameFile}
											<span>Change file</span>
										{:else}
											<div>Upload file</div>
										{/if}
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											class="sr-only"
											bind:files={gameFiles}
										/>
									</label>
								</div>
							</div>
						</div>
						<div class="py-3 text-right">
							<button
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								class:opacity-50={!gameFile}
								disabled={!gameFile}
							>
								Save
							</button>
						</div>
					</form>

					<form action="#" on:submit|preventDefault={() => null}>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="block text-sm font-medium text-gray-700"> Board Reveal / Unreveal </label>
						no-autosync pls refresh manually lul
						<div class="pt-1 grid grid-cols-5 gap-2">
							{#each qcs as { qs }, i}
								{#each qs as q}
									<button
										class="flex items-center justify-center bg-lavender p-4 font-barlow-semi text-xl rounded shadow text-gray-700"
										class:opacity-40={q.revealed}
										on:click={() => setQnState(q, !q.revealed)}
									>
										{100 * i + 100}
									</button>
								{/each}
							{/each}
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
