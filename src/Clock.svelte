<script>
    export let date
    export let tick
    export let x
    export let y
    const pad_time = (i) => i < 10 ? "0"+i : i
</script>

<text {x} {y} dy=".35em">{ pad_time(date.getHours()) + (tick ? ':' : ' ') +  pad_time(date.getMinutes())}</text>

<style>
    text {
        font-size: 400px;
        text-anchor: middle;
        font-family: "DroidSansMono";
        font-weight: bold;
		fill: white;
    }
</style>