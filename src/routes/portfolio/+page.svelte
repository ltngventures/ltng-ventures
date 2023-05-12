<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import { founders } from '$lib/data/founders';
</script>

<svelte:head>
    <title>Investments | Lightning Ventures</title>
    <meta name="description" content="A list of all the cutting edge Bitcoin companies that Lightning Ventures has invested in." />
</svelte:head>

<div class="mb-16 pt-24 pb-12 bg-slate-50/10 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8">
        <h2
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
        >
            We're proud early-stage investors in<br />companies building the future of Bitcoin.
        </h2>
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <PortfolioGrid displayAll={true} />
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
    <div class="founderCarousel flex flex-nowrap flex-row items-center overflow-x-scroll w-screen">
        <div class="founders flex flex-nowrap flex-row gap-32 items-center">
            {#each founders as founder, i}
                <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                    <img src={founder.img} alt="founder{i}" class="w-36 md:w-64 h-36 md:h-64 rounded-full shadow-lg" />
                    <div class="prose dark:prose-invert md:prose-xl text-lg w-64 md:w-96">
                        <p>&ldquo;{founder.blurb}&rdquo;</p>
                        <p class="text-base">&ndash; {founder.nameAndRole}</p>
                    </div>
                </div>
            {/each}
            {#each founders as founder, i}
                <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                    <img src={founder.img} alt="founder{i}" class="w-36 md:w-64 h-36 md:h-64 rounded-full shadow-lg" />
                    <div class="prose dark:prose-invert md:prose-xl text-lg w-64 md:w-96">
                        <p>&ldquo;{founder.blurb}&rdquo;</p>
                        <p class="text-base">&ndash; {founder.nameAndRole}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>