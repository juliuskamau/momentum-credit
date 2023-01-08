<template>
  <div class="page-container">
    <div class="home-intro">
      <div class="header-bg"></div>
      <div class="header-overlay"></div>

      <div class="content">
        <div class="title-wrapper">
          <h1 class="home-intro-title-1">Karibu Momentum.</h1>
          <h1 class="home-intro-title-2">How can we help you today?</h1>
        </div>
        <div class="icons">
          <nuxt-link to="/log-book-loans">
            <img src="~/assets/img/gold-logbook-loans-icon-2x.png" alt="Logbook Loans" />
            <span>Logbook Loans</span>
          </nuxt-link>
          <nuxt-link to="/insurance-financing-premiums">
            <img
              src="~/assets/img/gold-insurance-premium-icon-2x.png"
              alt="Insurance Premium Financing"
            />
            <span>Insurance Premium Financing</span>
          </nuxt-link>
          <a href="/shariah-compliant-financing">
            <img
              src="~/assets/img/gold-sahih-logbook-financing-icon-2x.png"
              alt="Sahih Logbook Financing"
            />
            <span>Sahih Logbook Financing</span>
          </a>
          <nuxt-link to="/invoice-discounting">
            <img src="~/assets/img/gold-invoice-factoring-icon-2x.png" alt="Invoice Discounting" />
            <span>Invoice Discounting</span>
          </nuxt-link>
          <a  href="/motor-import-financing">
            <img
              src="~/assets/img/gold-motor-financing-icon-2x.png"
              alt="Motor Import Financing"
            />
            <span>Motor Import Financing</span>
          </a>
        </div>
      </div>

      <div class="social-icons">
        <a href="https://www.facebook.com/MomentumCreditKE/" target="_blank">
          <img src="~/assets/img/facebook-brandcolor3x.png" alt="Momentum Facebook Page" />
        </a>
        <a href="https://twitter.com/creditmomentum" target="_blank">
          <img src="~/assets/img/twitter-brandcolor3x.png" alt="Momentum Twitter Handle" />
        </a>
        <a href="https://www.instagram.com/momentum.credit/" target="_blank">
          <img src="~/assets/img/instagram-brandcolor3x.png" alt="Momentum Instagram Account" />
        </a>
          <a href="https://www.linkedin.com/company/momentumcredit/" target="_blank">
          <img src="~/assets/img/linkedin-brandcolor3x.png" alt="Momentum linkedin Account" />
        </a>
                     <a
              href="https://vm.tiktok.com/ZSJvQy11H/"
              target="_blank"
            >
              <img src="~/assets/img/tiktok@3x.png" alt="Momentum LinkedIn Page" />
            </a>
                                    <a
              href="https://www.youtube.com/channel/UCM4GK5nKzgGZFp4i1hZaC1Q"
              target="_blank"
            >
              <img src="~/assets/img/youtube1.png" alt="Momentum LinkedIn Page" />
            </a>
      </div>
    </div>

    <!-- Popup  -->
    <transition name="fade" mode="out-in">
      <div class="home-popup relative z-50" v-if="showPopup">
        <div class="content banner">
          <a href="#" @click.prevent="showPopup = false" class="close-modal">
            <img src="~/assets/img/sahih/close.png" alt="CLose" />
          </a>
          <img src="~/assets/img/banner.jpg" alt="Banner" class="banner-img" />
          <div class="cta" style="display:none;">
            <nuxt-link
              to="/insurance-financing-premiums"
              id="banner-link"
              class="btn text-white"
            >GET QUOTE</nuxt-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      showPopup: false,
    };
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
    setTimeout(function () {
      if (!localStorage.seenBanner) {
        self.showPopup = true;
        localStorage.seenBanner = 1;
      }
    }, 20000);
  },
  
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
