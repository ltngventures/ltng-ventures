<script lang="ts">
    import TeammateCard from '$lib/components/TeammateCard.svelte';
    import { mike, teammates } from '$lib/data/teammates';
</script>

<svelte:head>
    <title>The Team | Lightning Ventures</title>
    <meta name="description" content="The team behind Lightning Ventures." />
</svelte:head>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="md:col-span-2">
                <TeammateCard teammate={mike} double={true} />
            </div>
            {#each teammates as teammate}
                <TeammateCard {teammate} />
            {/each}
        </div>
    </div>
