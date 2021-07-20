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
    },
    {
      name:"ok modified item 1",
      folder:false,
      level:1,

      status:"modified",

      modifiedSizes:{
        mirror:"200.7 kb",
        base:"5.0 mb"
      },
      modifiedDates:{
        mirror:"2021/07/15 20:30",
        base:"2021/07/15 20:40"
      }
    },
    {
      name:"bad modified item 1",
      folder:false,
      level:1,

      status:"errorModified",

      modifiedSizes:{
        mirror:"200.7 kb",
        base:"5.0 mb"
      },
      modifiedDates:{
        mirror:"2021/07/15 20:30",
        base:"2021/07/15 20:00"
      }
    },
    {
      name:"added item 1",
      folder:false,
      level:1,

      status:"added",

      modifiedSizes:{
        mirror:"",
        base:"5.0 mb"
      },
      modifiedDates:{
        mirror:"",
        base:"2021/07/15 20:00"
      }
    },
    {
      name:"removed item",
      folder:false,
      level:1,

      status:"removed",

      modifiedSizes:{
        mirror:"10 kb",
        base:""
      },
      modifiedDates:{
        mirror:"2021/07/15 20:00",
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

  {#each sampleData as x}
    <MirrorDiffRow item={x} expanded={true}/>
  {/each}
</div>