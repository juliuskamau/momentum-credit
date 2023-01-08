<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Fast Logbook Loans</h1>
            <h1 class="subtitle">#KeepTheMomentum</h1>
            <p>
              Dial
              <a href="tel:*674#" class="underline hover:text-white">*674#</a> to get a quote
            </p>
            <div class="mt-8">
              <a
                href="#"
                class="btn lg font-bold uppercase text-white"
                v-scroll-to="'#after-header'"
              >Learn More</a>
            </div>
          </div>
        </div>

        <div class="col">
          <form
            method="post"
            class="calculator-form calculator-form-updated"
            id="log-book-loan-form"
            @submit.prevent="submitForm"
          >
            <div class="form-title-wrapper">
              <h5>SUBMIT DETAILS</h5>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label>Loan Amount</label>
                <div>
                  <button
                    type="button"
                    @click="form.loanAmount > rangeLoanAmount.min ? form.loanAmount = form.loanAmount - rangeLoanAmount.steps : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="tel" v-model="amount" required @keyup="amountUpdated($event)" />
                    <span>KES</span>
                  </div>
                  <button
                    type="button"
                    @click="form.loanAmount < rangeLoanAmount.max ? form.loanAmount = form.loanAmount + rangeLoanAmount.steps : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeLoanAmount.max"
                    :min="rangeLoanAmount.min"
                    v-model="form.loanAmount"
                    :step="rangeLoanAmount.steps"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label>Number of Instalments</label>
                <div>
                  <button
                    type="button"
                    @click="form.numberInstallments > rangeNumberInstallments.min ? form.numberInstallments = --form.numberInstallments : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" v-model="form.numberInstallments" required />
                    <span>Months</span>
                  </div>
                  <button
                    type="button"
                    @click="form.numberInstallments < rangeNumberInstallments.max ? form.numberInstallments = ++form.numberInstallments : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeNumberInstallments.max"
                    :min="rangeNumberInstallments.min"
                    v-model="form.numberInstallments"
                    :step="rangeNumberInstallments.steps"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Instalment</label>
                <div>
                  <div class="input-text results">
                    <input type="text" readonly v-model="form.monthlyInstalments" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-row pt-6 pb-4">
              <div class="input-item">
                <label for="user-name">Name*</label>
                <input
                  type="text"
                  id="user-name"
                  v-model="form.user_name"
                  required
                  placeholder="Name"
                  class="w-full"
                />
              </div>
              <div class="input-item">
                <label for="user-email">Email*</label>
                <input
                  type="email"
                  id="user-email"
                  v-model="form.user_email"
                  required
                  placeholder="Email"
                  class="w-full"
                />
              </div>
            </div>

            <div class="input-row pt-1 pb-6">
              <div class="input-item w-full">
                <label for="user-phone">Phone*</label>
                <input
                  type="tel"
                  id="user-phone"
                  v-model="form.user_phone"
                  required
                  placeholder="07XXXXXXX"
                  class="w-full"
                  @focus="phoneIsInvalid = false"
                />
              </div>
              <span
                v-if="phoneIsInvalid"
                class="input-error-message text-sm pt-1 pl-4 text-red-700"
              >Phone number is invalid!</span>
            </div>

            <div class="input-row pt-6 pb-4">
              <div class="input-item">
                <label for="vehicle-make">Vehicle Make*</label>
                <input
                  type="text"
                  id="vehicle-make"
                  v-model="form.vehicle_make"
                  required
                  placeholder="Vehicle Make"
                  class="w-full"
                />
              </div>
              <div class="input-item">
                <label for="user-email">Year of Registration*</label>
                <input
                  type="year_of_registration"
                  id="year_of_registration"
                  v-model="form.year_of_registration"
                  required
                  placeholder="Year of Registration"
                  class="w-full"
                />
              </div>
            </div>

            <div class="p-1 pb-6 px-6 text-center" v-if="formSubmitted">
              <div class="text-sm text-green-700">
                Thank you for your request. One of our representative will get back to you as soon as possible.
                <!-- Your quote is ready to download. Click <a href="#" class="text-yellow">here</a> to download. -->
              </div>
            </div>

            <div class="p-6 text-center" v-if="!formSubmitted">
              <button type="submit" class="uppercase btn submit-btn">
                <strong class="px-6 text-white">GET A QUOTE</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="text-image-grid" id="after-header">
      <div class="section-container">
        <div class="text-col">
          <h3 class="section-title">About Logbook Loans</h3>
          <p>Logbook Loans ("LBL") is a form of financing, whereby the loan advanced is secured against the borrower’s motor vehicle. We can lend up to KES 2,000,000 to help you unlock trapped cash in your car within 24 hours to help meet your personal and business financial needs without selling your car!</p>
          <p class="mb-4">We lend up to 60% of the car's value.</p>
          <nuxt-link
            to="/application/log-book-loans"
            class="btn lg font-bold uppercase text-white"
          >Apply Now</nuxt-link>
        </div>
        <div class="img-col">
          <img src="~/assets/img/about-car-image@2x.png" alt="Logbook Loans" />
        </div>
      </div>
    </section>

    <section class="icons-section">
      <div class="section-container">
        <h3 class="section-title text-center">Benefits of Logbook Loans</h3>
        <div class="icons-container cols-4 title-only">
          <div>
            <img
              src="~/assets/img/money-bag-icon@2x.png"
              alt="Unlock up to 60% of your car’s value to get cash"
            />
            <h4>Unlock up to 60% of your car’s value to get cash</h4>
          </div>
          <div>
            <img
              src="~/assets/img/calendar-icon@2x.png"
              alt="Flexible loan terms of up to 18 months."
            />
            <h4>Flexible loan terms of up to 18 months</h4>
          </div>
          <div>
            <img src="~/assets/img/clock-icon@2x.png" alt="Fast processing within 24 hours" />
            <h4>Fast processing within 24 hours</h4>
          </div>
          <div>
            <img src="~/assets/img/settlement-fee.png" alt="No early settlement fees" />
            <h4>No early settlement fees</h4>
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
                  <span>Original Logbook</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Copy of ID</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>KRA Pin</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <h4>Corporate Application</h4>
              <ul>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Original Logbook</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Certificate of registration/Incorporation</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>KRA Pin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a
            href="#"
            class="btn secondary lg font-bold text-white uppercase"
            v-scroll-to="'#log-book-loan-form'"
          >Apply Now</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LogBookLoand",
  head: {
    title: "Momentum Credit – Logbook Loans",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,credit,smes,LBL,kenya, nairobi,careers,loans,lend,financing,book,logbook,instalments,logbook loans",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Logbook Loans",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Secure cheap Logbook Loans against your car value in 24 hours with low interest repayment rates and flexible loan period of up to 18 months.",
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
        content: "Momentum Credit – Logbook Loans",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Secure cheap Logbook Loans against your car value in 24 hours with low interest repayment rates and flexible loan period of up to 18 months.",
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
        content: "Momentum Credit – Logbook Loans",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Secure cheap Logbook Loans against your car value in 24 hours with low interest repayment rates and flexible loan period of up to 18 months.",
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
      phoneIsInvalid: false,
      amount: null,
      formSubmitted: false,
      rangeLoanAmount: {
        min: 100000,
        max: 2000000,
        steps: 10000,
      },
      rangeNumberInstallments: {
        min: 0,
        max: 18,
        steps: 1,
      },
      form: {
        source: "LBL",
        user_name: "",
        user_phone: "",
        user_email: "",
        vehicle_make: "",
        year_of_registration: "",
        loanAmount: 100000,
        numberInstallments: 18,
        monthlyInstalments: 0,
        principalAmount: 0,
      },
      rangePiecewiseStyle: {},
      rangeBackgroundStyle: {},
      rangeTooltipStyle: {},
      rangeProgressStyle: {},
      fixedAmounts: {
        trackingFeesUpfront: 5000,
        chatterFees: 2450,
        ntsaFees: 5050,
        rate: 0.0645758983572984,
      },
    };
  },
  watch: {
    "form.loanAmount": function (loanAmount) {
      this.amount = this.thousandSeprator(this.form.loanAmount);
      this.hesabu();
    },
    "form.numberInstallments": function (numberInstallments) {
      this.amount = this.thousandSeprator(this.form.loanAmount);
      this.hesabu();
    },
  },
  created() {
    let self = this;

    self.rangeBackgroundStyle = {
      backgroundColor: "#435C5F",
    };
    self.rangeTooltipStyle = {
      backgroundColor: "#E5BA5B",
      borderColor: "#E5BA5B",
    };
    self.rangeProgressStyle = {
      backgroundColor: "#E5BA5B",
    };
    self.rangePiecewiseStyle = {
      backgroundColor: "#E5BA5B",
    };
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");

    //set default currency
    this.amount = this.thousandSeprator(this.form.loanAmount);
    self.hesabu();
  },
  methods: {
    validatePhone(phone) {
      if (
        /^(?:254|\+254|0)?(7(?:(?:[123456789][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/.test(
          phone
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    pmt(
      rate_per_period,
      number_of_payments,
      present_value,
      future_value,
      type
    ) {
      future_value = typeof future_value !== "undefined" ? future_value : 0;
      type = typeof type !== "undefined" ? type : 0;

      if (rate_per_period != 0.0) {
        // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        return (
          -(rate_per_period * (future_value + q * present_value)) /
          ((-1 + q) * (1 + rate_per_period * type))
        );
      } else if (number_of_payments != 0.0) {
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
      }
      return 0;
    },
    hesabu() {
      let self = this;

      if (self.loanAmount <= 0) {
        return;
      }

      if (self.form.numberInstallments <= 1) {
        return;
      }

      let processingFees = parseInt(
        (4 / 100) * self.form.loanAmount
      ); /* 4% of Loan Amount */
      let CreditLifeInsurance = parseInt(
        (0.3 / 100) * self.form.loanAmount
      ); /* 0.3% of Loan Amount */

      let principalAmount =
        parseInt(self.form.loanAmount) +
        parseInt(processingFees) +
        parseInt(self.fixedAmounts.trackingFeesUpfront) +
        parseInt(self.fixedAmounts.chatterFees) +
        parseInt(self.fixedAmounts.ntsaFees) +
        parseInt(CreditLifeInsurance);

      let pmt =
        self.pmt(
          self.fixedAmounts.rate,
          self.form.numberInstallments,
          principalAmount
        ) * -1;

      let results = Math.ceil(pmt + parseInt(2000)).toFixed(0);

      self.form.monthlyInstalments = results
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      console.log(`Processing Fees ${processingFees}`);
      console.log(`Tracking Fees ${self.fixedAmounts.trackingFeesUpfront}`);
      console.log(`Chattel Fees ${self.fixedAmounts.chatterFees}`);
      console.log(`NTSA Fees ${self.fixedAmounts.ntsaFees}`);
      console.log(`Credit Life Insurance ${CreditLifeInsurance}`);
      console.log(`Principal Amount ${principalAmount}`);
    },
    submitForm() {
      let self = this;
      if (self.form.loanAmount <= 0) {
        return;
      }

      if (!self.validatePhone(self.form.user_phone)) {
        self.phoneIsInvalid = true;
        return;
      }

      if (self.form.numberInstallments < 1) {
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

      self.$gtm.push({ event: "onLBLFormSubmitted" });
    },
    amountUpdated(e) {
      let self = this;
      let str = e.target.value;

      if (str.length < 1) {
        return;
      }

      //let's make there are no commas
      let strSafe = str.replace(/,/g, "");

      //let's make sure it's an int
      let value = parseInt(strSafe);

      if (value <= this.rangeLoanAmount.min || value == null) {
        return;
      }

      setTimeout(function () {
        self.form.loanAmount = value;
        self.amount = self.thousandSeprator(value);
      }, 200);
    },
    thousandSeprator(amount) {
      if (
        amount !== "" ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== "0" ||
        amount !== null
      ) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return amount;
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
