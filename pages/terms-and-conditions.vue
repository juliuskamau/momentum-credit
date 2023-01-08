<template>
  <div class="page-container">
    <section class="text-image-grid">
      <div class="section-container">
        <div class="w-full">
          <h3 class="section-title" style="margin-bottom: 2rem">
            Terms &amp; Conditions
          </h3>
          <article class="dynamic-content">
            <div class="w-full">
              <a
                href="/documents/USSD-TopUp-Terms-and-Conditions.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >USSD TopUp Terms &amp; Conditions</a
              >
              <a
                href="/documents/USSD-Staff-Savings-Account-Terms-and-Conditions.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >USSD Staff Savings Account Terms &amp; Conditions</a
              >
           
              <a
                href="/documents/MotorvehiclePFTermsConditions.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >Motor Vehicle IPF Agreement Terms &amp; Conditions</a
              >
                            <a
                href="/documents/MotorVehicleIPFConsentForm.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >Motor Vehicle IPF Consent Form</a
              >
              <a
                href="/documents/Ezua-Chapaa-TnCs01.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >Ezua Chapaa Terms &amp; Conditions</a
              >
              <a
                href="/documents/Customer-Service-Charter.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >Customer Service Charter</a
              >
              <a
                href="/documents/Environmental-and-Social-Policy.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >Environmental and Social Policy</a
              >
                            <a
                href="/documents/MotorImportFinancing-min.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >General conditions for the zero percent financing motor vehicle importation

</a>
                            <a
                href="/documents/MotorImportFinancing-min02.pdf"
                title="View document"
                class="card bg-white w-full no-underline text-lg rounded-lg flex items-center py-6 px-8 mb-6 border border-l border-gray-400"
                >General conditions for the motor vehicle trade-in and import financing facility

</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Policy",
    head: {
    title: "Momentum Credit – Terms & Conditions",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "The Innovative revolving USSD credit line,*674#, allows you to access credit limits from as low as Ksh 100 up to Ksh 2,000,000.",
      },
      {
        hid: "title",
        name: "title",
        content: "Ezua Chapaa",
      },
      {
        hid: "description",
        name: "description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa",
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
        content: "Momentum Credit – Terms & Conditions",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa",
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
        content: "Momentum Credit – Terms & Conditions",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "A Micro-Finance Company in Kenya that provides Working Capital, LPO Financing, Unsecured Low Price Competitive Financing within 24 hours to Individual Entrepreneurs, SMEs and Medium Businesses and help Transforming Africa",
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
  created() {},
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>