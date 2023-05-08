<script>
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import LightningHero from '$lib/components/LightningHero.svelte';
    import BoltIcon from '$lib/elements/icons/Bolt.svelte';
    import { page } from '$app/stores';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
</script>

{#if $page.url.pathname !== '/'}
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <BoltIcon />
    </div>
{/if}
<div class="relative">
    <Header />
    {#if $page.url.pathname === '/'}
        <LightningHero />
    {/if}

    <div class="mx-auto">
        <slot />
    </div>
    <Footer />
</div>
