<script lang="ts">
    import Header from './Header.svelte';
    import TwitterIcon from '$lib/elements/icons/Twitter.svelte';
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte';
    import YoutubeIcon from '$lib/elements/icons/Youtube.svelte';
</script>

<div class="bg-cover bg-center md:bg-top bg-no-repeat bg-lightning1-chill2 py-8">
    <Header />
    <!-- Desktop version -->
    <div class="px-4 md:px-8 max-w-6xl mx-auto w-full my-32">
        <div class="tracking-tight text-5xl text-ltngWhite font-bold hidden md:block">
            <p class="mb-2">
                <span class="gradientHeader">Lightning Ventures</span> is a group of exclusively
            </p>
            <p class="mb-2">
                <span class="gradientHeader">Bitcoin-focused</span> investors supporting
            </p>
            <p class="mb-2"><span class="gradientHeader">Bitcoin-only</span> companies.</p>
        </div>
        <!-- Mobile version -->
        <div class="tracking-tight text-2xl text-ltngWhite font-bold block md:hidden my-10">
            <span class="gradientHeader">Bitcoin-focused</span> investors.<br />
            <span class="gradientHeader">Bitcoin-only</span> companies.
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-8 pb-32">
        <a href="/investors" class="hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Investors
            </h2>
            <p class="text-sm md:text-lg">
                Interested in investing in and supporting Bitcoin companies? Learn more about how to
                invest with us.
            </p>
        </a>
        <a href="/founders" class="hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Founders
            </h2>
            <p class="text-sm md:text-lg">
                Are you building for a future based on the Bitcoin Standard? We want to talk.
            </p>
        </a>
        <!-- <a href="/investments" class="hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Our Investments
            </h2>
            <p class="text-sm md:text-lg">
                We're proud to support companies building the future of Bitcoin.
            </p>
        </a>
        <a href="/team" class="hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                The Team
            </h2>
            <p class="text-sm md:text-lg">Get to know the team</p>
        </a> -->
    </div>
    <!-- <div class="flex flex-row gap-8 items-center justify-center text-ltngWhite">
        <a href="https://twitter.com/ltngventures" class="w-8 h-8 hover:text-btcOrange">
            <TwitterIcon />
        </a>
        <a
            href="https://www.youtube.com/channel/UCFIf_EZD9MSMCJVvI5vnXAw"
            class="w-8 h-8 hover:text-btcOrange"
        >
            <YoutubeIcon />
        </a>
        <a href="https://t.me/ltngventures" class="w-8 h-8 hover:text-btcOrange">
            <TelegramIcon />
        </a>
    </div> -->
</div>
