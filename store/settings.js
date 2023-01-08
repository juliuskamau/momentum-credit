export const state = () => ({
  appName: "Momentum Credit",
  isMobileMenuOpen: false
});

export const getters = {
  getAppName: state => {
    return state.appName;
  },
  getMobileMenuState: state => {
    return state.isMobileMenuOpen;
  }
};

export const mutations = {
  openMobileMenu(state) {
    state.isMobileMenupen = true;
  },
  closeMobileMenu(state) {
    state.isMobileMenuOpen = false;
  },
  toggleMobileMenu(state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  }
};
