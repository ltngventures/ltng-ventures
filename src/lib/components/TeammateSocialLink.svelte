<script lang="ts">
    import TwitterIcon from "$lib/elements/icons/Twitter.svelte";

    export let social: App.SocialLink;

</script>

<a href={social.url} target="_blank" class="w-5 h-5 hover:opacity-70">
    {#if social.type === 'twitter'}
        <TwitterIcon />
    {:else if  social.type === 'nostr'}
        <img src="/images/nostr-white.webp" alt="nostr" />
    {/if}
</a>