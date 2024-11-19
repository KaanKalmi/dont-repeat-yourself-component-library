<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import { prettyDate, longDate } from "$lib/utils/date.js";

  export let weekPlans;

  const checkKeywords = (content) => {
    const strings = [
      "sprintplanning",
      "kickoff",
      "workshop",
      "opdrachtgever",
      "code review",
      "retrospect ",
      "wrap-up",
      "review",
    ];
    let newString = "";
    if (content) {
      const splitted = content.split("<p>");
      splitted.forEach((paragraph) => {
        let toReplace = strings.filter((s) => {
          if (paragraph.toLowerCase().includes(s)) {
            return s
              .replace("we ♥ web", "we love web", s)
              .replaceAll(" ", "-", s);
          }
        });
        let classes = toReplace.join(" ");
        paragraph = "<p>" + paragraph;
        newString += paragraph.replace(
          "<p>",
          `<p class="${classes}">`,
          paragraph
        );
      });
    }

    return newString;
  };

  const plans = [];
  weekPlans.forEach((plan) => {
    let startDate = new Date(plan["mondayDate"]);
    const week = [
      {
        date: startDate,
        weekDay: "Maandag",
        content: checkKeywords(plan["monday"].html),
      },
      {
        date: addDays(startDate, 1),
        weekDay: "Dinsdag",
        content: checkKeywords(plan["tuesday"].html),
      },
      {
        date: addDays(startDate, 2),
        weekDay: "Woensdag",
        content: checkKeywords(plan["wednesday"].html),
      },
      {
        date: addDays(startDate, 3),
        weekDay: "Donderdag",
        content: checkKeywords(plan["thursday"].html),
      },
      {
        date: addDays(startDate, 4),
        weekDay: "Vrijdag",
        content: checkKeywords(plan["friday"].html),
      },
    ];
    plans.push(week);
  });

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);

    return result;
  }
</script>

{#if weekPlans && weekPlans.length > 0}
  <section>
    <Heading title="Sprint planning" />
    {#each plans as week, i}
      <div class="week-container">
        <h3>Week {i + 1}</h3>
        <div class="week">
          {#each week as day, i}
            <div class="day day--{day.weekDay}">
              <h4 class="weekday">
                {day.weekDay} <span>{prettyDate(day.date)}</span>
              </h4>
              <div data-label="{day.weekDay} {prettyDate(day.date)}">
                {@html day.content}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>
{/if}

<style>
  section {
    padding: 2em;
    margin: 1rem 0 0;
    background: var(--grey);
    border-radius: 10px;
  }

  section > :global(h2) {
    padding-left: 1rem;
  }

  .week-container {
    padding: 0 1rem 2rem;
  }

  .week + .week {
    margin-top: 2rem;
  }

  h3 {
    font-weight: normal;
    margin-top: 0;
  }

  .week {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  .day {
    border: 1px solid var(--turquoise);
    border-radius: var(--rounded);
    padding: 1rem;
    background: var(--white);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .weekday {
    font-size: 1.125rem;
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    color: var(--blueberry);
  }

  .day div {
    margin-left: 0;
  }

  .day :global(p) {
    --border: var(--white);
    position: relative;
    font-size: 1rem;
    padding-left: 1rem;
  }

  .day :global(p::before) {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 1rem;
    width: 4px;
    height: 100%;
    background-color: var(--border);
    opacity: 1;
  }

  .day :global(.sprintplanning) {
    --border: var(--lavender);
  }

  .day :global(.workshop) {
    --border: var(--turquoise);
  }

  .day :global(.opdrachtgever),
  .day :global(.code-review),
  .day :global(.review),
  .day :global(.retrospect),
  .day :global(.kickoff),
  .day :global(.wrap-up) {
    --border: var(--call-to-action);
  }

  @media (min-width: 40rem) {
    section > :global(h2) {
      padding-left: 1rem;
    }

    .day div {
      margin-left: 0;
    }
  }

  @media (min-width: 50rem) {
    section > :global(h2) {
      padding-left: 2rem;
    }

    section {
      margin: 1rem -1rem;
    }
  }

  @media (min-width: 47rem) {
    .week-container {
      overflow-x: auto;
      padding: 2rem 1rem 2rem;
    }

    .week {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }

    h3 {
      margin-left: 1rem;
    }

    .day {
      aspect-ratio: 1;
      border-radius: var(--rounded);
      border: 2px solid var(--turquoise);
      width: max(270px, calc(100vw / 24 * 4));
      padding: 1rem;
      box-shadow: -4px 4px var(--lavender);
    }

    .day + .day {
      margin-top: 0;
    }

    .weekday {
      text-align: right;
      margin: 0 0 1rem;
      border: none;
    }
  }

  @media (min-width: 90rem) {
    section > :global(h2) {
      padding-left: 1rem;
    }

    section {
      margin: 2rem 0;
    }

    .week-container {
      overflow: visible;
      padding: 1rem 0 0;
    }

    .week-container + .week-container {
      padding: 2rem 0 0;
    }

    .day {
      width: calc((var(--max-width) - 4rem) / 5);
    }
  }
</style>
