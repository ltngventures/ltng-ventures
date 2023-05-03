<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
</script>

<div class="flex flex-col">
    <div class="py-12 bg-slate-500 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <PortfolioGrid displayCount={10} />
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Founders Say
            </h2>
        </div>
    </div>
</div>
