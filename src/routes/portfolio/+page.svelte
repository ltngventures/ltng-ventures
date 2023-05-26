<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import { founders } from '$lib/data/founders';
</script>

<svelte:head>
    <title>Investments | Lightning Ventures</title>
    <meta name="description" content="A list of all the cutting edge Bitcoin companies that Lightning Ventures has invested in." />
</svelte:head>

<div class="mb-16 pt-24 pb-12 bg-slate-50/30 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8">
        <h2
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
        >
            We're proud early-stage investors in<br />companies building the future of Bitcoin.
        </h2>
        <PortfolioGrid displayAll={true} />
    </div>
</div>

<div class="py-12">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
        >
            What Our Founders Say
        </h2>
    </div>
    <Carousel testimonials={founders} direction="Right" />
</div>