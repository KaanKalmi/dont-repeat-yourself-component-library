<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import Content from "$lib/organisms/ContentSemester.svelte";
  import SprintLink from "$lib/molecules/SprintLink.svelte";

  let { data } = $props();

  const semester = data;
</script>

<div>
  <Heading title="Semester" subtitle={semester.title}/>
</div>
<section>
  <div class="content-container">
    <Content {semester} />
  </div>
    <article>
      <h3>Sprints</h3>
      <ol>
        {#each semester.sprints as sprint}
          <SprintLink {semester} {sprint}/>
        {/each}
      </ol>
    </article>
</section>

<style>
  div{ padding-top: 3rem; }

  section{
    display: flex;
    flex-direction: column;

    .content-container{ width: 100%; }
    article{
      h3{ margin-left: 2em; }
      ol{ width: 90%; }
    }
  }

  @media (750px <=width){
    section{
      display: flex;
      flex-direction: column;

      .content-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      article{
        h3{ margin-left: 2em; }
      }
    }
  }

  @media (1024px <= width){
    section{
      display: grid;
      grid-template-areas: "content sprints";
      grid-template-columns: 2fr 1fr;

      .content-container{ grid-area: content; }
      article{
        h3{ margin-left: 2em; }
        ol{ grid-area: sprints; }
      }
    }
  }
</style>