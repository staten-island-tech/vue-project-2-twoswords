<template>
  <div class="home">

<div class="product">
  <Card
v-for="product in products"
:key="product.name"
:name="product.name"
:image="product.image"
:description="product.description"
>
</Card>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
  },
  data: () => {
    return {
      products: [
{
    name: "fnwfwekfn",
    image: "",
    description: "dawjdnand",
},
{
    name: "fnwfwekfn",
    image: "",
    description: "dawjdnand",
},
{
    name: "fnwfwekfn",
    image: "",
    description: "dawjdnand",
},
]
    }
  }
}
</script>

<style scoped>
.product{
 display: flex;
  justify-content: space-evenly;
}
</style>
