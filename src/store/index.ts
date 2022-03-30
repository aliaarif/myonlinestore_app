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
    brandId: localStorage.getItem('brandId') ?? 0,
    categoryId: localStorage.getItem('categoryId') ?? 0,
    subCategoryId: localStorage.getItem('subCategoryId') ?? 0,

    filters: {
      brandId: localStorage.getItem('brandId') ?? 0,
      categoryId: localStorage.getItem('categoryId') ?? 0,
      subCategoryId: localStorage.getItem('subCategoryId') ?? 0,
    }
  },
  mutations: {
    initializeStore(state: any) {
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


      if (localStorage.getItem('brandId')) {
        state.brandId = localStorage.getItem('brandId') ?? 0
        state.filters.brandId = localStorage.getItem('brandId') ?? 0
        state.filters.categoryId = localStorage.getItem('categoryId') ?? 0
        state.filters.subCategoryId = localStorage.getItem('subCategoryId') ?? 0
      } else {
        localStorage.setItem('brandId', state.brandId)
        localStorage.setItem('brandId', state.brandId)
        localStorage.setItem('categoryId', state.categoryId)
        localStorage.setItem('subCategoryId', state.subCategoryId)
      }


      if (localStorage.getItem('subCategoryId')) {
        state.categoryId = localStorage.getItem('categoryId') ?? 0
        state.filters.brandId = localStorage.getItem('brandId') ?? 0
        state.filters.categoryId = localStorage.getItem('categoryId') ?? 0
        state.filters.subCategoryId = localStorage.getItem('subCategoryId') ?? 0
      } else {
        localStorage.setItem('categoryId', state.categoryId)
        localStorage.setItem('brandId', state.brandId)
        localStorage.setItem('categoryId', state.categoryId)
        localStorage.setItem('subCategoryId', state.subCategoryId)
      }


      if (localStorage.getItem('subCategoryId')) {
        state.subCategoryId = localStorage.getItem('subCategoryId') ?? 0
        state.filters.brandId = localStorage.getItem('brandId') ?? 0
        state.filters.categoryId = localStorage.getItem('categoryId') ?? 0
        state.filters.subCategoryId = localStorage.getItem('subCategoryId') ?? 0
      } else {
        localStorage.setItem('subCategoryId', state.subCategoryId)
        localStorage.setItem('brandId', state.brandId)
        localStorage.setItem('categoryId', state.categoryId)
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
    setBrandId(state, brandId) {
      state.brandId = brandId
    },
    setCategoryId(state, categoryId) {
      state.categoryId = categoryId
    },
    setSubCategoryId(state, subCategoryId) {
      state.subCategoryId = subCategoryId
    },
    setFilters(state, filters) {
      state.filters.brandId = filters.brandId
      state.filters.categoryId = filters.categoryId
      state.filters.subCategoryId = filters.subCategoryId
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

