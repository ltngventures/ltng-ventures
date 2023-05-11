<script lang="ts">

</script>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <h2 class="pageHeader gradientHeader">
        Building on Bitcoin?<br>
        We can't wait to hear more.
    </h2>
    <p>
        <span class="gradientHeader font-bold">Lightning Ventures</span> is one of few pure-play Bitcoin-focused
        venture capital firms. We invest in software, hardware, and mining & energy startups. If it helps drive the worldwide adpotion of Bitcoin and Lightning in some way, we want to know about it.
    </p>
    <p>
        Any information disclosed here will be kept strictly confidential.
    </p>

    <div>

        <form name="founders" method="POST" data-netlify="true" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h3 class="md:col-span-2">Tell us about your company</h3>
            <fieldset class="formGroup">
                <label for="companyType">What sector is your company in? *</label>
                <select name="companyType" id="companyType">
                    <option value="software">Software & Hardware</option>
                    <option value="mining">Mining & Energy</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyStage">What stage is your company? *</label>
                <select name="companyStage" id="companyStage">
                    <option value="prefunding">No funding raised</option>
                    <option value="preseed">Raised a pre-seed round</option>
                    <option value="seed">Raised a seed round</option>
                    <option value="a-round">Raised a Series A</option>
                    <option value="later-stage">Post Series A</option>
                </select>
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyName">Company name *</label>
                <input type="text" name="companyName" id="companyName" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyWebsite">Company website *</label>
                <input type="text" name="companyWebsite" id="companyWebsite" placeholder="https://..." />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyMission">What do you do and why does it matter? *</label>
                <span class="sublabel">2-3 paragraphs max</span>
                <textarea name="companyMission" id="companyMission" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="companyDeck">Pitch deck link</label>
                <span class="sublabel">Optional</span>
                <input type="text" name="companyDeck" id="companyDeck" placeholder="https://..." />
            </fieldset>

            <h3 class="md:col-span-2">Tell us about yourself</h3>
            <fieldset class="formGroup">
                <label for="name">Full name</label>
                <input type="text" name="name" id="name" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="email">Email address</label>
                <input type="text" name="email" id="email" />
            </fieldset>
            <fieldset class="formGroup">
                <label for="role">Title or Role</label>
                <input type="text" name="role" id="role" placeholder="CEO, CTO, etc." />
            </fieldset>
            <fieldset class="formGroup">
                <label for="social">Social profile link</label>
                <input type="text" name="social" id="social" placeholder="Twitter, LinkedIn, Nostr, Telegram, etc." />
            </fieldset>
            <fieldset class="formGroup col-span-2">
                <button type="submit" class="w-1/3 mx-auto font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover">Submit</button>
            </fieldset>
        </form>
    </div>
</div>
