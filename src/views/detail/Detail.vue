<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar" @titleClick="titleClick" ref="Nav"></detail-nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childcomponents/DetailNavBar";
import DetailSwiper from "@/views/detail/childcomponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childcomponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childcomponents/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childcomponents/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childcomponents/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childcomponents/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childcomponents/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";
import {itemImgListener, backTopMixin} from "@/common/mixin";
import {debounce} from "@/common/tools";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  mixins: [itemImgListener, backTopMixin],
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created() {
    //1.传入商品iid
    this.iid = this.$route.params.iid
    //2.根据iid请求数据
    getDetail(this.iid).then(res => {
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
      //6.评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    //3.推荐数据请求
    getRecommend().then(res => {
      this.recommend = res.data.list
    })
    //4.getThemeTopY
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    })
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position) {
      const positionY = -position.y
      const length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.Nav.currentIndex = this.currentIndex
        }
      }
      this.listenShowBackTop(position)
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid

      this.$store.dispatch('addToCart', product)
      // this.$store.commit('addToCart', product)
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
  height: calc(100vh - 44px - 49px);
}

.detail-navbar {
  position: relative;
  z-index: 9;
  background: #fff;
}
</style>
