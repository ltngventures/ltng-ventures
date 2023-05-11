<script lang="ts">
    import Header from './Header.svelte';
    import TwitterIcon from '$lib/elements/icons/Twitter.svelte';
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte';
    import YoutubeIcon from '$lib/elements/icons/Youtube.svelte';
    import AngellistIcon from '$lib/elements/icons/Angellist.svelte';
</script>

<div class="bg-cover bg-center md:bg-top bg-no-repeat bg-mt-fuji240 py-8">
    <!-- <Header /> -->
    <!-- Desktop version -->
    <div class="px-4 md:px-8 max-w-6xl mx-auto w-full my-32">
        <div class="tracking-tight text-5xl text-ltngWhite font-bold hidden md:block">
            <p><span class="gradientHeader">Our mission</span> is to invest in and support the next generation of market-defining Bitcoin companies.</p>
            <!-- <p class="mb-2">
                <span class="gradientHeader">Lightning⚡Ventures</span> is a group of exclusively
            </p>
            <p class="mb-2">
                <span class="gradientHeader">Bitcoin-focused</span> investors supporting
            </p>
            <p class="mb-2"><span class="gradientHeader">Bitcoin-only</span> companies.</p> -->
        </div>
        <!-- Mobile version -->
        <div class="tracking-tight text-2xl text-ltngWhite font-bold block md:hidden my-10">
            <span class="gradientHeader">Bitcoin-focused</span> investors.<br />
            <span class="gradientHeader">Bitcoin-only</span> companies.
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 md:px-8 pb-24">
        <a href="/investors" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Invest with us
            </h2>
            <p class="text-sm md:text-lg">
                Looking to invest in & support Bitcoin companies? Learn more about our Bitcoin startup investing opportunities.
            </p>
        </a>
        <a href="/founders" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Pitch Us
            </h2>
            <p class="text-sm md:text-lg">
                Are you building a Bitcoin related product, service or company? Let’s chat, we’d love to help you!
            </p>
        </a>
        <a href="/investors" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Lightning Syndicate
            </h2>
            <p class="text-sm md:text-lg">
                The hottest deal flow in Bitcoin, straight to your inbox. Learn more about our syndicate deals and low minimums.
            </p>
        </a>
        <a href="/investors" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 2 Fund
            </h2>
            <p class="text-sm md:text-lg">Our Flagship fund. Join us and invest in pre-seed to Series A Bitcoin startups worldwide.</p>
        </a>
    </div>
    <div class="flex flex-col md:flex-row gap-4 items-center justify-center text-sm">
        <div class="flex flex-row gap-4 items-center justify-center">
            <a href="https://twitter.com/ltngventures" class="w-5 h-5">
                <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCFIf_EZD9MSMCJVvI5vnXAw" class="w-5 h-5">
                <YoutubeIcon />
            </a>
            <a href="https://t.me/ltngventures" class="w-5 h-5">
                <TelegramIcon />
            </a>
            <a
                href="https://venture.angellist.com/lightningventures/syndicate?utm_campaign=syndicate_direct_link"
                class="w-5 h-5"
            >
                <AngellistIcon />
            </a>
            <a
                href="https://www.linkedin.com/company/lightning%E2%9A%A1%EF%B8%8Fventures"
                class="w-5 h-5"
            >
                <img src="/images/linkedin.png" class="w-5 h-5" alt="LinkedIn" />
            </a>
            <a
                href="nostr:nprofile1qqsr0hscuzxdcqww0nk3sz9jg8kqkjnfua2d2akwpcy0pnenwkas56cpzemhxue69uhhyetvv9ujumn0wd68ytnzv9hxgs8tehl"
                class="w-5 h-5"
            >
                <img src="/images/nostr-white.webp" class="w-5 h-5" alt="Nostr" />
            </a>
        </div>
    </div>
</div>
