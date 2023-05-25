<script lang="ts">

</script>

<fieldset class="formGroup">
    <legend class="mb-2">Which best describes you? *</legend>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="haveMiners" >
        <label for="haveMiners">I have a ton of miners</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needMiners" >
        <label for="needMiners">I need a ton of miners</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="havePower" >
        <label for="havePower">I have a ton of power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needPower" >
        <label for="needPower">I need a ton of power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="somethingElse" >
        <label for="somethingElse">Something else</label>
    </div>
</fieldset>

<fieldset class="formGroup">
    <legend class="mb-2">Which best describes what you need? *</legend>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needFinancing" >
        <label for="needFinancing">Financing</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needPower" >
        <label for="needPower">Power</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needInfra" >
        <label for="needInfra">Infrastructure</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needServices" >
        <label for="needServices">Services</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needDemandResponse" >
        <label for="needDemandResponse">Demand response</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needBuySell" >
        <label for="needBuySell">Buy or Sell</label>
    </div>
    <div class="flex flex-row gap-4 items-center">
        <input type="checkbox" name="needConsulting" >
        <label for="needConsulting">Consulting</label>
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