<script lang="ts">
    import TeammateCard from '$lib/components/TeammateCard.svelte';
    import { teammates } from '$lib/data/teammates';
</script>

<svelte:head>
    <title>The Team | Lightning Ventures</title>
    <meta name="description" content="The team behind Lightning Ventures." />
</svelte:head>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8">
    <h2 class="gradientHeader pageHeader">
        Deeply committed to the<br>
        Bitcoin & Lightning Ecosystem
    </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            {#each teammates as teammate}
                <TeammateCard {teammate} />
            {/each}
        </div>
    </div>
