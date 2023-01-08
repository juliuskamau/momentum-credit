<template>
  <div class="page-container">
    <div class="home-intro shariah">
      <div class="header-bg"></div>
      <div class="header-overlay"></div>

      <div class="content">
        <div class="title-wrapper">
          <h1 class="mb-4">السّلامُ عليكُمْ</h1>
          <h1>Assalam Aleykum.</h1>
          <h1>How can we help you today?</h1>
        </div>
        <div class="icons">
          <nuxt-link to="/sahih-logbook-financing">
            <img
              src="~/assets/img/sahih/gold-logbook-financing@2x.png"
              alt="Sahih Logbook Financing"
            />
            <span>Sahih Logbook Financing</span>
          </nuxt-link>
          <nuxt-link to="/shariah-supervisory-board">
            <img src="~/assets/img/sahih/gold-advisory-board@2x.png" alt="Supervisory Board" />
            <span>Supervisory Board</span>
          </nuxt-link>
          <a href="/documents/fatwa.pdf" title="Download Document">
            <img src="~/assets/img/sahih/gold-pdf.png" alt="Fatwaa" />
            <span>Fatwa</span>
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
  </div>
</template>

<script>
export default {
  layout: "sahih",
  head: {
    title: "Momentum Sahih — السّلامُ عليكُمْ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,sharia,support,Sahih,financing,book,fatwa,logbook,credit,kenya,nairobi",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Sahih — السّلامُ عليكُمْ",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Momentum Sahih is a riba-free sharia-compliant financing product supervised by the Shariah Supervisory Board, providing halal logbook loans.",
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
        content: "Momentum Sahih — السّلامُ عليكُمْ",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Momentum Sahih is a riba-free sharia-compliant financing product supervised by the Shariah Supervisory Board, providing halal logbook loans.",
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
        content: "Momentum Sahih — السّلامُ عليكُمْ",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Momentum Sahih is a riba-free sharia-compliant financing product supervised by the Shariah Supervisory Board, providing halal logbook loans.",
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
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
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
