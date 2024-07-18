<script>
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    onMount(() => {
        const { hash } = document.location;
        const scrollTo = hash && document.getElementById(hash.slice(1));
        if (scrollTo) scrollTo.scrollIntoView();
    });
</script>

<!-- {#if $page.url.pathname !== '/'}
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <BoltIcon />
    </div>
{/if} -->

<div class="relative">
    <Header />
    {#key $page.url.pathname}
        <Hero />
    {/key}

    <div class="mx-auto">
        <slot />
    </div>
    <Footer />
</div>
