<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import BoltIcon from '$lib/elements/icons/Bolt.svelte';
    import '../app.css';
    import { page } from '$app/stores';
    import LightningHero from '$lib/components/LightningHero.svelte';
</script>

<div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <BoltIcon />
</div>
<div class="relative">
    {#if $page.url.pathname === '/'}
        <LightningHero />
    {:else}
        <div class="py-8">
            <Header />
        </div>
    {/if}

    <div class="mx-auto">
        <slot />
    </div>
    <Footer />
</div>
