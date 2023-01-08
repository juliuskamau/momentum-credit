<template>
  <div class="page-container">
    <section class="text-image-grid">
     
        
          <article class="dynamic-content panel_contact7home">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe_jNuJPLBr9A02-JOm7jKnrxtZn6zOkNuLTa0Tw_wDK5PXvA/viewform?embedded=true"
              width="700"
              height="520"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style="margin: 0 auto;"
              >Loading…</iframe
            >
          </article>
        
     
    </section>
  </div>
</template>

<script>
export default {
  name: "Policy",
  head: {
    title: "Momentum Credit – Data Policy Statement",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,credit,smes,IPF,insurance,kenya,nairobi,premiums,borrow,Whistleblower,Anonymous,lend,financing,loans,payments"
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Data Policy Statement"
      },
      {
        hid: "description",
        name: "description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://momentumcredit.co.ke/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Momentum Credit – Data Policy Statement"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://momentumcredit.co.ke/img/cover.jpg"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://momentumcredit.co.ke/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Momentum Credit – Data Policy Statement"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa"
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://momentumcredit.co.ke/img/cover.jpg"
      }
    ],
    link: [
      { rel: "icon", href: "/img/favicon-196.png" },
      {
        rel: "apple-touch-icon-precomposed",
        href: "/img/apple-touch-icon-precomposed.png"
      },
      {
        rel: "stylesheet",
        fref:
          "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
      }
    ],
    script: [{ src: "https://widget.cloudinary.com/v2.0/global/all.js" }]
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
  },
  created() {}
};
</script>

<style>
.panel_contact7home{
    border-radius: 4px;
    background: #f1f3f5;
    box-shadow: 0 0 4px 0 hsl(0deg 0% 55% / 32%);
    border-radius: 46px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 20px;
    margin-right: 20px;
}
</style>
