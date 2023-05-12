<script lang="ts">

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;

    function handleSubmit(event: Event) {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        isSubmitting = true;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData.toString())
        })
        .then(() => {
            form.reset();
            isSubmitting = false;
            showSuccess = true;
        })
        .catch(() => {
            form.reset();
            isSubmitting = false;
            showError = true;
        });
    }
</script>

<form
    method="POST"
    class="flex flex-col gap-2 items-center"
    name="emailCollector"
    id="emailCollector"
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
        <button on:submit={handleSubmit} type="submit" class="font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover">Subscribe</button>
    </div>

    {#if showSuccess}
        <div class="text-green-500">Thanks! You're now subscribed.</div>
    {/if}

    {#if showError}
        <div class="text-red-500">Sorry, something went wrong. Try again.</div>
    {/if}
</form>