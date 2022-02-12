<script>
    export let date
    export let x
    export let y

    $: season = get_season(date)

    function get_season(d) {
        const seasons = Date.getSeasons(d.getFullYear())
        if(d < seasons[1])
            return 'inverno'
        else if(d < seasons[2])
            return 'primavera'
        else if(d < seasons[3])
            return 'estate'
        else if(d < seasons[4])
           return 'autunno'
        else
            return 'inverno'
    }
</script>

<text {x} {y} dy=".35em">{season}</text>

<style>
    text {
        font-size: 50px;
        text-anchor: middle;
        font-family: "DroidSansMono";
        font-weight: bold;
        text-transform: uppercase;
		fill: white;
    }
</style>