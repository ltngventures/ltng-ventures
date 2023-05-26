<script lang="ts">
    import Carousel from '$lib/components/Carousel.svelte';
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import { founders } from '$lib/data/founders';
    import { investors } from '$lib/data/investors';
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
                Upcoming Events
            </h2>
            <div class="flex flex-col md:flex-row gap-6 md:gap-12">
                <img src="/images/satoshi-rockamoto2.webp" alt="event" class="md:w-1/2" />
                <div class="prose dark:prose-invert md:prose-lg">
                    <h3>Satoshi Rockamoto</h3>
                    <p>Rock out with the Bitcoin all-star band. Live music from the Satoshi Shredders.</p>
                    <p>
                        Wednesday May 17th, 8pm Doors<br>
                        222 Española Way Miami Beach, FL
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
