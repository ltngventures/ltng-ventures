<script lang="ts">

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

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
    <title>Contact Us | Lightning Ventures</title>
    <meta name="description" content="Have a general enquiry? Get in touch with the team at Lightning Ventures." />
</svelte:head>

<div class="mb-16 pt-32 pb-12 max-w-6xl mx-auto px-8 prose prose-invert md:prose-xl">
    <h2 class="pageHeader gradientHeader">
        Get in touch
    </h2>

    <div>
        <form
            name="Contact Us"
            method="POST"
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
            netlify
            netlify-honeypot="bot-field"
            on:submit|preventDefault={handleSubmit}
        >
            <input type="hidden" name="form-name" value="Contact Us" />
            <label class="hidden">
                Don't fill this out if you're human: <input name="bot-field" />
            </label>
            <fieldset class="formGroup">
                <label for="name">Full name *</label>
                <input type="text" name="name" id="name" required/>
            </fieldset>
            <fieldset class="formGroup">
                <label for="email">Email address *</label>
                <input type="text" name="email" id="email" required/>
            </fieldset>
            <fieldset class="formGroup md:col-span-2">
                <label for="role">What's your question? *</label>
                <textarea name="question" id="question" required/>
            </fieldset>
            <fieldset class="formGroup md:col-span-2">
                <button type="submit" class="w-1/3 mx-auto font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover" disabled={isSubmitting}>Submit</button>
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
