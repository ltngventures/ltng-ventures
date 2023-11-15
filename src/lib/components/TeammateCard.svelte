<script lang="ts">
    import BoltMarkIcon from "$lib/elements/icons/BoltMark.svelte";
    import TeammateSocialLink from "$lib/components/TeammateSocialLink.svelte";

    export let teammate: App.Teammate;
    export let double: boolean = false;
</script>

<div class="p-4 md:p-8 border hoverCard flex flex-col gap-4 md:gap-8">
    <div class="flex flex-row gap-8 items-center {double ? 'mx-auto' : ''}">
        {#if teammate.img}
            <img
                src={teammate.img}
                alt={teammate.name}
                class="rounded-full w-24 h-24 border border-slate-200/20 shadow-md"
            />
        {:else}
            <div
                class="rounded-full w-24 h-24 bg-slate-100/30 flex flex-row justify-center items-center"
            >
                <BoltMarkIcon klass="w-20 h-20" />
            </div>
        {/if}

        <div class="flex flex-col gap-1">
            <h3 class="font-josefin-sans-italic uppercase text-lg md:text-2xl font-bold -mb-2">
                {@html teammate.name}
            </h3>
            <div class="font-medium text-lg">{teammate.title}</div>
            {#if teammate.socials}
                <div class="flex flex-row gap-4 items-center">
                    {#each teammate.socials as social}
                        <TeammateSocialLink {social} />
                    {/each}
                </div>
            {/if}
        </div>
    </div>
    {#if teammate.description}
        <p class="prose prose-invert {double ? 'max-w-none' : ''}">{@html teammate.description}</p>
    {/if}
</div>
