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
  background-color: #000000;
  font-size: 2rem; 
  margin-left: 3rem;
}
</style>