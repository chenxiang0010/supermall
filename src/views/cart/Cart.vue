<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childcomponents/CartList";

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
}

.cart-bar {
  background: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>
