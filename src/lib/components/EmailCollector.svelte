<script lang="ts">
    import { formattedDateForForms } from "$lib/utils/helpers";

    let isSubmitting = false;
    let showSuccess = false;
    let showError = false;
    let errorMessage = "";

    function handleSubmit(event: Event) {
        isSubmitting = true;
        errorMessage = "";

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData)
        payload.formName = "Email collector";
        payload.submissionTime = formattedDateForForms();
        const jsonData = JSON.stringify(payload);

        fetch("https://hooks.zapier.com/hooks/catch/11343292/3d7luii/", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: jsonData
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

<form
    method="POST"
    class="flex flex-col gap-2 items-center"
    name="Email Collector"
    on:submit|preventDefault={handleSubmit}
>
    <div class="flex flex-col md:flex-row gap-2 items-center">
        <input name="email" id="email" type="text" placeholder="Subscribe for email updates..." class="w-72 py-1.5" />
        <button id="emailSubmitButton" type="submit" class="font-semibold font-josefin-sans-italic uppercase text-ltngYellow bg-ltngWhite/20 hover" disabled={isSubmitting}>Subscribe</button>
    </div>
    {#if showSuccess}
        <div class="text-green-500">Thanks! You're now subscribed.</div>
    {/if}

    {#if showError}
        <div class="text-red-500">{errorMessage}</div>
    {/if}
</form>