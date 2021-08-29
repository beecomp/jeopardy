<script type="text/javascript">
	import { onMount } from 'svelte';

	onMount(async () => {
		console.log('asdf');
		let ws = new WebSocket('ws://167.71.196.63:8080/');
		console.log('bebong', ws);
		ws.onmessage = (e) => {
			ws.send(e.data);
		};
	});
</script>

Bebong
