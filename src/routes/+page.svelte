<script lang="ts">
    import Carousel from '$lib/components/Carousel.svelte';
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import { founders } from '$lib/data/founders';
    import { investors } from '$lib/data/investors';
    import { events } from '$lib/data/events';
    import Event from '$lib/components/Event.svelte';
</script>

<svelte:head>
    <title>Lightning Ventures</title>
    <meta name="description" content="Lighting Ventures is a Bitcoin focused venture capital firm. We invest in software, hardware, and mining & energy companies in the Bitcoin space." />
</svelte:head>

<div class="flex flex-col">
    <div class="py-12 bg-slate-50/30 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Featured Investments
            </h2>
            <PortfolioGrid displayCount={16} />
            <div class="w-full flex flex-row items-center justify-center pt-10">
                <a
                    href="/portfolio"
                    class="hover font-josefin-sans-italic text-base uppercase font-semibold text-ltngYellow bg-ltngWhite/20 hover:bg-transparent"
                    >Portfolio</a
                >
            </div>
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

    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Our Investors Say
            </h2>
        </div>
        <Carousel testimonials={investors} direction="Left" />
    </div>

    <div class="py-12 bg-indigo-800/10 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Events
            </h2>
            <div class="flex flex-col gap-8">
                {#each events as event}
                    <Event {event} />
                {/each}
            </div>
        </div>
    </div>
</div>
