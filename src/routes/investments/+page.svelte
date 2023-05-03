<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
</script>

<div class="my-16 py-12 bg-slate-500 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold darkGradientHeader inline-block"
        >
            We're proud early-stage investors in<br />companies building the future of Bitcoin.
        </h2>
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <PortfolioGrid displayAll={true} />
        </div>
    </div>
</div>
