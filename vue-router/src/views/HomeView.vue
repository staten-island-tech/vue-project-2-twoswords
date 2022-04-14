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
<Button @click="addItem(product)">Add</Button>
</Card>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
export default {
  name: 'HomeView',
  components: {
    Card, 
    Button
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
    name: "fdawdkfn",
    image: "",
    description: "dadwand",
},

]
    }
  },
  computed: {
        carts() {
            return this.$store.state.cart;
        },
    },
     methods: {
    addItem(product){
      this.$store.commit("add", product);
    },
       removeItem(cart) {
      this.$store.commit("remove", cart);
    },  
},
}
</script>

<style scoped>
.product{
 display: flex;
  justify-content: space-evenly;
}
</style>
