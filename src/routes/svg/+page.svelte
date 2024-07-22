<script lang="ts">
	
  let examples = ["1"];
</script>

<div class="mt-20">
  
  {#each examples as example}
  <a class="p-4 px-8 rounded text-3xl bg-green-100" href="svg/{example}">{example}</a>
  {/each}
</div>

<style>

</style>
