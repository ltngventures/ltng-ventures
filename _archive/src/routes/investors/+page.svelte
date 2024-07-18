<script lang="ts">
    import { setFormSubmitted } from "$lib/utils/helpers";

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

    let investmentInterest: string;

    function handleSubmit(event: Event) {
        isSubmitting = true;
        errorMessage = "";

        const form = event.target as HTMLFormElement;
        const rawFormData = new FormData(form);
        const formData = Object.fromEntries(rawFormData);

        const bitcoinerCheckboxes = document.getElementsByName(
            "bitcoiner"
        ) as NodeListOf<HTMLInputElement>;
        const skillsCheckboxes = document.getElementsByName(
            "skills"
        ) as NodeListOf<HTMLInputElement>;
        const bitcoinerValues: string[] = [];
        const skillsValues: string[] = [];

        bitcoinerCheckboxes.forEach((el) => el.checked && bitcoinerValues.push(el.value));
        skillsCheckboxes.forEach((el) => el.checked && skillsValues.push(el.value));

        // Do some formatting of the data we'll send
        const payload = {
            formName: formData.investmentInterest === "Scout" ? "Scout Intake" : "Investor Intake",
            submissionTime: new Date().toLocaleString("en-US"),
            submissionTimeIso: new Date().toISOString(),
            name: formData.name,
            email: formData.email,
            investmentInterest: formData.investmentInterest,
            syndicateInvestor: formData.syndicateMember,
            source: formData.source,
            previousInvestments: formData.previousInvestments,
            socialLink: formData.socialLink,
            otherPowers: formData.otherPowers,
            bitcoiner: bitcoinerValues.length > 0 ? bitcoinerValues.join(", ") : undefined,
            skills: skillsValues.length > 0 ? skillsValues.join(", ") : undefined,
            scoutFounder: formData.scoutFounder,
            scoutFounderEmail: formData.scoutFounderEmail,
            scoutInvestment: formData.scoutInvestment,
            scoutInvestmentMission: formData.scoutInvestmentMission,
            scoutInvestmentReason: formData.scoutInvestmentReason,
            scoutSource: formData.scoutSource,
            scoutUrl: formData.scoutUrl,
        };

        const jsonData = JSON.stringify(payload);
        fetch("/api/investors", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: jsonData,
        })
            .then(() => {
                form.classList.remove("submitted");
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
    <meta
        name="description"
        content="Learn how to invest with Lighting Ventures in the best Free & Open Source companies."
    />
</svelte:head>

<div class="mb-4 pt-4 pb-12 bg-btcOrange/20 innerShadow">
    <div class="max-w-6xl mx-auto px-4 md:px-8 mt-8 prose prose-invert md:prose-xl">
        <h2
            id="node-2-fund"
            class="tracking-tight pb-1 mb-12 text-3xl md:text-4xl text-ltngWhite font-bold gradientHeader inline-block scroll-mt-24"
        >
            Node 2 Fund
        </h2>

        <p>
            The newest flagship fund from Lightning Ventures. The future of Free & Open Source
            venture capital looks bright. Lightning Ventures' <a
                href="https://venture.angellist.com/funds/node-2-fund">Node 2 Fund</a
            > is uniquely positioned to invest in the emerging Free & Open Source-native landscape, with
            an exclusive focus on Free & Open Source and an extensive network of industry connections.
            We are committed to supporting and fostering innovation in the Free & Open Source ecosystem,
            aiming to capitalize on the unparalleled opportunities presented by this transformative technology.
            Lightning Ventures aims to foster innovation in the space, helping to shape the future of
            finance and technology while creating value for our investors and the broader ecosystem.
        </p>

        <p>
            If you want to invest in the next generation of Free & Open Source companies with us, <a
                href="#investor-contact">apply to invest here</a
            >.
        </p>
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

        <p>
            In addition to our Node Series funds, Lightning Ventures manages an active syndicate of
            accomplished, talented, and unique investors. This group, which includes founders of
            successful Free & Open Source companies and influential figures in the Free & Open
            Source ecosystem, further enhances our ability to support founders and portfolio
            companies. This robust network provides value-added resources, mentorship, and
            connections that can propel our investments. We provide our startups with access to
            strategic partnerships, market insights, and growth opportunities.
        </p>

        <p>
            For newer investors, Syndicates are a perfect place to start your angel investing
            journey. The minimums are much lower than being an LP in a more traditional fund (like
            our <a href="https://venture.angellist.com/funds/node-2-fund">Node 2 Fund</a>) and you
            get to see a lot of dealflow to hone your skills.
        </p>

        <h3>How can I join?</h3>
        <p>
            The Syndicate is managed through Angellist. You can join our syndicate and start
            receiving dealflow for free <a href="#investor-contact"
                >by filling out this short form</a
            >. If we're offering a Free & Open Source deal you like, and you decide you want to
            invest, the minimum investment is $1,000. Be impactful, add value and join our network.
            If you are already on AngelList you can simply
            <a href="https://venture.angellist.com/lightningventures/syndicate"
                >apply to join our syndicate here</a
            >.
        </p>
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

        <p>
            Lightning Ventures appreciates and rewards warm introductions! This is a chance to
            privately share any great startup or founder you think we should meet.
        </p>
        <p>
            We will share 20% of our carry in that investment with you. Find a great startup! Hook
            us up with them! Earn carry on that deal if we end up investing. Learn about Venture
            Capital and break into Free & Open Source VC with our new program.
        </p>
        <p>
            Don't hesitate to <a href="#investor-contact">get in touch</a> below to tell us more about
            how you can help.
        </p>
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

        <p>
            Our Node 1 Fund portfolio companies include: Strike, Swan, Azteco, CoinCorner, Breez,
            Unchained Capital, Relai, Satsback.com, Bold, THNDR Games, Moon, Bitnob, Scarce City,
            Beach Wallet, Impervious.ai, Start9, Bitstack, DIGTL, Slice, Cloaked Wireless, Beaver,
            Wavlake, Federated Computer, Geyser, Orange Pill App, Fuji Labs, Vida Global, Jan3, and
            Ibex.
        </p>
        <p>
            This fund invests in Free & Open Source companies with an emphasis on Lightning Network
            technology. This fund has a strict thesis of investing in the Free & Open Source
            ecosystem, with tremendous focus and interest specifically in companies who are building
            on the Lightning Network. We are investing in passionate, charismatic founders who are
            building real companies, potentially behemoths and ultimately are on a mission to make a
            sizable impact in the world and future. Through this fund, we have an opportunity to
            have an allocation or direct ownership of leading companies in this exciting and
            lucrative space. <strong>Node 1 Fund is closed.</strong>
        </p>
        <p>
            Please see <a href="#node-2-fund">Node 2 Fund</a> for current investment opportunities.
        </p>
    </div>
</div>

<div class="mb-16 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <div>
        <h3>Join the Lightning Ventures Fold</h3>
        <form
            name="Investor Contact"
            id="investor-contact"
            method="POST"
            class="flex flex-col md:grid md:grid-cols-2 gap-8 scroll-m-36"
            on:submit|preventDefault={handleSubmit}
        >
            <fieldset class="formGroup">
                <label for="investmentInterest">What are you interested in? *</label>
                <select
                    bind:value={investmentInterest}
                    name="investmentInterest"
                    id="investmentInterest"
                >
                    <option value="Syndicate">Invest via the Syndicate</option>
                    <option value="Node 2 Fund">Become an LP in Node 2 Fund</option>
                    <option value="Scout">Submit a Scout Deal</option>
                    <option value="Learn">Learn more about Lightning Ventures</option>
                    <option value="Other">Other</option>
                </select>
            </fieldset>
            {#if investmentInterest !== "Syndicate" && investmentInterest !== "Scout"}
                <fieldset class="formGroup">
                    <label for="syndicateMember"
                        >Are you already in the Lightning Ventures syndicate? *</label
                    >
                    <select name="syndicateMember" id="syndicateMember">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </fieldset>
            {/if}
            <fieldset class="formGroup">
                <label for="name">Full Name *</label>
                <input type="text" name="name" id="name" required />
            </fieldset>
            <fieldset class="formGroup">
                <label for="email">Email *</label>
                <input type="text" name="email" id="email" required />
            </fieldset>
            <fieldset class="formGroup">
                <label for="socialLink">Social link (Twitter, Telegram, LinkedIn, etc.) *</label>
                <input type="text" name="socialLink" id="socialLink" required />
            </fieldset>
            <fieldset class="formGroup">
                <label for="source">How'd you hear about Lightning Ventures *</label>
                <input type="text" name="source" id="source" required />
            </fieldset>
            {#if investmentInterest === "Scout"}
                <fieldset class="formGroup">
                    <label for="scoutInvestment"
                        >What company would you like to tell us about? *</label
                    >
                    <input type="text" name="scoutInvestment" id="scoutInvestment" required />
                </fieldset>
                <fieldset class="formGroup">
                    <label for="scoutUrl">What's the URL of the company? *</label>
                    <input
                        type="text"
                        name="scoutUrl"
                        id="scoutUrl"
                        placeholder="https://..."
                        required
                    />
                </fieldset>
                <fieldset class="formGroup md:col-span-2">
                    <label for="scoutInvestmentMission">What does the company do? *</label>
                    <textarea name="scoutInvestmentMission" id="scoutInvestmentMission" required />
                </fieldset>
                <fieldset class="formGroup md:col-span-2">
                    <label for="scoutInvestmentReason"
                        >Why do you think this is a good investment? *</label
                    >
                    <textarea name="scoutInvestmentReason" id="scoutInvestmentReason" required />
                </fieldset>
                <fieldset class="formGroup md:col-span-2">
                    <label for="scoutSource">How did you source this deal? *</label>
                    <textarea
                        name="scoutSource"
                        id="scoutSource"
                        placeholder="Friend, Social Media, Conference, etc."
                        required
                    />
                </fieldset>
                <fieldset class="formGroup">
                    <label for="scoutFounder">Company founder's name *</label>
                    <input type="text" name="scoutFounder" id="scoutFounder" required />
                </fieldset>
                <fieldset class="formGroup">
                    <label for="scoutFounderEmail"
                        >Company founder's email <span class="italic text-base"
                            >Or yours if you don't know</span
                        >*</label
                    >
                    <input type="text" name="scoutFounderEmail" id="scoutFounderEmail" required />
                </fieldset>
            {:else}
                <fieldset class="formGroup md:col-span-2">
                    <label for="previousInvestments"
                        >Have you previously invested in FOSS companies? If so, which? *</label
                    >
                    <textarea name="previousInvestments" id="previousInvestments" required />
                </fieldset>
                <!-- <fieldset class="formGroup">
                    <legend class="">Which kind of Bitcoiner are you? *</legend>
                    <span class="text-base italic">Check all that apply</span>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="bitcoiner" value="New Bitcoiner" />
                        <label for="New Bitcoiner"
                            >Total newbie but I'm obsessed with Bitcoin!</label
                        >
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="bitcoiner" value="Node Runner" />
                        <label for="Node Runner">I run a Bitcoin and/or Lightning node</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="bitcoiner" value="Bitcoin OG" />
                        <label for="Bitcoin OG">Bitcoin OG</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="bitcoiner" value="Bitcoin Maxi" />
                        <label for="Bitcoin Maxi">Bitcoin maximalist</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="bitcoiner" value="Shitcoiner" />
                        <label for="Shitcoiner"
                            >I love Crypto, NFTs, Web3, and Blockchain tech</label
                        >
                    </div>
                </fieldset> -->
                <fieldset class="formGroup">
                    <legend class="">How can you help our portfolio? *</legend>
                    <span class="text-base italic">Check all that apply</span>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="skills" value="Go to market" />
                        <label for="Go to market">Marketing, Sales, PR, Social Media</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="skills" value="Product & Design" />
                        <label for="Product & Design">Product and/or Design</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="skills" value="Engineering" />
                        <label for="Engineering">Engineering</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input type="checkbox" name="skills" value="Legal & Compliance" />
                        <label for="Legal & Compliance">Legal & Compliance</label>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <input
                            type="checkbox"
                            name="skills"
                            value="Finance, Accounting, and/or Data Analytics"
                        />
                        <label for="Finance, Accounting, and/or Data Analytics"
                            >Finance, Accounting, and/or Data Analytics</label
                        >
                    </div>
                </fieldset>

                <fieldset class="formGroup md:col-span-2">
                    <label for="otherPowers">Any other special powers? *</label>
                    <textarea name="otherPowers" id="otherPowers" required />
                </fieldset>
            {/if}

            <fieldset class="formGroup md:col-span-2">
                <button
                    type="submit"
                    class="w-1/3 mx-auto font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover"
                    disabled={isSubmitting}
                    on:click={setFormSubmitted}>Submit</button
                >
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
