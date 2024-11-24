<script>
  let { semester } = $props();
</script>

<section>
  <h3> Leerresultaat </h3>
  {@html semester.goal.html}
</section>

<section>
  <h3> Inhoud </h3>
  {@html semester.content.html}
</section>

<style>
  section {
    margin-bottom: 2rem;
    padding: 1rem;
  }

  h3 { margin: 0 0 0.5rem; }
</style>
