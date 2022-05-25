<script lang="ts">
	import Gallery from 'svelte-image-gallery';
	import GanttChart from '../components/gantt-chart.svelte';
</script>

<div
	class="h-screen bg-cover"
	style="background-image: url(/images/andreas-brucker-g5Uh7nP60FA-unsplash.webp)"
>
	<div
		class="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 text-white space-y-12"
	>
		<div class="flex flex-row items-end space-x-8">
			<img src="/images/bbl-logo.webp" class="max-w-64 h-auto" alt="Bangkok Budgetting Lab" />
			<h1 class="font-display text-6xl">Bangkok<br />Budgeting<br />Lab</h1>
		</div>
		<p class="text-lg max-w-lg text-center">
			Let's take back the citizen power and design the future of Bangkok together with our living
			lab
		</p>
	</div>
</div>

<article class="prose w-full max-w-screen-lg mx-auto px-4 py-32 space-y-32">
	<section>
		<h1>Why?</h1>
		<p>
			Bangkok Budgeting Lab aims to create multi-stakeholder co-creation environment to tackle
			Bangkok's budgeting and tax system, focusing on 2 main issues:
		</p>
		<ol>
			<li>Tax usage transparency and trust issues with government</li>
			<li>Lack of public service provider mindset from the government</li>
		</ol>
		<div class="img-col">
			<img src="/images/suchat.webp" alt="Suchat" class="w-36 h-36 rounded-full" />
			<p>
				Meet <strong>Suchat</strong>, 25 years old Thai male who lives in Bangkok. He works as a
				freelance programmer for 3 years. His family is a lower-middle-class living in a suburban
				province. He understands Thailand's socio-political situation well since the military coup
				in 2014.
			</p>
		</div>
		<blockquote>
			“I'm against Military government. They abuse their power for corruption and suppress citizen
			rights”
		</blockquote>
		<p>
			Suchart, like other Thai citizens, needs to pay the tax and declare their income every year.
		</p>
		<blockquote>
			“I never know how they use my tax. I don't trust them so I'll try to deduct my tax as much as
			possible. They are more like a Mafia trying to get our money than a service provider”
		</blockquote>
	</section>

	<section>
		<h1>Stakeholders</h1>
		<p>
			There are several stakeholders who are related to Bangkok's budgeting and tax system. We
			analyze their power and supportiveness to find the allies.
		</p>
		<img src="/images/stakeholders.webp" alt="Stakeholders" class="w-full h-auto" />
		<p>According to the diagram, our living lab will work closely with 4 groups of stakeholders</p>
		<ul>
			<li>
				<strong>Government</strong> - We will work closely with opposition parties who can provide public
				policy domain knowledge and push related policy in the parliament.
			</li>
			<li>
				<strong>Industry</strong> - Technology companies can support us with technical staff and knowledge,
				while social media and modern media companies can raise our project for broader awareness.
			</li>
			<li>
				<strong>Academia</strong> - Educational institutes can use our living lab as a real-world learning
				environment for students while academics will be useful during the project development.
			</li>
			<li>
				<strong>Citizen</strong> - Everyone pays the tax. We are the expert on our own pain. The living
				lab is open to everyone who wants to get involved, to make our city become a better place.
			</li>
		</ul>
	</section>

	<section>
		<h1>Inside the Living Lab</h1>
		<div class="img-col">
			<div>
				<p>
					We will be an "enabler-driven" living lab by facilitating "strategy development through
					action" using the Quadruple Helix model. BBL will act as a "broker and connector" between
					the 4 main groups of stakeholders.
				</p>
				<p>
					BBL will act as a <i>"broker and connector"</i> between the 4 main group of stakeholders.
				</p>
			</div>
			<img src="images/quadruplehelix.webp" alt="Quadruple Helix Model" />
		</div>
		<div class="img-col">
			<img src="images/formit.webp" alt="FormIT Adaptation" />
			<div>
				<p>
					BBL project development process is adapted from the <a
						href="https://www.ltu.se/cms_fs/1.101555!/file/LivingLabsMethodologyBook_web.pdf"
						target="_blank">FormIT process by Luleå University of Technology</a
					> which was inspired by Agile methodology from the software development field and Lean methodology
					from the business field. Each iteration will include opportunities for appreciation, designing,
					and evaluation while making sure that public value, policy, and technology aspects will be
					a concern throughout the process.
				</p>
				<p>
					The iterative process allows iterative incrementation where the idea will get more and
					more concrete in each iteration. From concept, prototype, and innovation, to policy
					implementation.
				</p>
				<p>
					Each iteration will include opportunities for appreciation, designing, and evaluation
					while making sure that public value, policy, and technology aspects will be a concern
					throughout the process.
				</p>
			</div>
		</div>
		<div class="img-col">
			<div>
				<p>
					Since (budgeting) data is the core of our living lab, <a
						href="https://www.ed.ac.uk/sustainability/what-we-do/research/initiatives/the-university-as-a-living-lab/toolkit"
						target="_blank"
						>EEL toolkits designed by The University of Edinburgh and Edinburgh Living Lab</a
					> will be used during the planning phase to cover important aspects related to the data-related
					project. EEL toolkits include
				</p>
				<ol>
					<li>Identifying and formulating a project</li>
					<li>Developing a partnership</li>
					<li>Accessing and generating data</li>
					<li>Ethics, consent and confidentiality</li>
					<li>Sharing data and findings</li>
				</ol>
			</div>
			<div class="w-5xl">
				<img
					src="https://www.ed.ac.uk/sites/all/themes/uoe/assets/logo.png"
					alt="The University of Edinburgh"
				/>
				<img
					src="https://uploads-ssl.webflow.com/5b06d25c343bfc97dffcd959/5ddd58d27a923c25a7de2be8_ELL%20logo_v1-01-p-500.png"
					alt="Edinburgh Living Lab"
				/>
			</div>
		</div>
	</section>

	<section>
		<h1>Location</h1>
		<p>
			Bangkok Budgeting Lab is located in the renovated area of Wangmai district next to
			Chulalongkorn University, our partner. The location is in the center of Bangkok with
			convenient public transportation from both Sky Train and Metro
		</p>
		<iframe
			title="Location"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8955.412040596695!2d100.5209275436396!3d13.741528164654907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992c04f6d721%3A0x4fa1f4a50f036314!2sZY%20Walk!5e0!3m2!1sen!2see!4v1653503187067!5m2!1sen!2see"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			class="border-none w-full h-128 mb-2"
		/>
		<p>
			The building will be renovated as a collaboration space and event area with all the
			facilities.
		</p>
		<Gallery hover loading="lazy">
			<img
				src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632"
				alt="Co-working space"
				class="!mb-0"
			/>
			<img
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.commercialdesignindia.com%2Fpublic%2Fimages%2F2020%2F01%2F13%2FThe-Anatomy-of-Good-Coworking-Space-Design-In-Pictures-Fohlio-Product-Specification-and-Materials-Budget-Calculator-The-Assemblage.jpg&f=1&nofb=1"
				alt="Co-working space"
				class="!mb-0"
			/>
			<img src="/images/dragon-1.png" alt="Dragon Town" class="!mb-0" />
			<img src="/images/dragon-3.png" alt="Dragon Town" class="!mb-0" />
			<img src="/images/dragon-2.png" alt="Dragon Town" class="!mb-0" />
		</Gallery>
	</section>

	<section>
		<h1>Action Plans</h1>
		<GanttChart />
		<p>
			The first year will focus on preparation tasks including space, team, and stakeholders.
			Marketing and public activities will start in the 2<sup>nd</sup> year. The living lab will be
			fully operational from the 3<sup>rd</sup> year which will include the following activities in a
			year period.
		</p>
		<ol>
			<li>
				<strong>Civic Hackathon: Bangkok budgeting</strong> - 48 hrs public hackathon with expert consulting
				and award to kick start the ideation.
			</li>
			<li>
				<strong>Innovation Incubation program</strong> - Expert consulting and grants to turn hackathon
				output into a long-term impactful solution.
			</li>
			<li>
				<strong>Conference: showcase to stakeholder and public</strong> - Use the conference to create
				an awareness of innovation among important stakeholders.
			</li>
			<li>
				<strong> Media campaign from showcase</strong> - Use media partners to create awareness of innovation
				in the public.
			</li>
			<li>
				<strong>Proposal to the parliament and handover the project</strong> - Push the public policy
				related to or required by the innovation.
			</li>
			<li>
				<strong>Implementation and collaborate with public sector</strong> - Implement the innovation
				for the public uses.
			</li>
		</ol>
	</section>

	<section>
		<h1>Budget Plans</h1>
		<table>
			<tr class="!border-darkgray">
				<th>Item</th>
				<th>Cost (฿)</th>
			</tr>
			<tr><td>Space constuction</td><td>20,000,000</td></tr>
			<tr><td>Utility and maintanance</td><td>100,000 / year</td></tr>
			<tr><td>Operational (Staff salary, etc.)</td><td>2,400,000 / year</td></tr>
			<tr><td>Activities and workshops</td><td>500,000 / year</td></tr>
			<tr><td>Main hackathon event</td><td>500,000 / year</td></tr>
			<tr><td>Incubation program</td><td>2,000,000 / year</td></tr>
			<tr><td>Marketing and media campaign</td><td>500,000 / year</td></tr>
		</table>
	</section>
</article>

<footer class="bg-lightgray">
	<div class="prose w-full max-w-screen-lg mx-auto px-4 py-24">
		<h2>Disclaimer</h2>
		<p>
			Submit as a assignment for e-Governance for Responsible Innovation, Tallinn University <br /> By
			Withee Poositasai
		</p>
		<h3>References</h3>
		<ul>
			<li>
				<a
					href="https://livinglabs.iscapeproject.eu/wp-content/uploads/2018/02/U4IoT_LivingLabMethodology_Handbook.pdf"
					target="_blank">U4IoT Living Lab Methodology Handbook</a
				>
			</li>
			<li>
				<a
					href="https://www.ltu.se/cms_fs/1.101555!/file/LivingLabsMethodologyBook_web.pdf"
					target="_blank">LTU Living Labs Methodology Book</a
				>
			</li>
			<li>
				<a
					href="https://www.ed.ac.uk/sustainability/what-we-do/research/initiatives/the-university-as-a-living-lab/toolkit"
					target="_blank">ELL Toolkits</a
				>
			</li>
			<li>
				Images from <a href="https://unsplash.com" target="_blank">Unsplash</a>
			</li>
			<li>
				Temple icons created by justicon -
				<a href="https://www.flaticon.com/free-icons/temple" target="_blank" title="temple icons"
					>Flaticon</a
				>
			</li>
		</ul>
	</div>
</footer>

<style>
	.img-col {
		@apply flex flex-row space-x-6 items-center;
	}

	tr {
		@apply border-b border-lightgray;
	}
</style>
