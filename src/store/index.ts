import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      items: []
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
    categoryId: localStorage.getItem('categoryId') ?? '',
    subCategoryId: ''
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart') ?? '')
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }

      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token') ?? ''
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }


      if (localStorage.getItem('categoryId')) {
        state.categoryId = localStorage.getItem('categoryId') ?? ''
      } else {
        localStorage.setItem('categoryId', state.categoryId)
      }

      if (localStorage.getItem('subCategoryId')) {
        state.subCategoryId = localStorage.getItem('subCategoryId') ?? ''
      } else {
        localStorage.setItem('subCategoryId', state.subCategoryId)
      }

    },
    addToCart(state: any, item: any) {
      const exists: any = state.cart.items.filter((i: { product: { id: any } }) => {
        return i.product.id === item.product.id
      })

      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        state.cart.items.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    setCategoryId(state, categoryId) {
      state.categoryId = categoryId
    },
    setSubCategoryId(state, subCategoryId) {
      state.subCategoryId = subCategoryId
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    clearCart(state) {
      state.cart = { items: [] }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },


  },
  actions: {
  },
  modules: {
  }
})

