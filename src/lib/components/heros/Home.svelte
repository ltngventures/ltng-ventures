<script lang="ts">
    import Socials from "$lib/components/heros/Socials.svelte";
</script>

<div class="bg-cover bg-center md:bg-top bg-no-repeat py-8 bg-mt-fuji240mobile md:bg-mt-fuji">
    <div class="px-4 md:px-8 max-w-6xl mx-auto w-full mt-24 mb-12 md:my-32">
        <div class="tracking-tight text-2xl md:text-5xl text-ltngWhite font-bold">
            <p>
                <span class="gradientHeader">Our mission</span> is to invest in and support the next
                generation of market-defining Free & Open Source companies.
            </p>
        </div>
    </div>
    <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-8 pb-12 md:pb-24"
    >
        <a href="/investors" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Invest with us
            </h2>
            <p class="text-sm md:text-lg">
                Want to invest in & support Free & Open Source companies? Learn more about our
                investing opportunities.
            </p>
        </a>
        <a href="/founders" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Pitch Us
            </h2>
            <p class="text-sm md:text-lg">
                Are you building for Free & Open Source? Let's chat, we'd love to help you take your
                company to the next level.
            </p>
        </a>
        <a href="/investors#syndicate" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Lightning Syndicate
            </h2>
            <p class="text-sm md:text-lg">
                The hottest dealflow in Free & Open Source. Start investing in Free & Open Source
                companies with low minimums.
            </p>
        </a>
        <a href="/investors#node-2-fund" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 2 Fund
            </h2>
            <p class="text-sm md:text-lg">
                Our Flagship fund. Join us and invest in pre-seed to Series A Free & Open Source
                startups worldwide.
            </p>
        </a>
    </div>

    <Socials />
</div>
