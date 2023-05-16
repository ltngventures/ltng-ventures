<script lang="ts">
    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

    function handleSubmit(event: Event) {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const urlParamsString = new URLSearchParams(formData as any).toString();

        isSubmitting = true;
        errorMessage = "";
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlParamsString
        })
        .then(() => {
            form.reset();
            isSubmitting = false;
            showSuccess = true;
            setTimeout(() => {
                showSuccess = false;
            }, 3500);
        })
        .catch((error) => {
            isSubmitting = false;
            showError = true;
            errorMessage = error;
        });
    }
</script>

<svelte:head>
    <title>Join Us | Lightning Ventures</title>
    <meta name="description" content="Learn how to invest with Lighting Ventures in the best Bitcoin companies." />
</svelte:head>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <h2 class="gradientHeader pageHeader">
        Invest with us in the best Bitcoin companies.
    </h2>
    <p>
        <span class="gradientHeader font-bold">Lightning Ventures</span> is one of few pure-play Bitcoin-focused
        venture capital firms. The fund is uniquely positioned to invest in and partner with the most
        promising companies in the space. Our VC fund has a large network of Bitcoiner LPs, making us
        an attractive partner for Bitcoin-oriented tech founders.
    </p>
    <p>There are several ways to invest with Lightning Ventures. Learn more below.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto not-prose">
        <a href="#node-2-fund" class="p-4 hoverCard no-underline">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 2 Fund
            </h2>
            <p class="text-sm md:text-lg">
                Learn more about becoming an LP in our new flagship fund dedicated to investing pre-seed to series A in the best Bitcoin companies and founders.
            </p>
        </a>
        <a href="#syndicate" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Lightning Syndicate
            </h2>
            <p class="text-sm md:text-lg">
                The hottest deal flow in Bitcoin. Start investing in Bitcoin companies with low minimums. Great for new or experienced angel investors alike.
            </p>
        </a>
        <a href="#scouts" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Scout Program
            </h2>
            <p class="text-sm md:text-lg">
                Lightning Ventures appreciates and rewards warm introductions! Break into the Bitcoin VC world and contribute to funding the ecosystem.
            </p>
        </a>
        <a href="#node-1-fund" class="p-4 hoverCard">
            <h2 class="text-lg md:text-2xl font-josefin-sans-italic uppercase font-semibold mb-4">
                Node 1 Fund
            </h2>
            <p class="text-sm md:text-lg">
                The original. Learn more about the Bitcoin and Lightning investments we've made so far.
            </p>
        </a>
    </div>


    <div>
        <h3>Still have questions?</h3>
        <form
            name="Investor Contact"
            method="POST"
            data-netlify="true"
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            <fieldset class="formGroup">
                <label for="name">Full Name *</label>
                <input type="text" name="name" id="name" required />
            </fieldset>
            <fieldset class="formGroup">
                <label for="email">Email *</label>
                <input type="text" name="email" id="email" required />
            </fieldset>
            <fieldset class="formGroup col-span-2">
                <label for="question">Question *</label>
                <textarea name="question" id="question" required />
            </fieldset>
            <fieldset class="formGroup md:col-span-2">
                <button type="submit" class="w-1/3 mx-auto font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover" disabled={isSubmitting}>Submit</button>
                {#if showSuccess}
                    <div class="text-green-500 text-center">Thanks! We'll be in touch soon.</div>
                {/if}

                {#if showError}
                    <div class="text-red-500 text-center">{errorMessage}</div>
                {/if}
            </fieldset>
        </form>
    </div>
</div>

<div class="mb-4 pt-4 pb-12 bg-btcOrange/20 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8 prose prose-invert md:prose-xl">
        <h2
            id="node-2-fund"
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block scroll-mt-24"
        >
            Node 2 Fund
        </h2>

        <p>The newest flagship fund from Lightning Ventures. The future of Bitcoin venture capital looks bright. Lightning Ventures' Node 2 Fund is uniquely positioned to invest in the emerging Bitcoin-native landscape, with an exclusive focus on Bitcoin and an extensive network of industry connections. We are committed to supporting and fostering innovation in the Bitcoin ecosystem, aiming to capitalize on the unparalleled opportunities presented by this transformative technology. Lightning Ventures aims to foster innovation in the space, helping to shape the future of finance and technology while creating value for our investors and the broader ecosystem.</p>

        <p>If you are an accredited investor looking to join our Node 2 Fund please <a href="/contact">get in touch</a> with any questions.</p>
    </div>
</div>

<div class="mb-4 pt-4 pb-12">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8 prose prose-invert md:prose-xl">
        <h2
            id="syndicate"
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block scroll-mt-24"
        >
            Lightning Ventures Syndicate
        </h2>

        <p>In addition to our Node Series funds, Lightning Ventures manages an active syndicate of accomplished, talented, and unique investors. This group, which includes founders of successful Bitcoin companies and influential figures in the Bitcoin ecosystem, further enhances our ability to support founders and portfolio companies. This robust network provides value-added resources, mentorship, and connections that can propel our investments. We provide our startups with access to strategic partnerships, market insights, and growth opportunities.</p>

        <p>For newer investors, Syndicates are a perfect place to start your angel investing journey. The minimums are much lower than being an LP in a more traditional fund (like our Node 2 fund) and you get to see a lot of deal flow to hone your skills.</p>

        <h3>How can I join?</h3>
        <p>The Syndicate is managed through Angellist. You can join our syndicate and start receiving dealflow for free, by filling out the <a href="https://venture.angellist.com/lightningventures/syndicate">short form on this page</a>. If we're offering a Bitcoin deal you like, and you decide you want to invest, the minimum investment is $1,000.</p>

    </div>
</div>

<div class="mb-4 pt-4 pb-12 bg-slate-50/10 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8 prose prose-invert md:prose-xl">
        <h2
            id="scouts"
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block scroll-mt-24"
        >
            Scout Program
        </h2>

        <p>The rapid growth of the Bitcoin market, increasing institutional interest, and the emergence of new use cases present significant opportunities for investment in the Bitcoin ecosystem. The total market capitalization of Bitcoin has grown exponentially since its inception, reaching over $1 trillion in 2021 and demonstrating the potential for further growth and adoption.</p>

        <p>We're still early. Growth in founding and funding of Bitcoin startups continues is accelerating. <a href="/investors">Ready to invest?</a></p>
    </div>
</div>

<div class="mb-4 pt-4 pb-12">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8 prose prose-invert md:prose-xl">
        <h2
            id="node-1-fund"
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block scroll-mt-24"
        >
            Node 1 Fund
        </h2>

        <p>In addition to our Node Series funds, Lightning Ventures manages an active syndicate of accomplished, talented, and unique investors. This group, which includes founders of successful Bitcoin companies and influential figures in the Bitcoin ecosystem, further enhances our ability to support founders and portfolio companies. This robust network provides value-added resources, mentorship, and connections that can propel our investments. We provide our startups with access to strategic partnerships, market insights, and growth opportunities.</p>

    </div>
</div>