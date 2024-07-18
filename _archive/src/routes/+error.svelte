<script lang="ts">
	import { page } from '$app/stores';

</script>

<div class="mx-auto my-8 text-center">
    <h1 class="text-3xl font-bold">{$page.status}</h1>
    <h2 class="text-xl">{$page.error?.message}</h2>
</div>