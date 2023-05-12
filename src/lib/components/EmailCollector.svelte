<script lang="ts">

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

    function handleSubmit(event: Event) {
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        isSubmitting = true;
        errorMessage = "";
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData.toString()).toString()
        })
        .then(() => {
            form.reset();
            isSubmitting = false;
            showSuccess = true;
        })
        .catch((error) => {
            isSubmitting = false;
            showError = true;
            errorMessage = error;
        });
    }
</script>

<form
    method="POST"
    class="flex flex-col gap-2 items-center"
    name="Email Collector"
    netlify
    netlify-honeypot="bot-field"
    on:submit|preventDefault={handleSubmit}
>
    <input type="hidden" name="form-name" value="Email Collector" />
    <label class="hidden">
        Don't fill this out if you're human: <input name="bot-field" />
    </label>

    <label for="email" class="text-center">
        Subscribe for Updates
    </label>

    <div class="flex flex-col md:flex-row gap-2 items-center">
        <input name="email" id="email" type="text" placeholder="satoshin@gmx.com" class="w-72 py-1.5" />
        <button id="emailSubmitButton" type="submit" class="font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover">Subscribe</button>
    </div>

    {#if showSuccess}
        <div class="text-green-500">Thanks! You're now subscribed.</div>
    {/if}

    {#if showError}
        <div class="text-red-500">{errorMessage}</div>
    {/if}
</form>