<script lang="ts">
    import CalendarSquare from './CalendarSquare.svelte';
    import Dropdown from './Dropdown.svelte';

    /**
     * List of months for dropdown
     */
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    /**
     * List of weekdays for icons
     */
    let weekdayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    /**
     * Current date
     */
    let now = new Date();
    /**
     * Month selected by user
     */
    let selectedMonth = months[now.getMonth()];
    /**
     * Year selected by user
     */
    let selectedYear = now.getFullYear();

    /**
     * From https://www.thatsoftwaredude.com/content/6396/coding-a-calendar-in-javascript
     *
     * Function to return number of days in specified month
     * @param month
     * @param year
     */
    function daysInMonth(month: number, year: number) {
        let d = new Date(year, month + 1, 0);
        return d.getDate();
    }

    /**
     * List of days/blank squares for calendar
     */
    let days: number[] = [];

    // Reactively reset days when selected month or year changes
    $: selectedMonth, selectedYear, (days = []);

    // For each blank square preceding first day, add a day with index -1
    $: days.push(...new Array(1).fill(-1));

    // For each day in the month, add the day number to days
    $: for (
        let i = 0;
        i < daysInMonth(months.indexOf(selectedMonth), selectedYear);
        i++
    ) {
        days.push(i + 1);
    }

    $: console.log(days);
</script>

<div class="calendar-container">
    <div class="calendar">
        <div class="top-menu">
            <Dropdown choices={months} bind:selected={selectedMonth} />
        </div>
        <div class="calendar-contents">
            {#each weekdayNames as weekdayName}
                <div class="day-label">{weekdayName}</div>
            {/each}
            {#each days as day}
                {#if day === -1}
                    <CalendarSquare visible={false} />
                {:else}
                    <CalendarSquare
                        visible={true}
                        month={months.indexOf(selectedMonth)}
                        {day}
                        year={selectedYear}
                    />
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .calendar-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
    }

    .top-menu {
        display: flex;
    }

    .calendar-contents {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
        grid-template-rows: auto auto auto auto auto auto auto;
    }

    .day-label {
        background-color: #006666;
        height: 1em;
        width: 2.5em;
        padding: 1em;
        font-weight: bold;
        text-align: center;
    }
</style>
