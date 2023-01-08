<template>
  <div class="page-container">
    <section class="page-title-section about-page p-4">
      <div class="content">
        <h1 class="title">Unlocking your financial potential</h1>
        <h3 class="subtitle">#KeepTheMomentum</h3>
      </div>
    </section>
    <section class="text-image-grid">
      <div class="section-container">
        <div class="text-col">
          <h3 class="section-title">Company Overview</h3>
          <p>Momentum Credit, is a non-deposit taking financial institution, founded in March 2017, with the purposeful intent to meet an overwhelming market need of providing working capital solutions to Individuals and SMEs. Momentum Credit pillars its customers to discover financial liberty, driven by the will to establish economic growth and eradicate poverty in Africa.We diversify the lending space and patronize the lending market share through instant logbook loans, cheap car importations and car insurance premiums.</p>
          <p>SMEs are touted, by reputable institutions such as the World Bank, as the economic growth engines that shall drive Africa out of chronic poverty to the utopia of middle income status. However such companies regularly face a crippling lack of access to financing, due to the broad based perception of being too risky.</p>
        </div>
        <div class="img-col">
          <img src="~/assets/img/about-image@2x.jpg" alt="Company Overview" />
        </div>
      </div>
    </section>
    <section class="icons-section">
      <div class="section-container">
        <h3 class="section-title text-center">Our Values</h3>
        <div class="icons-container cols-5">
          <div>
            <img src="~/assets/img/commitment-icon@2x.png" alt="Commitment" />
            <h4>Commitment</h4>
            <p>When we commit we fully commit to deliver to promise.</p>
          </div>
          <div>
            <img src="~/assets/img/leadership-icon@2x.png" alt="Leadership" />
            <h4>Leadership</h4>
            <p>We are all leaders in our area of expertise.</p>
          </div>
          <div>
            <img src="~/assets/img/integrity-icon@2x.png" alt="Integrity" />
            <h4>Integrity</h4>
            <p>Our strong ethical beliefs are the driving force behind all we do.</p>
          </div>
          <div>
            <img src="~/assets/img/excellence-icon@2x.png" alt="Excellence" />
            <h4>Excellence</h4>
            <p>We take immense care and pride in what we do.</p>
          </div>
          <div>
            <img src="~/assets/img/connection-icon@2x.png" alt="Connection" />
            <h4>Connection</h4>
            <p>We value relationships and never treat them merely as transactions.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="icons-section">
      <div class="section-container">
        <h3 class="section-title text-center">Why choose us</h3>
        <div class="icons-container cols-4">
          <div>
            <img src="~/assets/img/speed-clock-icon@2x.png" alt="Fast" />
            <h4>Fast</h4>
            <p>We have a turnaround time promise of 24 hours on all our products and services.</p>
          </div>
          <div>
            <img src="~/assets/img/handshake-icon@2x.png" alt="Reliable" />
            <h4>Reliable</h4>
            <p>We strive to always deliver on our promises.</p>
          </div>
          <div>
            <img src="~/assets/img/puzzle-icon@2x.png" alt="Solution Oriented" />
            <h4>Solution Oriented</h4>
            <p>We believe in structuring effective solutions to meet your needs.</p>
          </div>
          <div>
            <img src="~/assets/img/magnify-glass-icon@2x.png" alt="Transparent" />
            <h4>Transparent</h4>
            <p>There are no hidden charges in our fee structures.</p>
          </div>
        </div>
        <div class="text-center pt-24 hidden">
          <nuxt-link to="#" class="btn w-auto lg text-white uppercase">Join Our Team</nuxt-link>
        </div>
      </div>
    </section>

    <section class>
      <div class="section-container">
        <h3 class="section-title text-center careers-title">Join us</h3>
        <div class="careers-container flex justify-center flex-col">
          <p
            class="max-w-screen-md mx-auto text-center"
          >We appreciate your interest in investigating job possibilities at Momentum Credit. Unfortunately, we have nothing available at the moment.</p>
          <form class="job-listing-subscription" @submit.prevent="sendDataToServer()">
            <div>
              <input
                type="email"
                :readonly="newsletterSubmitted"
                placeholder="Enter email"
                required
                v-model="form.email"
                class="mb-4"
              />

              <div class="p-1 pb-6 px-6 text-center" v-if="newsletterSubmitted">
                <div class="text-sm text-green-700">
                  Congrats! You are in the list.
                  We will inform you as soon as we have a vacancy.
                </div>
              </div>

              <button
                class="btn flat text-white justify-center font-bold"
                :disabled="newsletterSubmitted"
                v-if="!newsletterSubmitted"
              >Submit your email for future listing</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  head: {
    title: "Momentum Credit - About Us",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,credit,smes,values,careers,loans,financing,book,logbook,sharia",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit - About UsMomentum Credit - About Us",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Momentum Credit, is a non-deposit taking financial institution, founded in March 2017, with the purposeful intent to meet an overwhelming market need of providing working capital solutions to Individuals and SMEs. Momentum Credit pillars its customers to discover financial liberty, driven by the will to establish economic growth and eradicate poverty in Africa.We diversify the lending space and patronize the lending market share through instant logbook loans, cheap car importations and car insurance premiums.",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://momentumcredit.co.ke/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Momentum Credit - About Us",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Momentum Credit, is a non-deposit taking financial institution, founded in March 2017, with the purposeful intent to meet an overwhelming market need of providing working capital solutions to Individuals and SMEs. Momentum Credit pillars its customers to discover financial liberty, driven by the will to establish economic growth and eradicate poverty in Africa.We diversify the lending space and patronize the lending market share through instant logbook loans, cheap car importations and car insurance premiums.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://momentumcredit.co.ke/img/cover.jpg",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://momentumcredit.co.ke/",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Momentum Credit - About Us",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Momentum Credit, is a non-deposit taking financial institution, founded in March 2017, with the purposeful intent to meet an overwhelming market need of providing working capital solutions to Individuals and SMEs. Momentum Credit pillars its customers to discover financial liberty, driven by the will to establish economic growth and eradicate poverty in Africa.We diversify the lending space and patronize the lending market share through instant logbook loans, cheap car importations and car insurance premiums.",
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://momentumcredit.co.ke/img/cover.jpg",
      },
    ],
    link: [
      { rel: "icon", href: "/img/favicon-196.png" },
      {
        rel: "apple-touch-icon-precomposed",
        href: "/img/apple-touch-icon-precomposed.png",
      },
      {
        rel: "stylesheet",
        fref:
          "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap",
      },
    ],
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
  },
  data() {
    return {
      newsletterSubmitted: false,
      form: {
        source: "job-listing",
        email: "",
      },
    };
  },
  created() {},
  methods: {
    async sendDataToServer() {
      if (this.form.email == "") {
        return;
      }

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
        this.loading = false;
      } catch (error) {
        console.log(`Request Error ${error}`);
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
