<script lang="ts">
    import HomeHero from '$lib/components/heros/Home.svelte'
    import FounderHero from '$lib/components/heros/Founder.svelte';
    import InvestorHero from '$lib/components/heros/Investor.svelte';
    import PortfolioHero from '$lib/components/heros/Portfolio.svelte';
    import AboutHero from '$lib/components/heros/About.svelte';
    import TeamHero from './heros/Team.svelte';
    import { page } from '$app/stores';

    let heroComponent;
    const path = $page.url.pathname;

    if (path === '/') {
        heroComponent = HomeHero
    } else if (path === '/founders') {
        heroComponent = FounderHero
    } else if (path === '/investors') {
        heroComponent = InvestorHero
    } else if (path === '/portfolio') {
        heroComponent = PortfolioHero
    } else if (path === '/about') {
        heroComponent = AboutHero
    } else if (path === '/team') {
        heroComponent = TeamHero
    } else {
        heroComponent = FounderHero
    }

    const classes = ``
</script>

<svelte:component this={heroComponent} />