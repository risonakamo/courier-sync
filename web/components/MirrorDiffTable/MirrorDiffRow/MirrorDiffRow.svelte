<script lang="ts">
  export var item:MirrorItem;
  export var expanded:boolean;
</script>

<div class="row item">
  <div class="col status-col"></div>
  <div class="col name-col">
    <div class="slot icon-slot folder-arrow">
      <img src="/assets/temp_folderarrow2.png" alt="folder-arrow"/>
    </div>
    <div class="slot icon-slot">
      <img src="/assets/temp_folder.png" alt="folder"/>
    </div>
    <div class="slot name-slot">{item.name}</div>
  </div>
  <div class="col size-col">
    <div class="slot divide-slot">{item.modifiedSizes.mirror}</div>
    <div class="slot divide-slot">{item.modifiedSizes.base}</div>
  </div>
  <div class="col modified-col">
    <div class="slot divide-slot">{item.modifiedDates.mirror}</div>
    <div class="slot divide-slot">{item.modifiedDates.base}</div>
  </div>
</div>