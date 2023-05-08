<script lang="ts">
    import TwitterIcon from '$lib/elements/icons/Twitter.svelte';
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte';
    import YoutubeIcon from '$lib/elements/icons/Youtube.svelte';
    import AngellistIcon from '$lib/elements/icons/Angellist.svelte';
</script>

<div class="mt-20 pb-20 max-w-6xl mx-auto px-8">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-center text-sm">
        <div class="px-2">©️ 2023 Lightning Ventures</div>
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
    <div class="flex flex-row divide-x items-center justify-center mt-6 text-sm">
        <span class="px-2">New York</span>
        <span class="px-2">Miami</span>
        <span class="px-2">Phoenix</span>
        <span class="px-2">Santa Fe</span>
    </div>
</div>
