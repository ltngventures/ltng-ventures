<script lang="ts">
    import TwitterIcon from "$lib/elements/icons/Twitter.svelte";
    import LinkedinIcon from "$lib/elements/icons/Linkedin.svelte";
    import VidaIcon from "$lib/elements/icons/vida.svelte";
    import GithubIcon from '$lib/elements/icons/Github.svelte'
    import TelegramIcon from '$lib/elements/icons/Telegram.svelte'
    import EnvelopeIcon from '$lib/elements/icons/Envelope.svelte';
    export let social: App.SocialLink;

</script>

<a href={social.url} target="_blank" rel="noopener noreferrer" class="w-5 h-5 hover:opacity-70">
    {#if social.type === 'twitter'}
        <TwitterIcon />
    {:else if  social.type === 'nostr'}
        <img src="/images/nostr-white.webp" alt="nostr" />
    {:else if  social.type === 'linkedin'}
        <LinkedinIcon />
    {:else if  social.type === 'vida'}
        <VidaIcon />
    {:else if  social.type === 'github'}
        <GithubIcon />
    {:else if  social.type === 'telegram'}
        <TelegramIcon />
    {:else if  social.type === 'email'}
        <EnvelopeIcon klass="w-5 h-5 text-white" />
    {/if}
</a>