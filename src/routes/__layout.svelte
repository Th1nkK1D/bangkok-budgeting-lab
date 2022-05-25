<script>
	import 'virtual:windi.css';
</script>

<slot />

<style global>
	th {
		@apply font-bold;
	}

	td,
	th {
		@apply py-1 min-w-6;
	}
</style>
