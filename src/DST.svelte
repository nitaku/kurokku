<script>
    export let date
    export let x
    export let y

    $: dst = date.dst() ? "LEG" : "SOL"
</script>

<text {x} {y} dy=".35em">{dst}</text>

<style>
    text {
        font-size: 40px;
        text-anchor: start;
        font-family: "DroidSansMono";
        font-weight: bold;
        text-transform: uppercase;
		fill: white;
    }
</style>