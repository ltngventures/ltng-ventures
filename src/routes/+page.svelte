<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
    import { founders } from '$lib/config/founders';
    import { investors } from '$lib/config/investors';

</script>

<div class="flex flex-col">
    <div class="py-12 bg-slate-50/10 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Featured Investments
            </h2>
            <PortfolioGrid displayCount={15} />
            <div class="w-full flex flex-row items-center justify-center pt-10">
                <a
                    href="/investments"
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
        <div class="founderCarousel flex flex-nowrap flex-row items-center overflow-x-scroll w-screen">
            <div class="founders flex flex-nowrap flex-row gap-32 items-center">
                {#each founders as founder, i}
                    <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                        <img src={founder.img} alt="founder{i}" class="w-64 h-64 rounded-full" />
                        <div class="prose dark:prose-invert md:prose-xl text-lg w-96">
                            <p>&ldquo;{founder.blurb}&rdquo;</p>
                            <p class="text-base">&ndash; {founder.nameAndRole}</p>
                        </div>
                    </div>
                {/each}
                {#each founders as founder, i}
                    <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                        <img src={founder.img} alt="founder{i}" class="w-64 h-64 rounded-full" />
                        <div class="prose dark:prose-invert md:prose-xl text-lg w-96">
                            <p>&ldquo;{founder.blurb}&rdquo;</p>
                            <p class="text-base">&ndash; {founder.nameAndRole}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Our Investors Say
            </h2>
        </div>
        <div class="investorCarousel flex flex-nowrap flex-row items-center overflow-x-scroll w-screen">
            <div class="investors flex flex-nowrap flex-row gap-32 items-center">
                {#each investors as investor, i}
                    <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                        <img src={investor.img} alt="investor{i}" class="w-64 h-64 rounded-full" />
                        <div class="prose dark:prose-invert md:prose-xl text-lg w-96">
                            <p>&ldquo;{investor.blurb}&rdquo;</p>
                            <p class="text-base">&ndash; {investor.nameAndRole}</p>
                        </div>
                    </div>
                {/each}
                {#each investors as investor, i}
                    <div class="flex shrink-0 grow-0 flex-row gap-6 items-center w-[600px]">
                        <img src={investor.img} alt="investor{i}" class="w-64 h-64 rounded-full" />
                        <div class="prose dark:prose-invert md:prose-xl text-lg w-96">
                            <p>&ldquo;{investor.blurb}&rdquo;</p>
                            <p class="text-base">&ndash; {investor.nameAndRole}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Upcoming Events
            </h2>
            <div class="flex flex-row gap-12">
                <img src="/images/satoshi-rockamoto.webp" alt="event" class="w-1/2" />
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
