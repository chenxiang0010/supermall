import {debounce} from "@/common/tools";
import BackTop from "@/components/content/backtop/BackTop";

export const itemImgListener = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },//返回顶部
    listenShowBackTop(position) {
      this.isShowBackTop = (-position.y) > 1000
    }
  },
}
