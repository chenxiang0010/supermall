import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutations-types";

export default {
  addToCart(context, payLoad) {
    //1.检查数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)
    //2.判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payLoad.count = 1
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}
