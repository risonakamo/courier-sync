<script lang="ts">
  import cx from "classnames";

  import "./MirrorDiffRow.less";

  export var item:MirrorItem;
  export var expanded:boolean;

  const topClass={
    modified:item.status=="modified",
    "error-modified":item.status=="errorModified",
    added:item.status=="added",
    removed:item.status=="removed",

    collapsed:!expanded
  };

  var itemIcon:string="/assets/temp_folder.png";

  $:if (!item.folder)
  {
    itemIcon="/assets/temp_file.png";
  }
</script>

<div class={cx("row item",topClass)}>
  <div class="col status-col"></div>
  <div class="col name-col">
    <div class="slot icon-slot folder-arrow">
      {#if item.folder}
        <img src="/assets/temp_folderarrow2.png" alt="folder-arrow" class="folder-arrow-icon"/>
      {/if}
    </div>
    <div class="slot icon-slot">
      <img src={itemIcon} alt="folder"/>
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