<script lang="ts">
    import TeammateCard from '$lib/components/TeammateCard.svelte';
    import { teammates } from '$lib/config/teammates';
</script>

<div class="my-16 py-12">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8">
        <h2
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
        >
            Deeply committed to Bitcoin
        </h2>
        <div class="grid grid-cols-2 gap-12">
            {#each teammates as teammate}
                <TeammateCard {teammate} />
            {/each}
        </div>
    </div>
</div>
