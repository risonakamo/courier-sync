<script lang="ts">
  import "./TestThing.less";
  import cx from "classnames";

  export var value:string;
  export var reded:boolean;

  const topClass={
    red:reded
  };
</script>

<main>
  <p class={cx("test-thing",topClass)}>
    hello {value}
  </p>
</main>