<script lang="ts">
  import MirrorDiffRow from "./MirrorDiffRow/MirrorDiffRow.svelte";

  import "./MirrorDiffTable.less";
</script>

<div class="mirror-diff-table">
  <div class="row header">
    <div class="col status-col"></div>
    <div class="col name-col">
      <div class="slot icon-slot"></div>
      <div class="slot name-slot">Name</div>
    </div>
    <div class="col size-col">Size</div>
    <div class="col modified-col">Modified</div>
  </div>

  <MirrorDiffRow/>
</div>