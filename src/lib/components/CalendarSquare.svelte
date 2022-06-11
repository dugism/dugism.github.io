<script lang="ts">
    export let visible: boolean;
    export let month: number = 0;
    export let day: number = 0;
    export let year: number = 0;
    //const today = new Date(year, month, day);
    //console.log(today.getUTCDate());
</script>

<button class="square">
    {visible ? day : ''}
</button>

<style>
    .square {
        background-color: #ff6666;
        padding: 1em;
        font-weight: bold;
        text-align: center;
    }
</style>
