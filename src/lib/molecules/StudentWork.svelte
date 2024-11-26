<script>
  import Heading from "$lib/components/Heading.svelte";
  import IconStar from "$lib/atoms/Star.svelte";
  let { stargazer = $bindable(false) } = $props();
  if (tasks) { tasks.forEach((task) => { if (!stargazer && task.forks && task.forks.length > 0) { stargazer = true; } });}
</script>

<section class="showcase {stargazer ? 'stargazer' : ''}">
  <Heading title="Studentenwerk" />
  <ul>
    {#each tasks as task}
      {#if task.forks && task.forks.length > 0}
        {#each task.forks as fork}
          <li>
            <div class="repo">
              <span class="repo-title">{fork.title}</span>
              <IconStar stargazerCount={fork.stargazerCount} />
              <div class="links">
                <a href={fork.url} target="_blank" rel="noreferrer">Code</a>
                {#if fork.homepageUrl}
                  <a href={fork.homepageUrl} target="_blank" rel="noreferrer"> Website </a>
                {/if}
              </div>
            </div>
            <strong class="profile">
              <img src={fork.avatarUrl} alt="" class="avatar"/>
              <a href={fork.ownerUrl} target="_blank" rel="noreferrer"> @{fork.owner} </a>
            </strong>
          </li>
        {/each}
      {/if}
    {/each}
  </ul>
</section>

<style>
  section.showcase { display: block; }

  section.showcase ul {
    display: flex;
    gap: 1rem;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
    overflow: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 1rem;
  }

  section.showcase ul li {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: var(--rounded);
    margin-bottom: 0;
    position: relative;
    width: 300px;
    min-width: 300px;
    scroll-snap-align: center;
    gap: 0.25rem;
  }

  section.stargazer { display: block; }

  .repo { overflow: hidden; }

  .repo a, .repo span { display: block; }

  .repo-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .links {
    display: inline-flex;
    gap: 0.2em;
    text-transform: uppercase;
    flex-wrap: wrap;
  }

  .links a {
    border: 1px solid currentColor;
    border-radius: 1rem;
    padding: 0.2em 0.4em;
    line-height: 1;
    text-decoration: none;
    font-size: 0.6em;
  }

  .links a:hover {
    background-color: var(--lavender);
    color: var(--blueberry);
  }

  .profile {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    gap: 0.5rem;
    padding: 0.5rem 0;
    margin: 0;
  }

  .profile a {
    text-decoration: none;
    font-size: 0.7em;
    display: block;
    padding: 0;
  }

  .profile::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    border-top: 1px solid currentColor;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 0;
  }
</style>
