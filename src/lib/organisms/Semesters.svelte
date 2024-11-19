<script>
  import Semester from "$lib/molecules/Semester.svelte";
  import { onMount } from "svelte";

  export let semesters;
  export let subtitle;

  let jsEnabled = false;

  function toggleDates({ target }) {
    if (target.nodeName == "INPUT") {
      document.body.classList.toggle("expand");
    }
  }

  onMount(() => {
    jsEnabled = true;
    document.body.classList.remove("expand");
  });
</script>

<section class="semesters-sprints">
  <h2>{subtitle}</h2>

  {#if jsEnabled}
    <article class="agenda-container">
      <input
        type="checkbox"
        id="show-hide-dates"
        class="pacman"
        on:change={toggleDates}
      />
      <label for="show-hide-dates">
        <span> Show/hide full agenda </span>
      </label>
    </article>
  {/if}

  <div class="scroll-horo">
    {#each semesters as semester, i}
      <Semester {semester} {i} />
    {/each}
  </div>
</section>

<div class="fixed-bar"></div>

<style>
  @keyframes waka_waka_waka {
    to {
      transform: translate(-50%, var(--translation)) rotate(var(--rotation));
    }
  }

  .agenda-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .pacman {
    appearance: none;
    position: relative;
    font-size: 1.5em;
    width: 3em;
    margin-left: 3em;
    aspect-ratio: 3;
    border: max(1px, 0.05em) solid #fff;
    border-radius: 2em;
    box-sizing: content-box;
    background:
      linear-gradient(90deg, var(--lavender) 6em, #1230 0) -5.5em 0 / 9em 100%,
      radial-gradient(circle, #fff 0.075em, #fff0 0.08em) 50% 0 / 0.4em 100%,
      var(--lavender);
    transition: background-position calc(var(--speed) * 4) linear;

    --waka-speed: 0.2s;
    --speed: 0.5s;
  }

  .pacman::before, .pacman::after {
    --rotation: 30deg;
    --translation: -100%;
    content: "";
    position: absolute;
    width: 0.8em;
    height: 0.4em;
    background: yellow;
    border-radius: 50% / 100% 100% 0 0;
    top: 50%;
    left: 0.5em;
    transform-origin: 50% 100%;
    transform: translate(-50%, var(--translation)) rotate(0);
    transition: left calc(var(--speed)) linear;
    animation: waka_waka_waka var(--waka-speed) alternate infinite;
  }

  .pacman::after {
    --rotation: -30deg;
    --translation: 0;
    border-radius: 50% / 0 0 100% 100%;
    transform-origin: 50% 0;
  }

  .pacman:checked {
    background-position:
      2.5em 0,
      50% 0;
  }

  .pacman:checked::before, .pacman:checked::after {
    --rotation: -30deg;
    left: calc(100% - 0.5em);
  }

  .pacman:checked::after {
    --rotation: 30deg;
  }

  section {
    position: relative;
    width: 100%;
    padding: 0;
    background: var(--grey);
    border-radius: 0 0 15px 15px;
    color: var(--blueberry);
  }

  .fixed-bar {
    width: 100%;
    height: 0.75em;
    background: var(--lavender);
    position: sticky;
    bottom: 0;
  }

  .fixed-bar::before, .fixed-bar::after {
    content: "";
    position: absolute;
    width: 1.5em;
    aspect-ratio: 1;
    left: 0;
    border-radius: 0 0 50% 0;
    bottom: 0.75em;
    box-shadow: 0.5em 0.5em 0 0 var(--lavender);
    transform: rotate(90deg);
  }

  .fixed-bar::after {
    right: 0;
    left: unset;
    transform: unset;
  }

  h2 {
    margin: 0;
    padding: 3rem 1.25rem 2rem;
  }

  .scroll-horo {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    padding: 1rem 2rem 2rem;
  }

  label span {
    color: var(--blueberry);
    font-size: 0.7rem;
    font-weight: 600;
    margin-left: 0.8rem;
  }

  @media (1025px <= width) { 
  h2 {
    margin: 0;
    padding: 3rem 3.25rem 2rem;
  }
}
</style>
