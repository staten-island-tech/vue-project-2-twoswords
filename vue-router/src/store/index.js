import {createStore} from 'vuex'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authIsReady:false,
        cart: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed:', state.user)
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        },
        add(state, product) {
            state.cart.push(product);
          },
          remove(state, product) {
            state.cart.splice(product, 1);
          },
    },
    actions: {
        async signup(context, {email, password}) {
            console.log('signup action')

        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (res){
            context.commit('setUser', res.user)
        } else {
            throw new Error('could not complete signup')
        }
        },
        async login(context, {email, password}) {
            console.log('login action')

        const res = await signInWithEmailAndPassword(auth, email, password)
        if (res){
            context.commit('setUser', res.user)
        } else {
            throw new Error('could not complete login')
        }
        },
        async logout(context) {
            console.log('logout action')

            await signOut(auth)
            context.commit('setUser', null)
        },
        get({ commit }) {
            commit("add");
          },
          remove({ commit }) {
            commit("remove");
          },
        },
    },
    
)

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})
export default store