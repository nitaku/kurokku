<script>
    export let date
    export let x
    export let y

    const DAYS = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab']
    const MONTHS = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic']
</script>

<text {x} {y} dy=".35em">{DAYS[date.getDay()]+' '+date.getDate()+' '+MONTHS[date.getMonth()]+' '+date.getFullYear()}</text>

<style>
    text {
        font-size: 100px;
        text-anchor: middle;
        font-family: "DroidSansMono";
        font-weight: bold;
		fill: white;
    }
</style>