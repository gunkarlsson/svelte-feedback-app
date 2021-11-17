<script>
  import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";

  // import { onMount, onDestroy } from "svelte";
  // let feedback = [];
  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));
  // onMount(() => {
  //   console.log("mounted");
  // });
  // onDestroy(() => {
  //   unsubscribe();
  // });
  //INSTEAD OF THIS ^ , we can use $FeedbackStore som nedan (handles subscribe/unsub etc)
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 400 }}>
    <FeedbackItem item={fb} />
  </div>
{/each}
