<script lang="ts">
  import cx from "classnames";

  import "./MirrorDiffRow.less";

  export var item:MirrorItem;
  export var expanded:boolean;

  const topClass={
    modified:item.status=="modified",
    "error-modified":item.status=="errorModified",
    added:item.status=="added"
  };
</script>

<div class={cx("row item",topClass)}>
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