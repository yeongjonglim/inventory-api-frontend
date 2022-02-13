import { createStore } from 'vuex'
import router from '../router'
import { User } from 'firebase/auth'
import { auth, googleAuthProvider } from "@/firebase";
import {
  signInWithPopup,
  signOut
} from 'firebase/auth'

export interface State {
  user?: User | null
}

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state: State, user: User) {
      state.user = user
    },
    CLEAR_USER(state: State) {
      state.user = null
    }
  },
  actions: {
    async loginWithGoogle({ commit }) {
      try {
        await signInWithPopup(auth, googleAuthProvider)
      } catch(error) {
        return
      }
      
      commit('SET_USER', auth.currentUser)
      
      await router.push('/')
    },
    async logout ({ commit }) {
      await signOut(auth)
      
      commit('CLEAR_USER')
      
      await router.push('/login')
    },
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user == null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          
          await router.isReady()
          if (router.currentRoute.value.path === '/login') {
            await router.push('/')
          }
        }
      })
    }
  },
  modules: {
  }
})
