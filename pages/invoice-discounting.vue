<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-invoice-factoring"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Invoice Discounting</h1>
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
            class="calculator-form calculator-form-updated"
            id="invoice-factoring-form"
            @submit.prevent="submitForm"
          >
            <div class="form-title-wrapper">
              <h5>SUBMIT DETAILS</h5>
            </div>
            <div class="radio-group">
              <div class="radio-wrapper">
                <div class="radio-item">
                  <label for="client-new">New Client</label>
                  <input
                    type="radio"
                    id="client-new"
                    value="new-client"
                    v-model="form.facilityType"
                  />
                </div>
                <div class="radio-item">
                  <label for="client-repeat">Repeat</label>
                  <input type="radio" id="client-repeat" value="repeat" v-model="form.facilityType" />
                </div>
              </div>
            </div>
            <div class="input-group pt-6">
              <div class="input-container">
                <label>Invoice</label>
                <div>
                  <button
                    type="button"
                    @click="form.invoice > rangeInvoice.min ? form.invoice = form.invoice - rangeInvoice.steps : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" v-model="amount" required @keyup="amountUpdated($event)" />
                    <span>KES</span>
                  </div>
                  <button
                    type="button"
                    @click="form.invoice < rangeInvoice.max ? form.invoice = form.invoice + rangeInvoice.steps : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeInvoice.max"
                    :min="rangeInvoice.min"
                    :step="rangeInvoice.steps"
                    v-model="form.invoice"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                    :formatter="rangeFormatter"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label>Number of Days Outstanding</label>
                <div>
                  <button
                    type="button"
                    @click="form.days > rangeDays.min ? form.days = --form.days : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" required v-model="form.days" />
                    <span>Days</span>
                  </div>
                  <button
                    type="button"
                    @click="form.days < rangeDays.max ? form.days = ++form.days : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeDays.max"
                    :min="rangeDays.min"
                    :step="rangeDays.steps"
                    v-model="form.days"
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
                <label class="calc-results-label">Discount Amount</label>
                <div>
                  <div class="input-text results">
                    <input readonly type="text" v-model="form.discount" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Disbursed Amount</label>
                <div>
                  <div class="input-text results">
                    <input readonly type="text" v-model="form.disbursed" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Total Interest Payable</label>
                <div>
                  <div class="input-text results">
                    <input readonly type="text" v-model="form.interest" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div v-if="form.facilityType == 'new-client'" class="form-note">
              <em>Kindly Note a First Time Fee of Kes 30,000 is charged for New Clients</em>
            </div>-->
            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  class="w-full"
                  v-model="form.user_name"
                />
              </div>
            </div>
            <div class="input-row pt-6 pb-6">
              <div class="input-item">
                <label>Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="Phone"
                  class="w-full"
                  v-model="form.user_phone"
                  @focus="phoneIsInvalid = false"
                />
              </div>
              <div class="input-item">
                <label>Email</label>
                <input type="email" required placeholder="Email" v-model="form.user_email" />
              </div>
            </div>

            <span
              v-if="phoneIsInvalid"
              class="input-error-message text-sm pt-1 pl-4 text-red-700 block text-center"
            >Phone number is invalid!</span>

            <div class="p-1 pb-6 px-6 text-center" v-if="formSubmitted">
              <div
                class="text-sm text-green-700"
              >Thank you for your request. One of our representative will get in touch with you as soon as possible.</div>
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
          <h3 class="section-title">About Invoice Discounting</h3>
          <p>Invoice Discounting is a business financing facility where businesses are able to sell their outstanding invoices to a Factor so as to get a cash advance of up to 85% of the invoice value.</p>
          <p
            class="mb-4"
          >Invoice Financing provides fast working capital of up to 85% of your outstanding invoice value with a repayment plan of up to 90 days</p>

          <a href="#" class="btn lg font-bold uppercase text-white">GET QUOTE</a>
        </div>
        <div class="img-col">
          <img src="~/assets/img/invoice-factoring-image-2x.png" alt="About Invoice Discounting" />
        </div>
      </div>
    </section>

    <section class="icons-section hidden">
      <div class="section-container">
        <h3 class="section-title text-center">Why Choose Us</h3>
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
        <h3 class="section-title text-center">Benefits of Invoice Discounting</h3>
        <div class="icons-container cols-4">
          <div class="hidden">
            <img
              src="~/assets/img/money-icon@2x.png"
              alt="Helps client to get insurance even without the whole premium amount at hand."
            />
            <h4 class>Improves operating cash</h4>
            <p class>
              flows improves your
              business’ cash flow
              predictability and increases
              your long term borrowing
              capacity even from banks
            </p>
          </div>
          <div>
            <img src="~/assets/img/notebook-icon@2x.png" alt="Flexible repayments over 11 months" />
            <h4 class>Does not register as debt</h4>
            <p
              class
            >Unlike a traditional loan or overdraft facility, Invoice Discounting is not booked as a "debt" but rather the sale of a receivable thus does not interfere with other credit arrangements</p>
          </div>
          <div>
            <img src="~/assets/img/credit-card-icon@2x.png" alt="Fast processing within 24 hours" />
            <h4 class>Aligned credit growth</h4>
            <p
              class
            >The amount of financing you can access increases as your sales grow, thus providing you with comfort that you have access to continuous, growing amounts of working capital as your business grows</p>
          </div>
          <div>
            <img src="~/assets/img/graph-icon@2x.png" alt="Fast processing within 24 hours" />
            <h4 class>Revolving credit line</h4>
            <p class>Provides flexibility in adapting to your changing business cycles</p>
          </div>
          <div>
            <img src="~/assets/img/settlement-fee-2.png" alt="No early settlement fees" />
            <h4>No early settlement fees</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="m-blue-bg">
      <div class="section-container">
        <h3 class="section-title text-center">Application Requirements</h3>

        <div class="card-grid">
          <div class="card-wrapper">
            <div class="card">
              <ul>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Completed Application Form</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Copy of Directors National Identity Card Copy of Director’s KRA PIN and company KRA PIN</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Certificate of Incorporation/Registration</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>CR12 (issued within the last 6 months) or copy of annual returns of the previous year</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <ul>
                <li>
                  <img
                    src="~/assets/img/star@2x.png"
                    alt="Business Permit and other relevant practice licenses)"
                  />
                  <span>Business Permit and other relevant practice licenses)</span>
                </li>
                <li>
                  <img
                    src="~/assets/img/star@2x.png"
                    alt="Others: Partnership Deed (LLP, Limited Partnership)"
                  />
                  <span>Others: Partnership Deed (LLP, Limited Partnership)</span>
                </li>
                <li>
                  <img
                    src="~/assets/img/star@2x.png"
                    alt="6  months Bank statements for all company bank accounts."
                  />
                  <span>6 months Bank statements for all company bank accounts.</span>
                </li>
                <li>
                  <img
                    src="~/assets/img/star@2x.png"
                    alt="3 sample invoices sent to each targeted factoring customer in the past 12 months)"
                  />
                  <span>3 sample invoices sent to each targeted factoring customer in the past 12 months)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center" v-scroll-to="'#invoice-factoring-form'">
          <a href="#" class="btn secondary lg font-bold text-white uppercase">Apply Now</a>
        </div>
      </div>
    </section>

    <section class>
      <div class="section-container">
        <h3 class="section-title text-center">FAQs</h3>

        <div class="faq-container">
          <div class="row">
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 1">Who is eligible for the facility?</a>

            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 1">
                <p>Any business that engages in credit transactions; As long a the buyer of the Good/service has been approved and Momentum is able to confirm with your buyer that the good/service has been provided and invoice is due for payment.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 2">How much can one borrow?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 2">
                <p>Your limit is determined by the size of the business you have, Minimum invoice amount is KES 50,000.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 3">What are the charges for the facility?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 3">
                <p>There is a once off on-boarding charge of KES 30,000 that is recovered from the first invoice that you Factor. Interest for each invoice factored is calculated based on the number of days between when invoice is Factored and the maturity date of the invoice.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 4"
            >Do you finance the whole amount of the invoice?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 4">
                <p>We finance up to 85% of the invoice amount, depending on credit days contained in the invoice.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 5">What is the tenure of the facility?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 5">
                <p>Facility is extended for a 12 month period but is reviewed periodically depending on business need.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 6"
            >How long can the receivable remain outstanding for?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 6">
                <p>Up to 90 days.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 7"
            >How long does it take to on-board clients?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 7">
                <p>Less than 7 days.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 8"
            >How long does it take to factor an invoice?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 8">
                <p>We advance money within 24 hours of receipt of an invoice and its supporting documentation.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 9">What happens if the invoice defaults?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 9">
                <p>We build up escrow reserves for each client to safeguard all parties from such an event.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 10">What is used to secure the facility?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 10">
                <p>The facility is unsecured. No property is required to cover the borrowing.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 11"
            >How does Momentum Credit recover the money from our buyers?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 11">
                <p>Through a Momentum Credit nominated joint account, in which all called invoices should be paid to</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 12"
            >Who will collect the debt from my customers?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 12">
                <p>It is the client’s responsibility to collect invoices within the stipulated terms of trade. Momentum Credit shall only get involved once payment is late.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 13">Does it matter who our customer is?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 13">
                <p>Yes. All customers must be pre-approved before processing any invoices.</p>
              </div>
            </transition>
          </div>
</div>
          <!-- FAQs -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "INVOICE",
  head: {
    title: "Momentum Credit – Invoice Financing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,credit,smes,invoice,factoring,invoice facting requirements,faqs,borrow,lend,financing,loans,payments",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Invoice Financing",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Invoice Financing provides fast working capital of up to 85% of your outstanding invoice value with a repayment plan of up to 90 days",
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
        content: "Momentum Credit – Invoice Financing",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Invoice Financing provides fast working capital of up to 85% of your outstanding invoice value with a repayment plan of up to 90 days.",
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
        content: "Momentum Credit – Invoice Financing",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Invoice Financing provides fast working capital of up to 85% of your outstanding invoice value with a repayment plan of up to 90 days",
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
      faq: 1,
      amount: null,
      phoneIsInvalid: false,
      rangePiecewiseStyle: {},
      rangeBackgroundStyle: {},
      rangeTooltipStyle: {},
      rangeProgressStyle: {},
      formSubmitted: false,
      rangeFormatter: null,
      rangeInvoice: {
        max: 2000000,
        min: 0,
        steps: 5000,
      },
      rangeDays: {
        max: 31,
        min: 0,
        steps: 1,
      },
      rangeInputs: {
        invoice: 1000000,
      },
      form: {
        source: "Invoice Factoring",
        user_name: "",
        user_phone: "",
        user_email: "",
        facilityType: "new-client",
        invoice: 1000000,
        days: 31,
        discount: 0,
        disbursed: 0,
        interest: 0,
        minimumInterest: 5000,
      },
    };
  },
  watch: {
    "rangeInputs.invoice": function (value) {
      return 125000;
    },
    "form.facilityType": function () {
      this.amount = this.thousandSeprator(this.form.invoice);
      this.hesabu();
    },
    "form.invoice": function () {
      this.amount = this.thousandSeprator(this.form.invoice);
      this.hesabu();
    },
    "form.days": function () {
      this.amount = this.thousandSeprator(this.form.invoice);
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

    //format range currency tooltip
    self.rangeFormatter = (v) => {
      if (v) {
        return parseFloat(v).toLocaleString();
      }
    };
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");

    //set default currency
    this.amount = this.thousandSeprator(this.form.invoice);

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
    hesabu() {
      let self = this;

      if (self.form.invoice < 50000) {
        return;
      }

      let discount_ = parseInt(self.form.invoice * 0.8).toFixed(0);

      self.form.discount = parseInt(discount_).toLocaleString();

      let disbursed_;

      if (self.form.facilityType === "new-client") {
        disbursed_ = (parseInt(discount_) - parseInt(30000)).toFixed(0);
      } else {
        disbursed_ = parseInt(discount_).toFixed(0);
      }

      self.form.disbursed = parseInt(disbursed_).toLocaleString();

      /* Should not be less than 50000 */
      //let rate = 0.167 / 100;
      let rate = 0.133 / 100;
      let payableInterest = discount_ * rate * self.form.days;
      let interest_;
      /* Make sure interest is greater than 5 */
      if (payableInterest < self.form.minimumInterest) {
        interest_ = self.form.minimumInterest.toFixed(0);
      } else {
        interest_ = payableInterest.toFixed(0);
      }
      self.form.interest = parseInt(interest_).toLocaleString();
    },
    submitForm() {
      let self = this;
      //self.formSubmitted = true;

      if (!self.validatePhone(self.form.user_phone)) {
        self.phoneIsInvalid = true;
        return;
      }

      this.sendDataToServer();
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

      self.$gtm.push({ event: "OnIFFormSubmitted" });
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

      if (value <= this.rangeInvoice.min || value == null) {
        return;
      }

      setTimeout(function () {
        self.form.invoice = value;
        self.amount = self.thousandSeprator(value);
      }, 300);
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
<style lang="scss" scoped>
.faq-container .faq.large-6{
    margin-right: 10px;
    width: 49%;
    border: #e5ba5b solid 2px;
    border-radius: 10px;
    .quiz{
       //border-bottom: #e5ba5b solid 2px;
      // background-color:white;
       border-radius: 0px;
    }
    .ans{
 padding: 10px;
    }
}
</style>