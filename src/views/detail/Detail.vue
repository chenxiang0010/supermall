<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailnavbar/DetailNavBar";
import DetailSwiper from "@/views/detail/detailSwiper/DetailSwiper";
import DetailBaseInfo from "@/views/detail/detailbaseinfo/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/detialshopinfo/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/detailgoodsinfo/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/detailparamInfo/DetailParamInfo";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail, Goods, Shop, GoodsParam} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  created() {
    //1.传入商品iid
    this.iid = this.$route.params.iid
    //2.根据iid请求数据
    getDetail(this.iid).then(res => {
      console.log(res);
      //1.获取顶部轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //4.详情页数据
      this.detailInfo = data.detailInfo
      //5.参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
}

.content {
  height: calc(100vh - 44px);
}

.detail-navbar {
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>
