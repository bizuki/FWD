<script lang="ts">
    import Time from "svelte-time";
    import { fetchComicPage } from '../api/fetchComics'
    import type { ComicsInfo } from '../types/ComicsInfo';
    
    export let email: string; 

    let comicsInfo: Promise<ComicsInfo> = fetchComicPage(email);

    function reroll(_: MouseEvent) {
        comicsInfo = fetchComicPage(email);
    }

    function formDate(info: ComicsInfo) {
        return new Date(
            Number(info.year),
            Number(info.month) - 1,
            Number(info.day)
        );
    }

</script>

<div class="comics">
    {#await comicsInfo}
        Loading comics. Please wait a little......
    {:then comicsInfo} 
        <img src={comicsInfo.img} alt={comicsInfo.alt}>
        <div class="comics-info">
            <div>
                <h2>Info about this comics</h2>
                <ul>
                    <li>Title: <i>{comicsInfo.title}</i></li>
                    <li>Upload time: <Time timestamp={formDate(comicsInfo)} format="YYYY/MM/DD"/></li>
                </ul>
            </div>
            <button class="reroll-button" type="button" on:click={reroll}>Reroll🎲?</button>
        </div>
    {:catch error}
        <p style="color: yellow">Something went wrong, when fetching comics page: "{error.message}"</p>
    {/await}
</div>

<style>
    .comics {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-bottom: 15px;
    }

    .reroll-button {
        background-color: #73ddbd;
        border: none;
        color: #03001C;
        padding: 15px 32px;
        max-width: 200px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        align-self: center;
        font-size: 16px;
    }

    .reroll-button:active, .reroll-button:hover {
        background-color: #83ddbd;
    }

    .comics-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>
