<script lang="ts">
</script>

<div class="my-16 py-12 max-w-6xl mx-auto px-8 prose prose-invert prose-xl">
    <p>
        <span class="gradientHeader font-bold">Lightning Ventures</span> is one of few pure-play Bitcoin-focused
        venture capital firms. If you're building in Bitcoin, we want to know about it. The form below
        may seem like a lot of work, but the more details we have about your company, the less time it
        will take us to get back to you.
    </p>
    <p>
        Any information disclosed here will be kept confidential. Lightning Ventures has a
        zero-tolerance policy, resulting in a permanent ban for LPs who leak or otherwise violate
        this strict guideline.
    </p>

    <div>
        <h3>Tell us about your company</h3>
        <form name="founders" method="POST" netlify class="grid grid-cols-2 gap-8">
            <fieldset class="formGroup">
                <label for="companyName">What's the name of your Company?</label>
                <input type="text" name="companyName" id="companyName" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyUrl">What's the company's website?</label>
                <input type="text" name="companyUrl" id="companyUrl" placeholder="https://..." />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyIncorporated">Is the company incorporated?</label>
                <div class="flex flex-row items-center gap-4">
                    <input type="radio" name="companyIncorporated" value="true" />
                    <label for="companyIncorporated">Yes</label>
                    <input type="radio" name="companyIncorporated" value="false" />
                    <label for="companyIncorporated">No</label>
                </div>
            </fieldset>
            <!-- To be shown on yes -->
            <fieldset class="formGroup">
                <label for="companyLegalName">What's the company's legal name?</label>
                <input type="text" name="companyLegalName" id="companyLegalName" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyLegalCountry">What country are you incorporated in?</label>
                <input type="text" name="companyLegalCountry" id="companyLegalCountry" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyEntityType">What type of entity is the company?</label>
                <input type="text" name="companyEntityType" id="companyEntityType" />
            </fieldset>
        </form>
    </div>
</div>
