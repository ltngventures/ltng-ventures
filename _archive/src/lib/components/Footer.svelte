<script lang="ts">
    import EmailCollector from '$lib/components/EmailCollector.svelte';
    import SocialIconLinks from '$lib/components/SocialIconLinks.svelte';
</script>


<div class="flex flex-col items-center gap-4 mt-20 pb-20 max-w-6xl mx-auto px-8">
    <div class="flex flex-row items-center justify-center">
        <EmailCollector />
    </div>
    <div class="flex flex-col md:flex-row gap-4 items-center justify-center text-sm">
        <div class="px-2">©️ 2023 Lightning Ventures</div>
        <SocialIconLinks />
    </div>
</div>
