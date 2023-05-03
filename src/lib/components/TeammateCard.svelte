<script lang="ts">
    export let teammate: App.Teammate;
</script>

<div class="p-8 border hoverCard flex flex-row items-center gap-12">
    <img src={teammate.img} alt={teammate.name} class="rounded-full w-64 h-64" />
    <div class="flex flex-col">
        <h3 class="font-josefin-sans-italic uppercase text-3xl font-bold">{teammate.name}</h3>
        <p class="font-medium text-2xl">{teammate.title}</p>
        <p class="text-lg mt-6">{teammate.description}</p>
    </div>
</div>
