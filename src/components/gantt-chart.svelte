<script lang="ts">
	const QUATER = 4;
	const years = ['1', '2', '3-5'];
	const quarters = new Array(years.length * QUATER).fill(0).map((_, i) => `Q${(i % QUATER) + 1}`);

	const actions: [number, number, string][] = [
		[1, 6, 'Space renovation'],
		[1, 2, 'Staff recruitment'],
		[2, 4, 'Meeting with stakeholders'],
		[3, 4, 'Team building and internal training'],
		[5, 12, 'Publishing online content and marketing'],
		[6, 12, 'Online discussion + speaker panel'],
		[7, 12, 'Offline meetup + speaker panel'],
		[9, 9, 'Civic Hackathon: Bangkok budgeting'],
		[9, 12, 'Incubation program (innovation)'],
		[10, 10, 'Conference: showcase to stakeholder and public'],
		[10, 10, 'Media campaign from showcase'],
		[11, 12, 'Proposal to the parliament and handover the project'],
		[11, 12, 'Implementation and collaborate with public sector']
	];
</script>

<table>
	<tr>
		<td />
		{#each years as year}
			<th colspan={QUATER}>Year {year}</th>
		{/each}
	</tr>
	<tr class="border-b border-darkgray">
		<th>Action</th>
		{#each quarters as q}
			<th>{q}</th>
		{/each}
	</tr>
	{#each actions as [from, to, label]}
		<tr class="border-b border-lightgray">
			<td>{label}</td>
			{#each quarters as _, i}
				<th>
					{#if i + 1 >= from && i < to}
						<div class="bg-blue h-2 w-full" />
					{/if}
				</th>
			{/each}
		</tr>
	{/each}
</table>
