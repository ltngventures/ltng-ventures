<script lang="ts">
    import TwitterIcon from '$lib/elements/icons/Twitter.svelte';
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte';
    import YoutubeIcon from '$lib/elements/icons/Youtube.svelte';
</script>

<div class="my-20 max-w-6xl mx-auto px-8">
    <div class="flex flex-col md:flex-row gap-4 items-center justify-center text-sm">
        <div class="px-2">©️ 2023 Lightning Ventures</div>
        <div class="">⚡</div>
        <div class="flex flex-row gap-4 items-center justify-center">
            <a href="https://twitter.com/ltngventures" class="w-6 h-6">
                <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCFIf_EZD9MSMCJVvI5vnXAw" class="w-6 h-6">
                <YoutubeIcon />
            </a>
            <a href="https://t.me/ltngventures" class="w-6 h-6">
                <TelegramIcon />
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
