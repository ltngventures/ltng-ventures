<script lang="ts">
    import { investments } from '$lib/config/investments';
    import { getRandomSubarray } from '$lib/utils/helpers';

    export let displayCount: number = 10;
    export let displayAll: boolean = false;

    const sortedInvestments = investments.sort((a, b) => {
        const altA = a.alt.toUpperCase();
        const altB = b.alt.toUpperCase();
        return altA < altB ? -1 : 1;
    });

    const displayedInvestments: App.Investment[] = displayAll
        ? sortedInvestments
        : (getRandomSubarray(investments, displayCount) as App.Investment[]);
</script>

<div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16 justify-between my-8">
    {#each displayedInvestments as investment}
        <a
            href={investment.url}
            class="w-40 text-slate-950 justify-self-center justify-items-center flex flex-row p-4 md:p-0 hover:opacity-70"
        >
            <img
                src={investment.img}
                alt={investment.alt}
                class="mx-auto h-fit max-h-20 self-center"
            />
        </a>
    {/each}
</div>
