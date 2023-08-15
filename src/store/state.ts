import { defineStore, acceptHMRUpdate } from 'pinia'

const useStateStore = defineStore('useStateStore', {
    state: () => ({
    }),
    actions: {
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStateStore, import.meta.hot))
}