<script lang="ts">
    import TwitterIcon from '$lib/elements/icons/Twitter.svelte';
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte';
    import YoutubeIcon from '$lib/elements/icons/Youtube.svelte';
    import AngellistIcon from '$lib/elements/icons/Angellist.svelte';
    import EmailCollector from '$lib/components/EmailCollector.svelte';
    import EnvelopeIcon from '$lib/elements/icons/Envelope.svelte';
</script>

<div class="socialIconsContainer flex flex-row gap-4 items-center justify-center">
    <a href="/contact" class="w-5 h-5">
        <EnvelopeIcon klass="w-5 h-5"/>
    </a>
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