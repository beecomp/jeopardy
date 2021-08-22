<script>
	import marked from 'marked';
	let prompt = marked(`
Siapa nama bokapnya otto?
![](https://images.unsplash.com/photo-1628072504294-df57dc522fbd)
Bebong
`);
</script>

<div class="flex flex-col h-screen p-16">
	<div
		class="ring-32 ring-green-500 problem-5d41482d7b6e flex-grow flex p-8 rounded-xl shadow-lg text-center bg-lavender text-gray-700 font-barlow-semi text-6xl text-center items-center justify-center"
	>
		{@html prompt}
	</div>
</div>

<style lang="postcss">
	:global(.problem-5d41482d7b6e img) {
		@apply mx-auto my-4;
		height: 32rem;
	}
</style>
