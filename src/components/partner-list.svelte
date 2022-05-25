<script lang="ts">
	export let partners: [string, string, string][];
</script>

<div class="flex flex-row w-full justify-center">
	{#each partners as [alt, href, src]}
		<a {href} target="_blank" class="flex flex-col items-center m-4 space-y-2">
			<img {src} {alt} class="h-12 w-auto !m-0" />
			<span class="text-sm">{alt}</span>
		</a>
	{/each}
</div>
