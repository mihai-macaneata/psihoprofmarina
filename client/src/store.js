import Vue from 'vue'
import Vuex from 'vuex'
import {
  getArticles,
  getSiteTitle,
  getCurrentArticle,
  apiURL,
  getHeaderImage,
  createAppointment,
  getCategories
} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articlesPreview: null,
    currentArticle: null,
    siteTitle: null,
    apiURL,
    headerImage: null,
    siteSubtitle: null,
    categories: null
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
    },
    setSiteSubtitle(state, data) {
      state.siteSubtitle = data
    },
    setHeaderImage(state, data) {
      state.headerImage = data
    },
    setCategories(state, data) {
      state.categories = data
    }
  },
  actions: {
    async getInitialData(context){
      const siteTitle = await getSiteTitle()
      const articles = await getArticles()
      const categories = await getCategories()
      const headerImage = await getHeaderImage()
      context.commit('setArticlesPreview', articles.data)
      context.commit('setCategories', categories.data)
      context.commit('setSiteTitle', siteTitle.data[0].title)
      context.commit('setSiteSubtitle', siteTitle.data[0].subtitle)
      context.commit('setHeaderImage', `${apiURL}${headerImage.data[0].image.url}`)
    },
    async getCurrentArticle(context, {id}) {
      const currentArticle = await getCurrentArticle(id)
      if(currentArticle.data.cover) {
        currentArticle.data.cover.url = `${apiURL}${currentArticle.data.cover.url}`
      }
      context.commit('setCurrentArticle', currentArticle.data)
      // context.commit('setHeaderImage', `${apiURL}${currentArticle.data.cover.url}`)
      return currentArticle.data
    },
    async createAppointment(context, appointment) {
      const appo = await createAppointment(appointment)
      return appo
    }
  }
})
