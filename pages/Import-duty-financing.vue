<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-bg3"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Import Duty Financing</h1>
            <p>
           We pay 100% of import duty and other related costs promptly.
</p>
            <div class="mt-8">
              
             
<a href="#" class="btn lg font-bold text-white uppercase mb-4" v-scroll-to="'#after-header'">
        Learn More 
          </a>

            </div>
          </div>
        </div>

        <div class="col" id="formtop">

          <form
            class="calculator-form calculator-form-updated"
            id="import-duty-form"
            @submit.prevent="submitForm"
          >
           <div class="form-title-wrapper">
              <h5>SUBMIT DETAILS</h5>
            </div>
            <div class="input-row pt-6 pb-6">
                        
            <div class="input-item w-full">
                <label>Name*</label>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full"
                   required
                  v-model="form.user_name"
                />
             
            </div>
              <div class="input-item">
                <label>Phone*</label>
                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full"
                   required
                  v-model="form.user_phone"
                />
              </div>
              <div class="input-item">
                <label>Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full"
                   required
              v-model="form.user_email"
                />
              </div>
              <div class="input-item">
                <label for="vehicle-make">Vehicle Make</label>
                <input type="text" 
                placeholder="Vehicle Make i.e., Toyota, Mercedes, Honda" class="w-full"
                required
v-model="form.vehicle_make"
                />
              </div>
                <div class="input-item">
                <label for="Vehicle-Model">Vehicle Model</label>
                <input type="text" 
                placeholder="Vehicle Model i.e., Vitz, C-Class, Fit" class="w-full"
                required
            v-model="form.vehicle_model"
                />
                </div>

              <div class="input-item">
                <label for="user-email">Year and month of Manufacture</label>
                <input type="text"
                  placeholder="Year and month of Manufacture"
                  class="w-full"
                  required
                 v-model="form.year_and_month_manufacture"
                />
              </div>
                            <div class="input-item">
                <label for="user-email">Landing date (When the car arrived in-country)</label>
                <input type="text"
                  placeholder="Landing date"
                  class="w-full"
                  required
               v-model="form.landing_date"
                />
              </div>
                
            <div class="p-1 pb-6 px-6 text-center" v-if="formImportDutySubmitted">
              <div class="text-sm text-green-700">
                Thank you for your request. One of our representative will get back to you as soon as possible.
                <!-- Your quote is ready to download. Click <a href="#" class="text-yellow">here</a> to download. -->
              </div>
            </div>

            <div class="w-full p-6 text-center" v-if="!formImportDutySubmitted">
              <button type="submit" class="uppercase btn submit-btn">
                <strong class="px-6 text-white">GET A QUOTE</strong>
              </button>
            </div>
            
            </div>
</form>

         
        </div>
      </div>
    </div>

    <section class="icons-section hidden">
      <div class="section-container">
        <div class="icons-container cols-3 title-only">
          <div>
            <img
              src="~/assets/img/money-bag-icon@2x.png"
              alt="Only 20% deposit &amp; flexible repayments up to 11 months"
            />
            <h4>Only 20% deposit &amp; flexible repayments up to 11 months</h4>
          </div>
          <div>
            <img
              src="~/assets/img/calendar-icon@2x.png"
              alt="Market beating premium rates &amp; Interest rates as low as 2% per month"
            />
            <h4>Market beating premium rates &amp; Interest rates as low as 2% per month</h4>
          </div>
          <div>
            <img src="~/assets/img/clock-icon@2x.png" alt="Same day processing" />
            <h4>Same day processing</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="text-image-grid" id="after-header">
      <div class="section-container">
        <div class="text-col">
          <h3 class="section-title">Import Duty Financing</h3>
          <p class="mb-4">
            Import Duty Financing is a short term facility designed to help you settle 100% of port charges promptly, seamlessly and on time thus avoiding storage and demurrage charges.</p>
          <p class="mb-4">
            We pay for import duty, storage charges and demurrages (if any), clearing, forwarding & other logistical costs and finally facilitate transportation to the final destination.

          </p>

          <div class="mt-8 mb-4">
                 <a
            href="#"
            class="btn lg font-bold text-white uppercase mb-4"
           v-scroll-to="'#formtop'"
          >GET A QUOTE </a>
          </div>
        </div>
        <div class="img-col ezua-chapaa-side-img">
          <img src="~/assets/img/Motor-Import-Financing2.jpg" alt="Ezua Chapaa" />
        </div>
      </div>
    </section>

    <section class="card-stripe-section hidden">
      <div class="section-container">
        <div class="card">
          <h4>
            You can also Top-up loans by dialling;
            <strong>*674#</strong>.
          </h4>
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
      </div>
    </section>

    <section class="icons-section">
      <div class="section-container">
        <h3 class="section-title text-center">Benefits of Import Duty Financing</h3>
        <div class="icons-container cols-4 title-only benefits-section">
          <div>
            <img
              src="~/assets/img/ezua/cash-icon.png"
              alt="Only 20% deposit &amp; flexible repayments of up to 11 months."
            />
            <h4>
           Enable the importer avoid high storage and demurrage charges at the port
            </h4>
          </div>
          <div>
            <img
              src="~/assets/img/ezua/time-icon.png"
              alt="Market beating premium rates &amp; Interest rates as low as 2% per month"
            />
            <h4>
           Pay for clearing, forwarding and other logistics costs
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/clock-icon.png" alt="Same day processing" />
            <h4>
          Facilitate transportation of goods from the port to the final destination
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/ussd-icon.png" alt="No early settlement fees" />
            <h4>
             Maximum tenure of 30 days with a leeway to convert to a logbook or revolving facility 
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section class="m-blue-bg">
      <div class="section-container">
        <h3 class="section-title text-center">Basic Requirements</h3>

         <div class="card-grid">
          <div class="card-wrapper">
            <div class="card">
              <h4>Individual Application</h4>
              <ul>
                                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>-Copy of National ID card and Copy of the PIN Certificate</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Invoice for the motor vehicle or other goods. </span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>2 Passport Photos
</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Original Bill of lading.

</span>
                </li>
                 <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>English Japanese logbook

</span>
                </li>
                  <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Certified Mpesa Statement for latest 6 months

</span>
                </li>
                 
              </ul>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <h4>Additional Documents for Corporate Clients</h4>
              <ul>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Cashflow Documents</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>CR-12</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Board resolution</span>
                </li>
                                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Authority to Cash Authority</span>
                </li>
                                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Authority to Sign Cheques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center hidden">
          <nuxt-link to="#insurance-premium-form" class="btn secondary lg font-bold text-white uppercase">Apply Now</nuxt-link>
        </div>
      </div>
    </section>


  </div>
</template>
<script>
export default {
  name: "Import Duty Financing",
    head: {
    title: "Momentum Credit – Motor Import Financing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "A short-term facility that pays for import duty, storage charges, clearing, forwarding costs and any other port charges to facilitate car delivery.  ",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Motor Import Financing",
      },
      {
        hid: "description",
        name: "description",
        content:
          "A short-term facility that pays for import duty, storage charges, clearing, forwarding costs and any other port charges to facilitate car delivery.   ",
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
        content: "Momentum Credit – Import Duty Financing",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "A short-term facility that pays for import duty, storage charges, clearing, forwarding costs and any other port charges to facilitate car delivery.   ",
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
        content: "Momentum Credit – Import Duty Financing",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "A short-term facility that pays for import duty, storage charges, clearing, forwarding costs and any other port charges to facilitate car delivery. ",
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
  data() {
    return {
      counter: 0,
      formImportDutySubmitted: "",
      hasScrolledToBottom: false,
      form: {
        source: "import duty form",
        user_name: "",
        user_phone: "",
        user_email: "",
        vehicle_make: "",
        vehicle_model: "",
        vehicle_color: "",
        landing_date: "",
       year_and_month_manufacture: "",
      },

    };
  },
  methods: {
    updateMap(town) {
      let self = this;

      let map = document.getElementById("map");
      this.$scrollTo(map);
    },
    submitForm() {
      let self = this;
      if (
        this.form.name == "" ||
        this.form.phone == "" ||
        this.form.email == ""
      ) {
        return;
      }
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
        self.formImportDutySubmitted = true;
        this.loading = false;
      } catch (error) {
        console.log(`Request Error ${error}`);
        this.loading = false;
      }

      self.$gtm.push({ event: "MomentumGetInTouchFormSubmitted" });
    },
    handleScroll: function (el) {
      if (
        el.srcElement.offsetHeight + el.srcElement.scrollTop >=
        el.srcElement.scrollHeight - parseInt(5)
      ) {
        this.hasScrolledToBottom = true;
      } else {
        this.hasScrolledToBottom = false;
      }
    },
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
