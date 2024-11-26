<script>
  import Heading from "$lib/organisms/Heading.svelte";
  import Content from "$lib/organisms/ContentSemester.svelte";
  import SprintLink from "$lib/molecules/SprintLink.svelte";

  let { data } = $props();

  const semester = data;
</script>

<section>
  <Heading title="Semester" subtitle={semester.title} />
  <div>
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
  section{
    padding-block: 3rem;
      
    div{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

      ol{
        width: 40%;
      }
    }

</style>