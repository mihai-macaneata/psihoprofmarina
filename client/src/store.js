import Vue from 'vue'
import Vuex from 'vuex'
import {
  getArticles,
  getSiteTitle,
  getCurrentArticle,
  apiURL
} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articlesPreview: null,
    currentArticle: null,
    siteTitle: null,
    apiURL
  },
  mutations: {
    setArticlesPreview(state, data) {
      state.articlesPreview = data
    },
    setCurrentArticle(state, data) {
      state.currentArticle = data
    },
    setSiteTitle(state, data) {
      state.siteTitle = data
    }
  },
  actions: {
    async getInitialData(context){
      const siteTitle = await getSiteTitle()
      const articles = await getArticles()
      context.commit('setArticlesPreview', articles.data)
      context.commit('setSiteTitle', siteTitle.data[0].title)
    },
    async getCurrentArticle(context, {id}) {
      const currentArticle = await getCurrentArticle(id)
      context.commit('setCurrentArticle', currentArticle.data)
    }
  }
})
