<script lang="ts">
    export let testimonials: App.Testimonial[];
    export let direction: string = 'Right';

    const klass = `testimonials${direction}`;
</script>


<div class="carousel flex flex-nowrap flex-row items-center overflow-x-scroll w-screen">
    <div class="{klass} flex flex-nowrap flex-row gap-32 items-center">
        {#each testimonials as testimonial, i}
            <div class="flex shrink-0 grow-0 flex-row gap-6 items-center ">
                <img src={testimonial.img} alt="testimonial{i}" class="w-24 md:w-40 h-24 md:h-40 rounded-full shadow-lg" />
                <div class="prose dark:prose-invert md:prose-lg w-64 md:w-96">
                    <p>&ldquo;{testimonial.blurb}&rdquo;</p>
                    <p class="text-base">&ndash; {testimonial.nameAndRole}</p>
                </div>
            </div>
        {/each}
        {#each testimonials as testimonial, i}
            <div class="flex shrink-0 grow-0 flex-row gap-6 items-center">
                <img src={testimonial.img} alt="testimonial{i}" class="w-24 md:w-40 h-24 md:h-40 rounded-full shadow-lg" />
                <div class="prose dark:prose-invert md:prose-lg w-64 md:w-96">
                    <p>&ldquo;{testimonial.blurb}&rdquo;</p>
                    <p class="text-base">&ndash; {testimonial.nameAndRole}</p>
                </div>
            </div>
        {/each}
    </div>
</div>