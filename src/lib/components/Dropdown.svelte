<script lang="ts">
    export let choices: string[];
    export let selected: string = 'Please select';
    let dropdownDisplay = 'grid';
</script>

<div
    class="dropdown"
    on:mouseenter={() => {
        dropdownDisplay = 'grid';
    }}
>
    <button class="dropdown-button">{selected}</button>
    <div class="dropdown-choices" style="--dropdownDisplay: {dropdownDisplay}">
        {#each choices as choice}
            <button
                on:click={() => {
                    selected = choice;
                    dropdownDisplay = 'none';
                }}
            >
                {choice}
            </button>
        {/each}
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-button {
        background-color: #04aa6d;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }

    .dropdown-choices {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-choices button {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .dropdown-choices button:hover {
        background-color: #ddd;
    }

    .dropdown:hover .dropdown-choices {
        display: var(--dropdownDisplay);
    }

    .dropdown:hover .dropdown-button {
        background-color: #3e8e41;
    }
</style>
