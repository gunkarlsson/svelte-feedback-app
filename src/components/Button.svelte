<script>
  export let style = "primary";
  export let type = "button";
  export let disabled = false;
</script>

<button {type} {disabled} class={style}>
  <slot />
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: inherit;
  }
  .primary {
    background-color: #202142;
  }
  .secondary {
    background: #ff6a95;
  }
  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
  button:disabled {
    background-color: #d5d5d5;
    color: rgb(77, 77, 77);
    cursor: auto;
  }
  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
</style>
