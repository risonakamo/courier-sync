<script lang="ts">
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

  <div class="row item">
    <div class="col status-col"></div>
    <div class="col name-col">
      <div class="slot icon-slot">
        <img src="/assets/temp_folderarrow.png" alt="folder-arrow"/>
      </div>
      <div class="slot icon-slot">
        <img src="/assets/temp_folder.png" alt="folder"/>
      </div>
      <div class="slot name-slot">
        folder
      </div>
    </div>
    <div class="col size-col">
      <div class="slot divide-slot">200.7 kb</div>
      <div class="slot divide-slot"></div>
    </div>
    <div class="col modified-col">
      <div class="slot divide-slot">2021/07/15 20:30</div>
      <div class="slot divide-slot"></div>
    </div>
  </div>
</div>