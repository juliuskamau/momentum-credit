<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-bg2"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Motor Import Financing</h1>
            <p>
              Our leading Motor Import Financing solution simplifies access to your dream car by allowing you to import a motor vehicle personalized to your individual specifications with <b>huge cost savings, fast shipment, no hidden costs,</b> and only a <b>25% deposit.</b>
              </p>
            <div class="mt-8">
              
             
<a href="#" class="btn lg font-bold text-white uppercase mb-4"v-scroll-to="'#after-header'">
        Learn More 
          </a>

            </div>
          </div>
        </div>

        <div class="col" id= "formtop">
<form class="calculator-form calculator-form-updated" id="motor_import_financing" @submit.prevent="submitForm">
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
                <label for="user-email">Vehicle color</label>
                <input type="text"
                  placeholder="Vehicle color"
                  class="w-full"
                  required
                 v-model="form.vehicle_color"
                />
              </div>
                            <div class="input-item">
                <label for="user-email">Year of Manufacture</label>
                <input type="text"
                  placeholder="Year of Manufacture"
                  class="w-full"
                  required
               v-model="form.year_of_manufacture"
                />
              </div>
                            <div class="input-item w-full">
                <label for="user-email">Budget</label>
                <input type="text"
                  placeholder="Budget"
                  class="w-full"
                  required
               v-model="form.user_budget"
                />
              </div>
                
            <div class="p-1 pb-6 px-6 text-center" v-if="formSubmitted">
              <div class="text-sm text-green-700">
                Thank you for your request. One of our representative will get back to you as soon as possible.
                <!-- Your quote is ready to download. Click <a href="#" class="text-yellow">here</a> to download. -->
              </div>
            </div>

            <div  class="w-full p-6 text-center" v-if="!formSubmitted">
              <button  type="submit" class="uppercase btn submit-btn text-center">
                                <a style="visibility: hidden;"  onclick="return gtag_report_conversion('https://momentumcredit.co.ke/motor-import-financing');" href="https://momentumcredit.co.ke/motor-import-financing">GET A QUOTE</a>

                <strong style="padding:0px;" class="px-6 text-white">GET A QUOTE</strong>
                <a style="visibility: hidden;"  onclick="return gtag_report_conversion('https://momentumcredit.co.ke/motor-import-financing');" href="https://momentumcredit.co.ke/motor-import-financing">GET A QUOTE</a>
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
          <h3 class="section-title">Motor Import Financing</h3>
          <p class="mb-4">
            Motor Import Finance (MIF) is a financing solution designed to help you have a seamless process of importing a vehicle of your choice with a minimum deposit of 25%. We cater for all your importation needs and deliver your dream car within 60 days! We have multiple financing options with easy monthly instalments of up to 24 months
   </p>

          <div class="mt-8 mb-4">
                 <a
            href="#"
            class="btn lg font-bold text-white uppercase mb-4"
           v-scroll-to="'#formtop'"
          >SUBMIT DETAILS </a>
          </div>
        </div>
        <div class="img-col ezua-chapaa-side-img">
          <img src="~/assets/img/mazda-cx5-banner22.jpg" alt="Ezua Chapaa" />
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
        <h3 class="section-title text-center">Benefits of Motor Import Financing</h3>
        <div class="icons-container cols-5 title-only benefits-section">
          <div>
            <img
              src="~/assets/img/ezua/cash-icon.png"
              alt="Only 20% deposit &amp; flexible repayments of up to 11 months."
            />
            <h4>
         Significant cost savings of up to 20%
            </h4>
          </div>
          <div>
            <img
              src="~/assets/img/ezua/time-icon.png"
              alt="Market beating premium rates &amp; Interest rates as low as 2% per month"
            />
            <h4>
             Flexible repayments (up to 24 months)
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/clock-icon.png" alt="Same day processing" />
            <h4>
             Efficient hassle free motor vehicle importation 
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/ussd-icon.png" alt="No early settlement fees" />
            <h4>
              Unlock a revolving Credit Card facility accessible 24/7 via USSD <br>
            <a href="tel:*674%23%20">*674#</a>
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/cash-icon.png" alt="minimal upfront commitment at only 25% " />
            <h4>
             Minimal upfront commitment at only 25% 
            </h4>
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
      </div>
    </section>

    <section class="m-blue-bg">
      <div class="section-container">
        <h3 class="section-title text-center">Motor Import Financing Requirement</h3>

         <div class="card-grid">
          <div class="card-wrapper">
            <div class="card">
              <h4>Individual Application</h4>
              <ul>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>National ID </span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Passport photo 
</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>12 months Mpesa statements</span>
                </li>
                              <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>
                    Minimum 25% Deposit

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
  name: "Motor Import Financing",
    head: {
    title: "Momentum Credit – Motor Import Financing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "With just 25%, the Motor Import Financing product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
          "With just 25%, the Motor Import Financing product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
        content: "Momentum Credit – Motor Import Financing",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "With just 25%, the Motor Import Financing product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
        content: "Momentum Credit – Motor Import Financing",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "With just 25%, the Motor Import Financing product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
      formSubmitted: "",
      hasScrolledToBottom: false,
      form: {
        source: "motor import financing",
        user_name: "",
        user_phone: "",
        user_email: "",
        vehicle_make: "",
        vehicle_model: "",
        vehicle_color: "",
        year_of_manufacture: "",
        user_budget: "",
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
        self.formSubmitted = true;
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
