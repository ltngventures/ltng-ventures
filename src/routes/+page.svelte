<script lang="ts">
    import PortfolioGrid from '$lib/components/PortfolioGrid.svelte';
</script>

<div class="flex flex-col">
    <div class="py-12 bg-slate-50/10 innerShadow">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                Featured Investments
            </h2>
            <PortfolioGrid displayCount={10} />
            <div class="w-full flex flex-row items-center justify-center pt-10">
                <a
                    href="/investments"
                    class="hover font-josefin-sans-italic text-base uppercase font-semibold text-ltngYellow bg-ltngWhite/20 hover:bg-transparent"
                    >All investments</a
                >
            </div>
        </div>
    </div>
    <div class="py-12">
        <div class="max-w-6xl mx-auto px-4 md:px-8">
            <h2
                class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block"
            >
                What Founders Say
            </h2>
        </div>
    </div>
</div>
