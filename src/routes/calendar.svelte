<script lang="ts">
    import { onMount } from 'svelte';
    import Sun from '$lib/components/Sun.svelte';
    import Calendar from '$lib/components/Calendar.svelte';
    //import * as SunCalc from '$lib/modules/suncalc.mjs';
    console.log('hello world');
    let date = new Date();
    console.log(date.getUTCDay());

    let lat: number;
    let lng: number;

    function getPosition(
        options?: PositionOptions,
    ): Promise<GeolocationPosition> {
        return new Promise((resolve, reject) =>
            window.navigator.geolocation.getCurrentPosition(
                resolve,
                reject,
                options,
            ),
        );
    }

    async function coords() {
        onMount(async () => {
            const SunCalc = await import('$lib/modules/suncalc.mjs');
            const position = await getPosition();
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log(typeof SunCalc, Object.keys(SunCalc));
            console.log(SunCalc.getTimes(new Date(), lat, lng, 0));
        });
    }

    if (typeof window !== 'undefined') {
        coords();
    }
</script>

<svelte:head>
    <meta name="twitter:card" content="summary" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Dugism" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="https://dugism.github.io/" />

    <title>Dugism</title>
    <link rel="stylesheet" href="main.css" />
    <link rel="icon" href="../favicon.ico" />
</svelte:head>

<Sun />

<Calendar />

<style>
    :root {
        background-color: rgb(31, 31, 31);
        color: rgb(222, 227, 245);
    }
</style>
