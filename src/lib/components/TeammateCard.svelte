<script lang="ts">
    import BoltMarkIcon from '$lib/elements/icons/BoltMark.svelte';
    import TeammateSocialLink from '$lib/components/TeammateSocialLink.svelte';

    export let teammate: App.Teammate;
</script>

<div class="p-4 md:p-8 border hoverCard flex flex-col gap-4 md:gap-8">
    <div class="flex flex-row gap-8 items-center">
        {#if teammate.img}
            <img
                src={teammate.img}
                alt={teammate.name}
                class="rounded-full w-20 h-20 border border-slate-200/20 shadow-md"
            />
        {:else}
            <div
                class="rounded-full w-20 h-20 bg-slate-100/30 flex flex-row justify-center items-center"
            >
                <BoltMarkIcon klass="w-16 h-16" />
            </div>
        {/if}

        <div class="flex flex-col">
            <h3 class="font-josefin-sans-italic uppercase text-2xl font-bold flex flex-row gap-8 items-center">
                {teammate.name}
                {#if teammate.socials}
                    <div class="flex flex-row gap-4 items-center -mt-1.5">
                        {#each teammate.socials as social}
                            <TeammateSocialLink {social} />
                        {/each}
                    </div>
                {/if}
            </h3>
            <div class="font-medium text-lg">{teammate.title}</div>
        </div>
    </div>
    {#if teammate.description}
        <p class="prose prose-invert">{@html teammate.description}</p>
    {/if}
</div>
