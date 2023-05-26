<script lang="ts">
    import BitcoinSoftwareIntake from "$lib/components/intakes/BitcoinSoftwareIntake.svelte";
    import MiningEnergyIntake from "$lib/components/intakes/MiningEnergyIntake.svelte";
    import { setFormSubmitted } from "$lib/utils/helpers";

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

    let companyIncorporated: boolean = false;
    let companySector: string;

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
    <title>Pitch Us | Lightning Ventures</title>
    <meta name="description" content="Are you a Bitcoin founder looking for early stage funding? Get in touch with Lightning Ventures." />
</svelte:head>

<div class="h-96 bg-cover bg-center md:bg-top bg-no-repeat bg-mt-fuji240mobile md:bg-mt-fuji240 py-8" />
<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <h2 class="pageHeader gradientHeader">
        Building on Bitcoin?<br>
        We can't wait to hear more.
    </h2>
    <p>
        <span class="gradientHeader font-bold">Lightning Ventures</span> is one of few pure-play Bitcoin-focused
        venture capital firms. We invest in software, hardware, and mining & energy startups. If it helps drive the worldwide adpotion of Bitcoin and Lightning in some way, we want to know about it.
    </p>

    <div>

        <form
            name="Founders Intake"
            method="POST"
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
            netlify
            netlify-honeypot="bot-field"
            enctype="multipart/form-data"
            on:submit|preventDefault={handleSubmit}
        >
            <input type="hidden" name="form-name" value="Founders Intake" />
            <label class="hidden">
                Don't fill this out if you're human: <input name="bot-field" />
            </label>
            <h3 class="md:col-span-2">Tell us about yourself</h3>
            <fieldset class="formGroup">
                <label for="name">Full name *</label>
                <input type="text" name="name" id="name" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="email">Email address *</label>
                <input type="text" name="email" id="email" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="role">Title or Role *</label>
                <input type="text" name="role" id="role" placeholder="CEO, CTO, etc." required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="social">Social profile link *</label>
                <input type="text" name="social" id="social" placeholder="Twitter, LinkedIn, Nostr, Telegram, etc." required/>
            </fieldset>

            <h3 class="md:col-span-2">Tell us about your company</h3>
            <fieldset class="formGroup">
                <label for="companySector">What sector is your company in? *</label>
                <select bind:value={companySector} name="companySector" id="companySector">
                    <option value="communications">Communications</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="exchange_financial">Exchanges / On Ramps / Financial</option>
                    <option value="gaming_art">Gaming / Art</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="lending_credit">Lending / Credit</option>
                    <option value="mining">Mining & Energy</option>
                    <option value="payments_rewards">Payments / Rewards</option>
                    <option value="social">Social</option>
                    <option value="wallets">Wallets</option>
                    <option value="other">Other</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyName">Company name *</label>
                <input type="text" name="companyName" id="companyName" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyWebsite">Company website *</label>
                <input type="text" name="companyWebsite" id="companyWebsite" placeholder="https://..." required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyIncorporated">Is your company incorporated? *</label>
                <select bind:value={companyIncorporated} name="companyIncorporated" id="companyIncorporated">
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                </select>
            </fieldset>
            <div class="col-span-2 grid-cols-1 md:grid-cols-2 gap-8 {companyIncorporated ? 'grid' : 'hidden'}">
                <fieldset class="formGroup">
                    <label for="companyLegalName">What's the legal name of the company?</label>
                    <input type="text" name="companyLegalName" id="companyLegalName"/>
                </fieldset>
                <fieldset class="formGroup">
                    <label for="companyCountryOfIncorporation">What country is the company based in?</label>
                    <input type="text" name="companyCountryOfIncorporation" id="companyCountryOfIncorporation"/>
                </fieldset>
                <fieldset class="formGroup">
                    <label for="companyCorpStructure">What is the corporate structure?</label>
                    <select name="companyCorpStructure" id="companyCorpStructure">
                        <option value="LLC">LLC</option>
                        <option value="C Corp">C-corp</option>
                        <option value="S Corp">S-corp</option>
                        <option value="Other">Other</option>
                    </select>
                </fieldset>
                <fieldset class="formGroup">
                    <label for="companyOptionsPool">Have you set up an options pool?</label>
                    <select name="companyOptionsPool" id="companyOptionsPool">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </fieldset>
            </div>
            <fieldset class="formGroup">
                <label for="companyLocation">Where are you and/or the team based? *</label>
                <input type="text" name="companyLocation" id="companyLocation" required />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyDeck">Pitch deck link</label>
                <input type="text" name="companyDeck" id="companyDeck" placeholder="https://..."/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyDeckFile">Pitch deck</label>
                <input type="file" name="companyDeckFile" id="companyDeckFile" class="text-base file:prose file:rounded-md file:px-4 file:py-2 file:font-semibold file:mr-4 file:border-0 file:hover:bg-slate-600/50 file:bg-slate-700/50 file:text-white" />
            </fieldset>

            <h4 class="md:col-span-2">Company finances</h4>
            <fieldset class="formGroup">
                <label for="companyStage">Funding stage *</label>
                <select name="companyStage" id="companyStage" required>
                    <option value="prefunding">No funding raised</option>
                    <option value="angels">Raised from angels and/or friends & family</option>
                    <option value="preseed">Raised a pre-seed round</option>
                    <option value="seed">Raised a seed round</option>
                    <option value="a-round">Raised a Series A</option>
                    <option value="later-stage">Post Series A</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyRevenueStatus">Revenue status *</label>
                <select name="companyRevenueStatus" id="companyRevenueStatus" required>
                    <option value="profitable">Profitable</option>
                    <option value="postRev-notProfitable">Post revenue, not profitable</option>
                    <option value="preRev-liveProduct">Pre revenue, live product</option>
                    <option value="preRev-MVP">Pre revenue, MVP in market</option>
                    <option value="preMVP">Pre MVP / Idea stage</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                <label for="teamSize">Team size (full-time, part-time, & contractors) *</label>
                <input type="text" name="teamSize" id="teamSize" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="grossBurn">Gross burn (in USD) *</label>
                <input type="text" name="grossBurn" id="grossBurn" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="runway">Remaining runway (in months) *</label>
                <input type="text" name="runway" id="runway" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="dataRoom">If you have a link to a dataroom, please share</label>
                <input type="text" name="dataRoom" id="dataRoom" placeholder="https://..."/>
            </fieldset>
            <fieldset class="formGroup col-span-2">
                <label for="previousFunding">If you've previously raised, please tell us the month/year you raised each round and all investors in those rounds.</label>
                <span class="sublabel">Please include SAFEs, Angels, and Syndicates as well</span>
                <textarea name="previousFunding" id="previousFunding" />
            </fieldset>

            <h3 class="md:col-span-2">Tell us about what you're building</h3>
            <fieldset class="formGroup col-span-2">
                <label for="companyMission">What do you do and why does it matter? *</label>
                <span class="sublabel">2-3 paragraphs max</span>
                <textarea name="companyMission" id="companyMission" required/>
            </fieldset>

            {#if companySector === 'mining'}
                <MiningEnergyIntake />
            {:else}
                <BitcoinSoftwareIntake />
            {/if}

            <fieldset class="formGroup col-span-2">
                <label for="exitStrategies">What are some possible exit strategies? Have their been any recent comparable exits in your industry? Who might be a potential acquirer in the future? *</label>
                <span class="sublabel">2-3 paragraphs max</span>
                <textarea name="exitStrategies" id="exitStrategies" required/>
            </fieldset>

            <fieldset class="formGroup col-span-2">
                <label for="risks">What risks are you facing? What is the biggest threat to your survival? *</label>
                <span class="sublabel">2-3 paragraphs max</span>
                <textarea name="risks" id="risks" required/>
            </fieldset>

            <fieldset class="formGroup col-span-2">
                <label for="traction">What does your traction look like so far? Any high level KPIs that you can share? *</label>
                <span class="sublabel">2-3 paragraphs max</span>
                <textarea name="traction" id="traction" required/>
            </fieldset>

            <fieldset class="formGroup col-span-2">
                <label for="press">Press, Blogs, Interviews, Podcasts, Media, or anything else to share?</label>
                <textarea name="press" id="press" />
            </fieldset>

            <fieldset class="formGroup md:col-span-2">
                <button type="submit" class="w-1/3 mx-auto font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover" disabled={isSubmitting} on:click={setFormSubmitted}>Submit</button>
                {#if showSuccess}
                    <div class="text-green-500 text-center">Thanks! We'll reach out if once we've reviewed.</div>
                {/if}

                {#if showError}
                    <div class="text-red-500 text-center">{errorMessage}</div>
                {/if}
            </fieldset>
        </form>
    </div>
</div>