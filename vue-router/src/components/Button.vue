<template>
    <button class="button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
/* eslint-disable */
export default {
    name: "Button",
}
</script>

<style scoped>
button{
  width: 14rem;
  height: 5rem;
  background-color: aquamarine;
  font-size: 2rem; 
}
</style>