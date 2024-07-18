<script lang="ts">

</script>

<fieldset class="formGroup">
    <legend class="mb-2">Which best describes you? *</legend>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningSituation" value="Have miners" >
        <label for="Have miners">I have a ton of miners</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningSituation" value="Need miners" >
        <label for="Need miners">I need a ton of miners</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningSituation" value="Have power" >
        <label for="Have power">I have a ton of power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningSituation" value="Need power" >
        <label for="Need power">I need a ton of power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningSituation" value="Something else" >
        <label for="Something else">Something else</label>
    </div>
</fieldset>

<fieldset class="formGroup">
    <legend class="mb-2">Which best describes what you need? *</legend>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Financing" >
        <label for="Financing">Financing</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Power" >
        <label for="Power">Power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Infrastructure" >
        <label for="Infrastructure">Infrastructure</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Services" >
        <label for="Services">Services</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Demand response" >
        <label for="Demand response">Demand response</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Buy & Sell" >
        <label for="Buy & Sell">Buy or Sell</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="miningNeeds" value="Consulting" >
        <label for="Consulting">Consulting</label>
    </div>
</fieldset>

<fieldset class="formGroup col-span-2">
    <label for="siteLocation">If you're a miner, where are your sites located? </label>
    <span class="sublabel">2-3 paragraphs max</span>
    <textarea name="siteLocation" id="siteLocation"/>
</fieldset>

<fieldset class="formGroup">
    <label for="miningMinerCount">How many miners are you currently operating?</label>
    <input type='text' name="miningMinerCount" id="miningMinerCount" />
</fieldset>

<fieldset class="formGroup">
    <label for="miningHashPower">How much hash power do you generate?</label>
    <input type='text' name="miningHashPower" id="miningHashPower" />
</fieldset>

<fieldset class="formGroup col-span-2">
    <label for="miningPowerSources">Describe the power sources you use.</label>
    <span class="sublabel">2-3 paragraphs max</span>
    <textarea name="miningPowerSources" id="miningPowerSources"/>
</fieldset>

<fieldset class="formGroup col-span-2">
    <label for="miningMarketPosition">How are you positioning yourself in the market? How will you win? *</label>
    <span class="sublabel">2-3 paragraphs max</span>
    <textarea name="miningMarketPosition" id="miningMarketPosition" required/>
</fieldset>

<fieldset class="formGroup col-span-2">
    <label for="vision">What is your vision? How do you see the future for your company and this industry? *</label>
    <span class="sublabel">2-3 paragraphs max</span>
    <textarea name="vision" id="vision" required/>
</fieldset>