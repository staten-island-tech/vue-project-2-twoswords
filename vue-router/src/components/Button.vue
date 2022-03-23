<template>
    <button class="button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
}
</script>

<style scoped>
button{
  width: 8rem;
  height: 3rem;
  background-color: aquamarine;
  font-size: 1rem; 
}
</style>