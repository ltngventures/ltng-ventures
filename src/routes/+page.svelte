<script lang="ts">
    import Carousel from '$lib/components/Carousel.svelte';
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import { founders } from '$lib/data/founders';
    import { investors } from '$lib/data/investors';
    import { events } from '$lib/data/events';
    import PhotoSwipeGallery from 'svelte-photoswipe';
    import { rockamotoImages } from '$lib/data/rockamotoImages';

    const images = rockamotoImages;
</script>

<svelte:head>
    <title>Lightning Ventures</title>
    <meta name="description" content="Lighting Ventures is a Bitcoin focused venture capital firm. We invest in software, hardware, and mining & energy companies in the Bitcoin space." />
</svelte:head>

<div class="flex flex-col">
    <div class="py-12 bg-slate-50/30 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-6 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
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
                class="tracking-tight pb-1 mb-6 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Our Founders Say
            </h2>
        </div>
        <Carousel testimonials={founders} direction="Right" />
    </div>

    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-6 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Our Investors Say
            </h2>
        </div>
        <Carousel testimonials={investors} direction="Left" />
    </div>

    <div class="py-12 bg-indigo-800/10 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-6 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Events
            </h2>
            <div class="prose dark:prose-invert prose-lg max-w-4xl mb-12">
                <p>Yo… Let’s hang IRL! That’s right. We be out here. This list of stellar Bitcoin-only conferences is “Lightning Ventures approved” and will surely be a grand ole time.</p>
                <p>To schedule some face time with us, reach out in advance and let us know. Be there or be square.</p>
            </div>
            <div class="flex flex-col gap-2">
                {#each events as event}
                    <div class='grid grid-cols-3 gap-2 auto-cols-max border-b border-ltngWhite/30 pb-1 mb-2'>
                        <div><a href={event.url} class='text-btcOrange hover:text-ltngYellow font-semibold'>{event.title}</a></div>
                        <div>{event.date}</div>
                        <div>{event.location}</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8 relative">
            <!-- <img src="/images/events/rockamoto-miami2.webp" alt="rockamoto-mia-2" class='w-96 absolute -rotate-12 top-96 -left-36 opacity-50 z-0' /> -->
            <div class="z-10 relative">
                <h2
                    class="tracking-tight pb-1 mb-6 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
                >
                    Satoshi Rockamoto
                </h2>
                <div class="prose dark:prose-invert prose-lg max-w-4xl mb-6">
                    <p>Satoshi Rocks, and so do our Lightning Ventures parties. Hop on the mic or sit in with some Bitcoin All-Stars.</p>
                    <p>A revolving band of Satoshi shredders that kick out the jams. Bitcoiners like Knut Svanholm, Giacomo Zucco, Samson Mow, Mir Liponi, Gabe Higgins, Bitcoin Mechanic, Doug Scribner, Internet Sophie, and more.</p>
                    <p>Join our network and find out when the next one is happening!</p>
                </div>
                <div class="flex flex-col gap-8">
                    <PhotoSwipeGallery {images} styling="grid" gridColumns={4} />
                </div>
            </div>

        </div>
    </div>
</div>
