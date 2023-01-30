<script>
    export let link;
    export let count;
    export let text;
</script>

<a href={link} class="py-4 px-4 grow border border-2 border-pbw-yellow rounded-xl hover:bg-pbw-yellow/50 text-center text-white text-xl lg:text-2xl"><span class="">{count}</span> {text}</a>