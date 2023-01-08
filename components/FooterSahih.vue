<template>
  <div>
    <footer>
      <div class="section-container">
        <div>
          <nuxt-link to>
            <img
              src="~/assets/img/sahih/new-logo.png"
              class="footer-logo"
              alt="Momentum Footer Logo"
            />
          </nuxt-link>
          <div class="social-media">
            <a href="#">
              <img
                src="~/assets/img/facebook-brandcolor.png"
                alt="Momentum Facebook Page"
              />
            </a>
            <a href="#">
              <img
                src="~/assets/img/twitter-brandcolor.png"
                alt="Momentum Twitter Page"
              />
            </a>
            <a href="#">
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
          <p>
            <span>Branch office:</span>International House, <br />9th Floor Mama Ngina St, Nairobi
          </p>
          <p class="flex">
            <span>Sales Enquiries:</span>
            <i>
              <i>
                <a href="tel:0709434400">0709 434 400</a>
              </i>
              <i>sahih@momentumcredit.co.ke</i>
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
          <div>&copy; 2022 Momentum Sahih</div>
          <div>
            <a href="/terms-and-conditions/" class="">
              <span>Terms &amp; Conditions</span>
            </a>
            <span class="">&nbsp;|&nbsp;</span>
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
        src="~/assets/img/sahih/new-logo.png"
        alt="Welcome to Momentum Sahih"
        class="relative"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "SahihFooter",
  data() {
    return {
      hideLoader: false,
      newsletterSubmitted: false,
      newsletterButtonText: "Subscribe",
      form: {
        source: "sahih-subscription",
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
    console.log("Mounted");

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

