<script lang="ts">
  import TestThing from "./components/TestThing/TestThing.svelte";

  export var thing:string;

  console.log("heello",thing);
</script>

<main>
  <p>asdasd</p>
  <TestThing value="hey" reded={false}/>
</main>