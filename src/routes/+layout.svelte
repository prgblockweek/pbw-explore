<script>
    import { page } from '$app/stores';
    import "../app.css";
</script>

<div class="mx-6 xl:mx-0">
    <div class="max-w-7xl mx-auto pt-10">
        <h1 class="text-5xl uppercase font-bold text-pbw-red"><a href="/{$page.params.entry}">Prague Blockchain Week 2023</a></h1>
        <div class="text-4xl text-pbw-yellow">June 2-11, 2023</div>
    </div>
</div>

<div class="mb-24">
    <slot />
</div>