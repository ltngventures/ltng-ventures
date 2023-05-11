<script lang="ts">
    let investorType: string;

    let institution: boolean = false;
    $: institutional = investorType === 'institutional';
</script>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <h2 class="gradientHeader pageHeader">
        Invest with us in the best<br>
        Bitcoin-only companies.
    </h2>
    <p>
        <span class="gradientHeader font-bold">Lightning Ventures</span> is one of few pure-play Bitcoin-focused
        venture capital firms. The fund is uniquely positioned to invest in and partner with the most
        promising companies in the space. Our VC fund has a large network of Bitcoiner LPs, making us
        an attractive partner for Bitcoin-oriented tech founders.
    </p>
    <p>Any information disclosed here will be kept strictly confidential.</p>

    <div>
        <h3>Tell us about yourself</h3>
        <form
            name="investors_lp"
            method="POST"
            netlify
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
            <fieldset class="formGroup">
                <label for="investorType">How are you interested in investing? *</label>
                <select name="investorType" bind:value={investorType} id="investorType">
                    <option value="individual">Individual investor</option>
                    <option value="institutional">Institutional investor</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                {#if institutional}
                    <label for="institution">What's the name of the institution? *</label>
                    <input type="text" name="institution" id="institution" />
                {/if}
            </fieldset>
            <fieldset class="formGroup">
                <label for="firstName">First name *</label>
                <input type="text" name="firstName" id="firstName" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="lastName">Last name *</label>
                <input type="text" name="lastName" id="lastName" />
            </fieldset>

            <fieldset class="formGroup">
                <label for="email">Email *</label>
                <input type="text" name="email" id="email" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="twitter">Twitter handle</label>
                <input type="text" name="twitter" id="twitter" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="linkedin">LinkedIn profile URL</label>
                <input type="text" name="linkedin" id="linkedin" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="telegram">Telegram username</label>
                <input type="text" name="telegram" id="telegram" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="howDidYouHear">How did you hear about Lightning Ventures? *</label>
                <input type="text" name="howDidYouHear" id="howDidYouHear" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="syndicate">Are you already investing with us in the syndicate?</label>
                <div class="flex flex-row items-center gap-4">
                    <input type="radio" name="syndicate" value="true" />
                    <label for="syndicate">Yes</label>
                    <input type="radio" name="syndicate" value="false" />
                    <label for="syndicate">No</label>
                </div>
            </fieldset>
            <div class="flex flex-col gap-8">
                <fieldset class="formGroup">
                    <label for="bitcoiner">What kind of Bitcoiner are you? *</label>
                    <span class="sublabel">Check all that apply</span>
                    <div>
                        <div class="flex flex-row items-center gap-4">
                            <input type="checkbox" name="bitcoinerNoob" id="bitcoinerNoob" />
                            <label for="bitcoinerNoob">New to the space but excited!</label>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <input
                                type="checkbox"
                                name="bitcoinerBitcoinNode"
                                id="bitcoinerBitcoinNode"
                            />
                            <label for="bitcoinerBitcoinNode">I run a Bitcoin full node</label>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <input
                                type="checkbox"
                                name="bitcoinerLightningNode"
                                id="bitcoinerLightningNode"
                            />
                            <label for="bitcoinerLightningNode">I run a Lightning node</label>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <input type="checkbox" name="bitcoinerOg" id="bitcoinerOg" />
                            <label for="bitcoinerOg">I've been in Bitcoin for 6+ years</label>
                        </div>
                        <div class="flex flex-row items-center gap-4">
                            <input type="checkbox" name="bitcoinerMaxi" id="bitcoinerMaxi" />
                            <label for="bitcoinerMaxi">I'm a Bitcoin maximalist</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="formGroup">
                    <label for="syndicate"
                        >Are you already investing in the Lightning Ventures syndicate?</label
                    >
                    <div class="flex flex-row items-center gap-4">
                        <input type="radio" name="syndicate" value="true" />
                        <label for="syndicate">Yes</label>
                        <input type="radio" name="syndicate" value="false" />
                        <label for="syndicate">No</label>
                    </div>
                </fieldset>
            </div>
            <fieldset class="formGroup">
                <label for="strengths">In what areas are you or your fund exceptional? *</label>
                <span class="sublabel">Check all that apply</span>
                <div>
                    <div class="flex flex-row items-center gap-4">
                        <input type="checkbox" name="strengthsLegal" id="strengthsLegal" />
                        <label for="strengthsLegal">Legal & compliance</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input type="checkbox" name="strengthsMarketing" id="strengthsMarketing" />
                        <label for="strengthsMarketing">Marketing & PR</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input type="checkbox" name="strengthsBizDev" id="strengthsBizDev" />
                        <label for="strengthsBizDev">Business Development & Sales</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input
                            type="checkbox"
                            name="strengthsProductDesign"
                            id="strengthsProductDesign"
                        />
                        <label for="strengthsProductDesign">Product & Design</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input
                            type="checkbox"
                            name="strengthsEngineering"
                            id="strengthsEngineering"
                        />
                        <label for="strengthsEngineering">Software Engineering</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input type="checkbox" name="strengthsFinance" id="strengthsFinance" />
                        <label for="strengthsFinance">Finance & Accounting</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input
                            type="checkbox"
                            name="strengthsDataScience"
                            id="strengthsDataScience"
                        />
                        <label for="strengthsDataScience">Data Science & Analytics</label>
                    </div>
                    <div class="flex flex-row items-center gap-4">
                        <input type="checkbox" name="strengthsHR" id="strengthsHR" />
                        <label for="strengthsHR">HR & Recruiting</label>
                    </div>
                </div>
            </fieldset>
            <fieldset class="formGroup col-span-2">
                <label for="otherStrengths">Anything else you'd like to mention?</label>
                <input type="text" name="otherStrengths" id="otherStrengths" />
            </fieldset>
        </form>
    </div>
</div>
