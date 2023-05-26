<script lang="ts">
    import Socials from "$lib/components/heros/Socials.svelte";
</script>

<div class="bg-cover bg-center md:bg-top bg-no-repeat py-8 bg-mt-fuji240mobile md:bg-beach1">
    <div class="px-4 md:px-8 max-w-6xl mx-auto w-full mt-24 mb-12 md:my-32">
        <div class="tracking-tight text-2xl md:text-5xl text-ltngWhite font-bold mb-6">
            <p><span class="gradientHeader font-bold">We're proud early-stage investors</span><br> in companies building the future of Bitcoin.</p>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-8 pb-12 md:pb-24">
        <a href="/investors" class="p-4 hoverCard no-underline">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Investor or aspiring investor?
            </h2>
            <p class="text-sm md:text-lg">
                Learn more about how you can invest alongside Lightning Ventures. Start with as little as $1000 and zero investing experience.
            </p>
        </a>
        <a href="/founders" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Founder or aspiring founder?
            </h2>
            <p class="text-sm md:text-lg">
                Are you a founder or have an idea for the next big in thing in Bitcoin? We'd love to know more, reach out and tell us about it!
            </p>
        </a>
    </div>

    <Socials />
</div>

