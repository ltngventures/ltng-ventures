<script lang="ts">
    export let event:App.Event;
</script>

<div class="prose dark:prose-invert md:prose-lg max-w-full">
    <div class="flex flex-col md:flex-row gap-1 items-start md:gap-12">
        <div class="md:w-1/2">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
                {event.date}<br>
                {event.location}
            </p>
        </div>
        <a href={event.image1} class="md:w-1/4" target="_blank"><img src={event.image1} alt="Event Poster" class="bg-contain" /></a>
        <a href={event.image2} class="md:w-1/4" target="_blank"><img src={event.image2} alt="Event Poster" class="bg-contain" /></a>
    </div>
</div>