<script>
    import Heading from '$lib/organisms/Heading.svelte'
    import Content from '$lib/organisms/ContentSemester.svelte'
    import SprintLink from '$lib/molecules/SprintLink.svelte'

    export let data 

    const semester = data
</script>

<div>
    <section>
        <Heading title="Semester" subtitle={semester.title} />
        <div>
            <Content {semester} />
            <section class="green-on-blue pilled">
                <h3>Sprints</h3>
                <ol>
                {#each semester.sprints as sprint}
                    <SprintLink {semester} {sprint} />
                {/each}
                </ol>
            </section>
        </div>
    </section>
</div>

<style> 
    ol {
        margin:0;
    }

    section {
        margin-top: 2rem;
        padding:1rem;
    }

    section h3 {
        margin:0 0 1rem 
    }

    section > div {
        margin:2rem -1rem;
    }
    section > div section {
        margin:0;
    }

    div {
        max-width: 40em;
    }
</style>