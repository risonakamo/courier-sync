<script lang="ts">
  import MirrorDiffRow from "./MirrorDiffRow/MirrorDiffRow.svelte";

  import "./MirrorDiffTable.less";

  const sampleData:MirrorItem[]=[
    {
      name:"folder",
      folder:true,
      level:0,

      status:"normal",

      modifiedSizes:{
        mirror:"200.7 kb",
        base:""
      },
      modifiedDates:{
        mirror:"2021/07/15 20:30",
        base:""
      }
    }
  ];
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

  <MirrorDiffRow item={sampleData[0]} expanded={true}/>
</div>