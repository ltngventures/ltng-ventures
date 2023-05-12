<script lang="ts">
</script>

<form
    method="POST"
    class="flex flex-col gap-2 items-center"
    name="emailCollector"
    id="emailCollector"
    action="/success"
    data-netlify="true"
    netlify-honeypot="bot-field"
>
    <label class="hidden">
        Don't fill this out if you're human: <input name="bot-field" />
    </label>

    <label for="email" class="text-center">
        Subscribe for Updates
    </label>

    <div class="flex flex-col md:flex-row gap-2 items-center">
        <input name="email" id="email" type="text" placeholder="satoshin@gmx.com" class="w-72 py-1.5" />
        <button type="submit" class="font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover">Subscribe</button>
    </div>
</form>