<template>
  <div>
    <footer>
      <div class="section-container">
        <div>
          <img
            src="~/assets/img/logo-2x.png"
            class="footer-logo"
            alt="Momentum Footer Logo"
          />
          <div class="social-media">
            <a
              href="https://www.facebook.com/MomentumCreditKE/"
              target="_blank"
            >
              <img
                src="~/assets/img/facebook-brandcolor.png"
                alt="Momentum Facebook Page"
              />
            </a>
            <a href="https://twitter.com/creditmomentum" target="_blank">
              <img
                src="~/assets/img/twitter-brandcolor.png"
                alt="Momentum Twitter Page"
              />
            </a>
            <a
              href="https://www.instagram.com/momentum.credit/"
              target="_blank"
            >
              <img src="~/assets/img/instagram-brandcolor.png" alt="Momentum Instagram Page" />
            </a>

            <a
              href="https://www.linkedin.com/company/momentumcredit/"
              target="_blank"
            >
              <img src="~/assets/img/linkedin-brandcolor.png" alt="Momentum LinkedIn Page" />
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
        <div class="contacts">
          <h4>Contact Us</h4>
          <p class="flex">
            <span>Sales Enquiries:</span>
            <i>
              <i>
                <a href="tel:0709434000">0709 434 000</a>
              </i>
              <i>info@momentumcredit.co.ke</i>
            </i>
          </p>
          <p class="flex">
            <span class="hidden">Customer Care:</span>
            <i>
              <i>
                <a href="tel:0709434900">0709 434 900</a>
              </i>
              <i>cx@momentumcredit.co.ke</i>
            </i>
          </p>
        </div>
        <div>
          <h4>Subscribe to our newsletter</h4>
          <form @submit.prevent="newsletterForm">
            <div>
              <input
                type="email"
                v-model="form.email"
                placeholder="Enter email"
                required
                class="mb-4"
              />
              <button
                class="btn flat text-white justify-center font-bold"
                :disabled="newsletterSubmitted"
              >
                {{ newsletterButtonText }}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="section-container text-white">
          <div>&copy; 2022 Momentum Credit</div>
          <div>
                        <a href="https://momentumcredit.co.ke/blog/category/careers/">
              <span>Careers</span>
            </a>
            <span>&nbsp;|&nbsp;</span>
            <nuxt-link to="/whistleblower">
              <span>Report Malpractice</span>
            </nuxt-link>
            <span>&nbsp;|&nbsp;</span>
            <nuxt-link to="/grievances">
              <span>Grievances</span>
            </nuxt-link>
            <span>&nbsp;|&nbsp;</span>
            <a href="/terms-and-conditions/">
              <span>Terms &amp; Conditions</span>
            </a>
            <span>&nbsp;|&nbsp;</span>
            <nuxt-link to="/data-policy/">
              <span>Privacy Policy</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </footer>

    <div class="page-loader" ref="pageLoader">
      <div class="bg"></div>
      <div class="overlay"></div>
      <img
        src="~/assets/img/logo-2x.png"
        alt="Welcome to Momentum"
        class="relative"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      hideLoader: false,
      newsletterSubmitted: false,
      newsletterButtonText: "Subscribe",
      form: {
        source: "subscription",
        email: "",
      },
    };
  },
  created() {
    console.log("Created");
    let self = this;
  },
  mounted() {
    let self = this;
    setTimeout(() => {
      self.$refs.pageLoader.classList.add("animated");
    }, 1000);
  },
  methods: {
    newsletterForm() {
      let self = this;
      self.sendDataToServer();
    },
    async sendDataToServer() {
      let self = this;

      this.loading = true;
      let data = this.form;

      const config = {
        headers: {
          Authorization: "Bearer " + process.env.API_API,
        },
      };

      try {
        await this.$axios.post(
          "https://momentumcredit.co.ke/leads/data.php",
          data,
          config
        );
        self.newsletterSubmitted = true;
        self.newsletterButtonText = `Subscribed`;
        this.loading = false;
      } catch (error) {
        console.log(`Request Error ${error}`);
        this.loading = false;
      }
    },
  },
};
</script>
