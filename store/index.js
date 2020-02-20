export const state = () => ({
  openSidenav: false
})

export const mutations = {
  toggleSidenav (state) {
    state.openSidenav = !state.openSidenav
  }
}