<template>
  <header :class="['gray-bg p-4']">
    <div class="fixed bottom-0 left-0 w-full z-20" v-if="showCookie">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white pt-2">
        <div class="px-6 py-4">
          <p class="text-gray-700">
            To help personalize content and provide a better experience, we use
            cookies. By clicking or navigating the site, you agree to allow our
            collection of information on and off Momentum Credit through
            cookies.
          </p>
        </div>
        <div class="px-6 pt-2 pb-2">
          <a
            href="#"
            @click="showCookie = false"
            class="btn text-white inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >Accept</a
          >
        </div>
      </div>
    </div>

    <div class="whatsapp-button-wrapper">
      <a href="https://wa.me/254796444555" class="">
        <img
          class="icon-whatsapp"
          alt="Momentum WhatsApp Number"
          src="~/assets/img/whatsapp.png"
        />
      </a>
    </div>
    <div class="max-w-screen-xl mx-auto flex justify-between">
      <nuxt-link to="/">
        <img src="~/assets/img/logo-2x.png" alt="Momentum Logo" class="logo" />
      </nuxt-link>
      <button
        :class="{
          'mobile-menu-btn': true,
          'mobile-menu-open': getMobileMenuState
        }"
        @click="toggleMenu()"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav :class="{ nav: true, 'mobile-menu-open': getMobileMenuState }">
        <ul class="main">
          <li class="has-dropdown">
            <nuxt-link to="/">
              <span>Home</span>
            </nuxt-link>
          </li>
          <li class="has-dropdown">
            <nuxt-link to="/about-us">
              <span>About Us</span>
            </nuxt-link>
            <ul class="dropdown">
              <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/news/"
                  class=""
                  ><span>News</span></a
                >
              </li>
              <li>
                <a href="https://momentumcredit.co.ke/blog/">
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/testimonials/"
                  class=""
                  ><span>Testimonials</span></a
                >
              </li>
                            <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/careers/"
                  class=""
                  ><span>Careers</span></a
                >
              </li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a
              href="#"
              :class="{ active: showDropDown }"
              @blur="closeDropdoown"
              @click.prevent="showDropDown = !showDropDown"
            >
              <span>Products</span>
            </a>
            <ul :class="{ dropdown: true, open: showDropDown }">
              <li>
                <nuxt-link to="/log-book-loans">
                  <span>Logbook Loans</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/insurance-financing-premiums">
                  <span>Insurance Premium Financing</span>
                </nuxt-link>
              </li>
              <li>
                <a href="/shariah-compliant-financing">
                  <span>Sharia Compliant Financing</span>
                </a>
              </li>
              <li>
                <nuxt-link to="/invoice-discounting">
                  <span>Invoice Discounting</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/ezua-chapaa">
                  <span>Ezua Chapaa</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/landcruisers">
                  <span>Ex-GoK Landcruisers</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  onclick="return gtag_report_conversion('https://momentumcredit.co.ke/motor-import-financing');"
                  to="/motor-import-financing"
                >
                  <span>Motor Import Financing</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/Import-duty-financing">
                  <span>Import Duty Financing</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="https://momentumcredit.co.ke/blog/category/csr/">
              <span>Social Responsibility</span>
            </a>
            <ul class="dropdown">
              <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/csr/"
                  class=""
                  ><span>Momentum Credit CSR</span></a
                >
              </li>
              <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/sahih/"
                  class=""
                  ><span>Momentum Sahih</span></a
                >
              </li>
              <li>
                <a
                  href="https://momentumcredit.co.ke/blog/category/csr-videos/"
                  class=""
                  ><span>Momentum Videos</span></a
                >
              </li>
            </ul>
          </li>

          <!-- <li>
            <nuxt-link to="/contact-us">
              <span>Contact Us</span>
            </nuxt-link>
          </li>-->
          <li>
            <nuxt-link to="/locate-us">
              <span>Locate Us</span>
            </nuxt-link>
          </li>
          <li>
            <a href="tel:0709434000" class="btn toolbar-btn">
              <img src="~/assets/img/call-white.png" alt="Call Icon" />
              <span class="show-on-mobile">Call Now</span>
              <span class="show-on-desktop">0709 434 000</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      showCookie: false,
      showDropDown: false,
      tawkLexi: "https://embed.tawk.to/5f1eca8c4eb6fc4a189af290/1ee84qote"
    };
  },
  head() {
    return {
      script: [
        {
          hid: "lexa",
          src: this.tawkLexi,
          defer: true,
          crossorigin: "*",
          callback: this.onTawkLoaded
        }
      ]
    };
  },
  computed: {
    ...mapGetters("settings", ["getMobileMenuState"])
  },
  created() {
    let self = this;
  },
  mounted() {
    let self = this;
    if (!localStorage.new) {
      localStorage.new = 1;
      //this.showCookie = true;
    }
  },
  methods: {
    onTawkLoaded() {
      //let's make sure we are not on mobile
      if (this.checkIfMobile()) {
        Tawk_API.hideWidget();
      } else {
        setTimeout(() => {
          Tawk_API.maximize();
        }, 7000);
      }
    },
    checkIfMobile() {
      let check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    doSomething() {
      console.log("Hello World");
    },
    closeDropdoown() {
      let self = this;
      //wait 200 milisec and then close
      setTimeout(function() {
        self.showDropDown = false;
      }, 200);
    },
    toggleMenu() {
      this.$store.commit("settings/toggleMobileMenu");
    }
  }
};
</script>
