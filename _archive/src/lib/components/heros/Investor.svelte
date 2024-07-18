<script lang="ts">
    import Socials from "$lib/components/heros/Socials.svelte";
</script>

<div class="bg-cover bg-center md:bg-top bg-no-repeat py-8 bg-jungle2">
    <div class="px-4 md:px-8 max-w-6xl mx-auto w-full mt-24 mb-12 md:my-32">
        <div class="tracking-tight text-2xl md:text-5xl text-ltngWhite font-bold mb-6">
            <p>
                <span class="gradientHeader font-bold">Invest with us</span> in the <br />Best Free
                & Open Source companies.
            </p>
        </div>
        <div class="prose prose-2xl prose-invert font-medium">
            <p>
                Lightning Ventures is one of few pure-play Free & Open Source-focused venture
                capital firms and we're uniquely positioned to invest in & partner with the most
                promising companies in Free & Open Source. We have a large network of Free & Open
                Source LPs, making us an attractive partner for Free & Open Source founders and
                BLDRS.
            </p>
        </div>
    </div>
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-8 pb-12 md:pb-24"
    >
        <a href="#node-2-fund" class="p-4 hoverCard no-underline">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 2 Fund
            </h2>
            <p class="text-sm md:text-lg">
                Learn more about becoming an LP in our new flagship fund dedicated to investing
                pre-seed to series A in the best Free & Open Source companies and founders.
            </p>
        </a>
        <a href="#syndicate" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Lightning Syndicate
            </h2>
            <p class="text-sm md:text-lg">
                The hottest dealflow in Free & Open Source. Start investing in Free & Open Source
                companies on a deal-by-deal basis with low minimums. Great for new or experienced
                angel investors.
            </p>
        </a>
        <a href="#scouts" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Scout Program
            </h2>
            <p class="text-sm md:text-lg">
                Lightning Ventures appreciates and rewards warm introductions! Break into the Free &
                Open Source VC world and contribute to funding the ecosystem.
            </p>
        </a>
        <a href="#node-1-fund" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 1 Fund
            </h2>
            <p class="text-sm md:text-lg">
                The original. Learn more about the Free & Open Source and Lightning investments
                we've made so far.
            </p>
        </a>
    </div>

    <Socials />
</div>
