<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-sahih-product"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Sahih Logbook Financing</h1>
            <h1 class="subtitle">#KeepTheMomentum</h1>
            <div class="mt-8">
              <a
                href="#"
                class="btn lg font-bold uppercase text-white"
                v-scroll-to="'#after-header'"
                >Learn More</a
              >
            </div>
          </div>
        </div>

        <div class="col">
          <form
            class="calculator-form calculator-form-updated"
            id="sahih-logbook-form"
            @submit.prevent="submitForm"
          >
            <div class="form-title-wrapper">
              <h5>SUBMIT DETAILS</h5>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label>Momentum's Purchase Price</label>
                <div>
                  <button
                    type="button"
                    @click="
                      form.momentumPurchasePrice >
                      rangeMomentumPurchasePrice.min
                        ? (form.momentumPurchasePrice =
                            form.momentumPurchasePrice -
                            rangeMomentumPurchasePrice.steps)
                        : 0
                    "
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input
                      type="text"
                      required
                      v-model="amount"
                      @keyup="amountUpdated($event)"
                    />
                    <span>KES</span>
                  </div>
                  <button
                    type="button"
                    @click="
                      form.momentumPurchasePrice <
                      rangeMomentumPurchasePrice.max
                        ? (form.momentumPurchasePrice =
                            form.momentumPurchasePrice +
                            rangeMomentumPurchasePrice.steps)
                        : 0
                    "
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeMomentumPurchasePrice.max"
                    :min="rangeMomentumPurchasePrice.min"
                    :step="rangeMomentumPurchasePrice.steps"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                    v-model="form.momentumPurchasePrice"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label>Rental Period</label>
                <div>
                  <button
                    type="button"
                    @click="
                      form.rentalPeriods > rangeRentalPeriods.min
                        ? (form.rentalPeriods = --form.rentalPeriods)
                        : 0
                    "
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" required v-model="form.rentalPeriods" />
                    <span>Months</span>
                  </div>
                  <button
                    type="button"
                    @click="
                      form.rentalPeriods < rangeRentalPeriods.max
                        ? (form.rentalPeriods = ++form.rentalPeriods)
                        : 0
                    "
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="rangeRentalPeriods.max"
                    :min="rangeRentalPeriods.min"
                    :step="rangeRentalPeriods.steps"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                    v-model="form.rentalPeriods"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>
            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Purchase Price</label>
                <div>
                  <div class="input-text results">
                    <input
                      type="text"
                      readonly
                      v-model="form.totalPurchasePrice"
                    />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Monthly Rental</label>
                <div>
                  <div class="input-text results">
                    <input type="text" required v-model="form.monthlyRentals" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-row pt-6 pb-4">
              <div class="input-item">
                <label>Name</label>
                <input
                  type="text"
                  v-model="form.user_name"
                  required
                  placeholder="Name"
                />
              </div>
              <div class="input-item">
                <label>Email</label>
                <input
                  type="email"
                  v-model="form.user_email"
                  required
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="input-row pt-1 pb-6">
              <div class="input-item w-full">
                <label>Phone</label>
                <input
                  type="tel"
                  v-model="form.user_phone"
                  required
                  placeholder="Phone"
                  class="w-full"
                  @focus="phoneIsInvalid = false"
                />
              </div>
            </div>

            <span
              v-if="phoneIsInvalid"
              class="input-error-message text-sm pt-1 pl-4 text-red-700 block text-center"
              >Phone number is invalid!</span
            >

            <div class="p-1 pb-6 px-6 text-center" v-if="formSubmitted">
              <div class="text-sm text-green-700">
                Thank you for your application. One of our representative will
                get in touch with you as soon as possible.
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
          <h3 class="section-title">Sahih Logbook Financing</h3>
          <p>
            Sahih Logbook Financing is a shariah compliant product whereby
            Momentum purchases your vehicle when you need funds then leases it
            back to you for a specified period of time.
          </p>
          <p class="mb-4">
            At the end of the lease period the vehicle is gifted back to you.
          </p>
          <nuxt-link
            to="/application/sahih-logbook-financing"
            class="btn lg font-bold uppercase text-white"
            >GET A QUOTE</nuxt-link
          >
        </div>
        <div class="img-col">
          <img
            src="~/assets/img/sahih/sahih-image@2x.png"
            alt="Sahih Logbook Financing"
          />
        </div>
      </div>
    </section>

    <section class="icons-section">
      <div class="section-container">
        <h3 class="section-title text-center">
          Benefits of Sahih Logbook Financing
        </h3>
        <div class="icons-container cols-4 title-only">
          <div>
            <img
              src="~/assets/img/sahih/money-icon@2x.png"
              alt="Helps client to get insurance even without the whole premium amount at hand."
            />
            <h4>Flexible Rental Payments of up to 18 Months</h4>
          </div>
          <div>
            <img src="~/assets/img/sahih/risk-free.png" alt="Risk Sharing" />
            <h4>Risk Sharing</h4>
          </div>
          <div>
            <img
              src="~/assets/img/sahih/interest-free.png"
              alt="Interest Free"
            />
            <h4>Interest Free</h4>
          </div>
          <div>
            <img
              src="~/assets/img/clock-icon@2x.png"
              alt="Purchase price is received within 24 hours of all documents being processed"
            />
            <h4>
              Facility Amount is received within 24 hours of all documents being
              processed
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
                  <img src="~/assets/img/star@2x.png" alt="Original Logbook" />
                  <span>Original Logbook</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt="Copy of ID" />
                  <span>Copy of ID</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt="KRA Pin" />
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
          <nuxt-link
            to="/application/sahih-logbook-financing"
            class="btn secondary lg font-bold text-white uppercase"
            >GET A QUOTE</nuxt-link
          >
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="section-container">
        <h3 class="section-title text-center">FAQs</h3>

        <div class="faq-container">
          <div class="row">
            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 1"
                >What is shariah?</a
              >

              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 1">
                  <p>
                    Shari'ah means a way or path. In Islam, Shari'ah refers to
                    the divine guidance & laws as given by the Holy Quran, the
                    Hadith (sayings) and the Sunnah of the Prophet Muhammad
                    (Peace Be Upon Him).
                  </p>
                  <p>
                    <strong
                      >What are the main principles of Islamic Finance?</strong
                    >
                  </p>
                  <ul>
                    <li>Islamic Commercial Laws.</li>
                    <li>
                      The Prohibition of Riba which is the taking or receiving
                      of interest.
                    </li>
                    <li>Linked to real Asset.</li>
                    <li>
                      The prohibition of speculative behavior (Gharar), which
                      means that gambling (Maysir) and extreme uncertainty is
                      prohibited and consequently, contractual obligations and
                      disclosure of information are central obligations to
                      financial business transactions
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 2">
                How can Momentum Sahih and Sahih Logbook financing be considered
                Islamic?
              </a>
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 2">
                  <p>
                    Momentum sahih has not only developed Shari’ah-compliant
                    logbook financing but it has adopted an end to end Shari’ah
                    process. The shariah logbook financing processes are
                    approved and certified by the Momentum sahih independent
                    Shari’ah Supervisory Board comprising of eminent scholars in
                    the field of Islamic finance:
                  </p>
                  <ul>
                    <li>Sheikh Khalfan Abdallah.</li>
                    <li>Sheikh Ali Mahmoud.</li>
                    <li>Professor Mohammed Salim Badamana.</li>
                  </ul>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 3"
                >How can a conventional Financial institution offer Islamic
                finance services?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 3">
                  <p>
                    Conventional financial institutions can sell
                    Shari’ah-compliant products because Islamic law does not
                    require that the seller of the product be Muslim or that its
                    other services also be Islamic. It does require that the
                    product or service be in compliance with Shari’ah
                    guidelines.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 4"
                >What is Islamic finance and is there a difference from the
                conventional finance</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 4">
                  <p>
                    Islamic finance is an interest free finance system. It is
                    asset based as opposed to currency based. A deal is
                    structured on exchange or ownership of assets and money is
                    simply the payment mechanism to effect the transaction. The
                    basic framework of Islamic finance is based on elements of
                    Shari'ah, which governs Islamic societies. The major
                    difference between Islamic finance and conventional finance
                    is that Islam teaches us that money itself has no intrinsic
                    value and forbids people from profiting by lending the money
                    without accepting any level of risk.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 5"
                >What is Riba or Interest?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 5">
                  <p>
                    Riba literally means increase, addition, expansion or
                    growth. It is however, not every increase or growth which
                    has been prohibited by Islam. In Shari'ah, Riba technically
                    refers to the premium that must be paid on a financial
                    transaction without any consideration.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 6"
                >Surely, are you just charging interest and dressing it up with
                something else?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 6">
                  <p>
                    No. We participate in the risk of transaction and
                    accordingly earn profit. Interest is fixed and does not
                    require participation in risk. The fact that the profits we
                    make through trade and share with customers are similar to
                    interest rates is because we operate in a conventional
                    economic environment. The safest and best way for you to
                    judge is to check the value of what you would receive from
                    conventional financial institutions. We make every effort to
                    remain competitive so that our customers are not penalized
                    by banking in a way that is true to their faith.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 7"
                >Is Sahih logbook financing only for muslim?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 7">
                  <p>
                    No. Shariah logbook financing is available to anyone who may
                    wish to use interest free banking. Anyone of any religious
                    background is welcome to apply for the products at momentum
                    credit.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 8"
                >What are the sources of Islamic Shari'ah?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 8">
                  <p>
                    No. We participate in the risk of transaction and
                    accordingly earn profit. Interest is fixed and does not
                    require participation in risk. The fact that the profits we
                    make through trade and share with customers are similar to
                    interest rates is because we operate in a conventional
                    economic environment. The safest and best way for you to
                    judge is to check the value of what you would receive from
                    conventional financial institutions. We make every effort to
                    remain competitive so that our customers are not penalized
                    by banking in a way that is true to their faith.
                  </p>
                  <ul>
                    <li>The Holy Quran.</li>
                    <li>The Sunnah of the Holy Prophet (Peace Be Upon Him).</li>
                    <li>Ijma' (consensus of the Ummah).</li>
                    <li>Qiyas (Analogy).</li>
                  </ul>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 9"
                >Is interest only prohibited in Islam only?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 9">
                  <p>
                    Prohibition of interest is not limited to Islam. It is also
                    prohibited in Judaism and Christianity - for reference see
                    Exodus 22:25, Leviticus 25:35-36, Deuteronomy 23:19, Psalms
                    15:5, Proverbs 28:8, Nehemiah 5:7 and Ezekiel 18:8,13,17 &
                    22:12.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 10"
                >Why is Riba (interest) forbidden?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 10">
                  <p>
                    During the time of the Prophet Muhammed, many people gained
                    from lending money at exorbitant rates, thereby gaining from
                    the misfortune of others. As a result, the payment of
                    interest was forbidden in Islam because it was unjust.
                  </p>
                  <p>
                    Islam teaches that money should be used in a useful way. You
                    cannot make money from money, but you can generate wealth
                    through legitimate trade in goods and items. The risks and
                    rewards must however be shared
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 11"
                >What is Sahih Logbook Financing? And how does it work?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 11">
                  <p>
                    Sahih Logbook Financing Facility is a leasing facility
                    whereby Momentum Credit Limited (“Momentum”) purchases a
                    motor vehicle belonging to Customer who is need of funds,
                    pays the Customer an agreed amount of money, then leases out
                    the motor vehicle back to the Customer (lessee) for a
                    specified duration of time. Customer will then use the motor
                    vehicle the same way they had been using it before while
                    paying back to Momentum, specified monthly rental amounts.
                  </p>
                  <p>
                    At the end of the lease period and on completion of payment
                    of the last monthly rental payment in full, the motor
                    vehicle will be gifted and transferred back to the Customer
                    by Momentum and the original logbook handed back to the
                    Customer.
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 12"
                >What is The Shariah Concept Applicable?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 12">
                  <p>
                    The Shari’ah concept applied to this Logbook Financing
                    Facility is Ijarah Muntahia Bitamleek. ▪ Ijarah refers to
                    leasing of assets whereby a financier such as Momentum (as
                    lessor), purchases an identified asset from a Customer and
                    then leases out the asset back to the Customer or lessee at
                    an agreed rental payment and pre-determined lease period
                    upon the ‘aqd’ (contract). The ownership of the asset
                    remains with the lessor while the lessee only owns the right
                    to use the asset. At the end of the lease period and
                    completion of payment of the last monthly rental payment,
                    the lessor (such as Momentum) transfers back the asset to
                    the lessee (the Customer) by way of ‘Hibah’ (gift).
                  </p>
                </div>
              </transition>
            </div>

            <div class="faq large-6">
              <a href="#" class="quiz" @click.prevent="faq = 13"
                >Is interest only prohibited in Islam only?</a
              >
              <transition name="fade" mode="out-in">
                <div class="ans" v-if="faq == 13">
                  <p>
                    Prohibition of interest is not limited to Islam. It is also
                    prohibited in Judaism and Christianity - for reference see
                    Exodus 22:25, Leviticus 25:35-36, Deuteronomy 23:19, Psalms
                    15:5, Proverbs 28:8, Nehemiah 5:7 and Ezekiel 18:8,13,17 &
                    22:12.
                  </p>
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
  name: "IPF",
  layout: "sahih",
  head: {
    title: "Sahih Logbook Financing - Momentum Sahih",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,sharia,logbook,Sahih,financing,book,fatwa,logbook,muslims financing,interest,credit, kenya, nairobi"
      },
      {
        hid: "title",
        name: "title",
        content: "Sahih Logbook Financing - Momentum Sahih"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Sahih Logbook Financing is a shariah compliant product whereby Momentum purchases your vehicle when you need funds then leases it back to you for a specified period of time."
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
        content: "Sahih Logbook Financing - Momentum Sahih"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Sahih Logbook Financing is a shariah compliant product whereby Momentum purchases your vehicle when you need funds then leases it back to you for a specified period of time."
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
        content: "Sahih Logbook Financing - Momentum Sahih"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Sahih Logbook Financing is a shariah compliant product whereby Momentum purchases your vehicle when you need funds then leases it back to you for a specified period of time."
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
    ]
  },
  data() {
    return {
      counter: 0,
      faq: 1,
      ezuachapaa: "",
      amount: null,
      phoneIsInvalid: false,
      formSubmitted: false,
      rangePiecewiseStyle: {},
      rangeBackgroundStyle: {},
      rangeTooltipStyle: {},
      rangeProgressStyle: {},
      formSubmitted: false,
      rangeMomentumPurchasePrice: {
        min: 100000,
        max: 2000000,
        steps: 10000
      },
      rangeRentalPeriods: {
        min: 0,
        max: 18,
        steps: 1
      },
      form: {
        source: "Sahih Logbook Financing",
        user_name: "",
        user_phone: "",
        user_email: "",
        momentumPurchasePrice: 100000,
        totalPurchasePrice: 0,
        rentalPeriods: 12,
        monthlyRentals: 0
      },

      fixedAmounts: {
        trackingFeesUpfront: 5000,
        chattelFees: 2450,
        ntsaFees: 5050,
        takefulCreditLife: 300,
        rate: 0.06491
      }
    };
  },
  watch: {
    "form.momentumPurchasePrice": function() {
      this.amount = this.thousandSeprator(this.form.momentumPurchasePrice);
      this.hesabu();
    },
    "form.rentalPeriods": function() {
      this.amount = this.thousandSeprator(this.form.momentumPurchasePrice);
      this.hesabu();
    }
  },
  created() {
    let self = this;

    self.rangeBackgroundStyle = {
      backgroundColor: "#435C5F"
    };
    self.rangeTooltipStyle = {
      backgroundColor: "#E5BA5B",
      borderColor: "#E5BA5B"
    };
    self.rangeProgressStyle = {
      backgroundColor: "#E5BA5B"
    };
    self.rangePiecewiseStyle = {
      backgroundColor: "#E5BA5B"
    };
  },
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");

    //set default currency
    this.amount = this.thousandSeprator(this.form.momentumPurchasePrice);

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
      //let takefulCreditLife = (0.3 / 100) * self.form.momentumPurchasePrice;
      let financingStudyFees = (4 / 100) * self.form.momentumPurchasePrice;
      let takefulCreditLife = (0.3 / 100) * self.form.momentumPurchasePrice;

      let purchasePrice =
        parseInt(self.form.momentumPurchasePrice) +
        parseInt(financingStudyFees) +
        parseInt(self.fixedAmounts.trackingFeesUpfront) +
        parseInt(self.fixedAmounts.chattelFees) +
        parseInt(self.fixedAmounts.ntsaFees) +
        parseInt(takefulCreditLife);

      self.form.totalPurchasePrice = parseInt(purchasePrice).toLocaleString();

      let pmt =
        self.pmt(
          self.fixedAmounts.rate,
          self.form.rentalPeriods,
          purchasePrice
        ) * -1;

      let results = Math.ceil(pmt + parseInt(2000)).toFixed(0);

      self.form.monthlyRentals = results
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    submitForm() {
      let self = this;
      if (self.form.momentumPurchasePrice <= 0) {
        return;
      }

      if (self.form.rentalPeriods <= 1) {
        return;
      }

      if (!self.validatePhone(self.form.user_phone)) {
        self.phoneIsInvalid = true;
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
          Authorization: "Bearer " + process.env.API_API
        }
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

      self.$gtm.push({ event: "OnSahihFormSubmitted" });
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

      if (value <= this.rangeMomentumPurchasePrice.min || value == null) {
        return;
      }

      setTimeout(function() {
        self.form.momentumPurchasePrice = value;
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
    }
  }
};
</script>


<style lang="scss" scoped>
.faq ul li {
  list-style: inherit;
}
.faq ul {
  margin-left: 20px;
  list-style: inherit;
}
.row {
  display: flex;
  flex-flow: row wrap;
}
.faq-container .faq.large-6 {
  margin-right: 10px;
  width: 49%;
  border: #e5ba5b solid 2px;
  border-radius: 10px;
  .quiz {
    //border-bottom: #e5ba5b solid 2px;
    // background-color:white;
    border-radius: 0px;
  }
  .ans {
    padding: 10px;
  }
}
</style>
