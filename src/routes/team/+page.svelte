<script lang="ts">
    import TeammateCard from '$lib/components/TeammateCard.svelte';
    import { teammates } from '$lib/config/teammates';
</script>

<div class="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-12 my-16">
    {#each teammates as teammate}
        <TeammateCard {teammate} />
    {/each}
</div>
