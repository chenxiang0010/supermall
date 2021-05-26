<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"><img :src="item.image" alt="" @load="SwiperImgLoad"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperItem} from "@/components/common/swiper"

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    SwiperImgLoad() {
      if (!this.isLoad) {
        this.$emit('SwiperImgLoad')
        this.isLoad = true
      }
    }
  },
}
</script>

<style scoped>

</style>
