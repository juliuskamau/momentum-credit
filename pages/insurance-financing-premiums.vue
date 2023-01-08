<template>
  <div class="page-container" id="top-container">
    <div class="product-intro">
      <div class="header-bg header-ipf"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Insurance Premium Financing</h1>
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
            id="insurance-premium-form"
            @submit.prevent="submitForm()"
          >
            <div class="form-title-wrapper">
              <h5>SUBMIT DETAILS</h5>
            </div>

            <div class="input-row pt-6 pb-4">
              <div class="input-item">
                <label for="vehicleType">Vehicle Class</label>
                <select v-model="form.vehicleType" id="vehicleType">
                  <option
                    :value="index"
                    v-for="(vehicle, index) in vehicleClass"
                    :key="index"
                  >{{vehicle}}</option>
                </select>
              </div>
              <div class="input-item">
                <label for="typeOfCove">Type of Cover</label>
                <select v-model="form.coverType" id="typeOfCover">
                  <option value="Comprehensive">Comprehensive</option>
                  <option value="Third Party Only">Third Party Only</option>
                </select>
              </div>
            </div>

            <div class="input-group px-6 py-2 hidden">
              <div class="bg-white">
                <button
                  class="p-4 py-3 pointer block w-full border relative flex justify-center items-center"
                  type="button"
                  @click="showAddOns =  !showAddOns"
                >
                  Add Ons
                  <span :class="{'icon-caret':true, 'up':showAddOns}"></span>
                </button>
                <div class="p-4" v-if="showAddOns">
                  <div class="flex items-center mb-2">
                    <input
                      type="checkbox"
                      v-model="form.excessWaiver"
                      id="excess-waiver"
                      class="mr-3"
                    />
                    <label for="excess-waiver">Excess Waiver/Protector</label>
                  </div>
                  <div class="flex items-center mb-2">
                    <input type="checkbox" v-model="form.pvts" id="pvts" class="mr-3" />
                    <label for="pvts">PVTS</label>
                  </div>
                  <div class="flex items-center mb-2">
                    <input type="checkbox" v-model="form.roadRescue" id="road-rescue" class="mr-3" />
                    <label for="road-rescue">Road Rescue</label>
                  </div>
                  <div class="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="personal-accident"
                      v-model="form.personalAccident"
                      class="mr-3"
                    />
                    <label for="personal-accident">Personal Accident</label>
                  </div>
                  <div class="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="personal-accident"
                      style="pointer-events: none;"
                      readonly
                      :checked="form.courtesyCar == '10' || form.courtesyCar ==  '21'"
                      class="mr-3"
                    />
                    <label for="courtesy-car" class="mr-3">Courtesy Car</label>
                    <select v-model="form.courtesyCar" class="border border-gray-600 rounded-sm">
                      <option value="No">No</option>
                      <option value="10">10 Days</option>
                      <option value="21">21 Days</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group">
              <div class="input-container">
                <label>Sum Insured</label>
                <div>
                  <button
                    type="button"
                    @click="form.sumInsured > 0 ? form.sumInsured = form.sumInsured - 10000 : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" v-model="amount" required @keyup="amountUpdated($event)" />
                    <span>KES</span>
                  </div>
                  <button
                    type="button"
                    @click="form.sumInsured < 10000000 ? form.sumInsured = form.sumInsured + 10000 : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="10000000"
                    :min="0"
                    :step="10000"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                    v-model="form.sumInsured"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>

            <div class="input-group pt-6">
              <div class="input-container">
                <label>Number of Instalments</label>
                <div>
                  <button
                    type="button"
                    @click="form.numberOfInstalments > 0 ? form.numberOfInstalments = --form.numberOfInstalments : 0"
                  >
                    <img src="~/assets/img/input-minus.png" alt="Minus" />
                  </button>
                  <div class="input-text">
                    <input type="text" v-model="form.numberOfInstalments" required />
                    <span>{{activePaymentFrequnecy}}</span>
                  </div>
                  <button
                    type="button"
                    @click="form.numberOfInstalments < activeMaxLoanTerms ? form.numberOfInstalments = ++form.numberOfInstalments : 0"
                  >
                    <img src="~/assets/img/input-add.png" alt="Add" />
                  </button>
                </div>
              </div>
              <div class="input-range-container">
                <no-ssr>
                  <vue-range-slider
                    :max="activeMaxLoanTerms"
                    :min="0"
                    :step="1"
                    :bg-style="rangeBackgroundStyle"
                    :tooltip-style="rangeTooltipStyle"
                    :process-style="rangeProgressStyle"
                    :piecewise-style="rangePiecewiseStyle"
                    v-model="form.numberOfInstalments"
                  ></vue-range-slider>
                </no-ssr>
              </div>
            </div>

            <div class="input-group pt-6">
              <div class="input-container">
                <label class="calc-results-label">Basic Premium</label>
                <div>
                  <div class="input-text results">
                    <input readonly type="text" value="0.00" required v-model="form.basicPremium" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Instalment</label>
                <div>
                  <div class="input-text results">
                    <input
                      readonly
                      type="text"
                      value="0.00"
                      required
                      v-model="form.amountPerInstalment"
                    />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-group">
              <div class="input-container">
                <label class="calc-results-label">Deposit</label>
                <div>
                  <div class="input-text results">
                    <input readonly type="text" value="0.00" required v-model="form.deposit" />
                    <span>KES</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Name</label>
                <input
                  type="text"
                  v-model="form.user_name"
                  required
                  placeholder="Name"
                  class="w-full"
                />
              </div>
            </div>

            <div class="input-row pt-6 pb-6">
              <div class="input-item">
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
              <div class="input-item">
                <label>Email</label>
                <input
                  type="email"
                  v-model="form.user_email"
                  required
                  placeholder="Email"
                  class="w-full"
                />
              </div>
            </div>

            <span
              v-if="phoneIsInvalid"
              class="input-error-message text-sm pt-1 pl-4 text-red-700 block text-center"
            >Phone number is invalid!</span>

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
          <h3 class="section-title">Insurance Premium Financing</h3>
          <p
            class="mb-4"
          >Deposit 20% and secure insurance premium financing with flexible repayments of up to 11 months with competitive premium rates and affordable interests.  All that is required is an upfront deposit of 20% and the insurance certificate is processed on the same day. We offer flexible repayments of up to 11 months and competitive premium rates at affordable interest rates.</p>
          <nuxt-link
            to="/application/insurance-premium-financing"
            class="btn lg font-bold uppercase text-white"
          >Apply Now</nuxt-link>
        </div>
        <div class="img-col">
          <img src="~/assets/img/ipf-page-image@2x.png" alt="Insurance Premium Financing<" />
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
        <h3 class="section-title text-center">Benefits of Insurance Premium Financing</h3>
        <div class="icons-container cols-4 title-only">
          <div>
            <img
              src="~/assets/img/car-icon@2x.png"
              alt="Only 20% deposit &amp; flexible repayments of up to 11 months."
            />
            <h4>Only 20% deposit &amp; flexible repayments of up to 11 months</h4>
          </div>
          <div>
            <img
              src="~/assets/img/hand-cash-icon@2x.png"
              alt="Market beating premium rates &amp; Interest rates as low as 2% per month"
            />
            <h4>Market beating premium rates &amp; Interest rates as low as 2% per month</h4>
          </div>
          <div>
            <img src="~/assets/img/badge-icon@2x.png" alt="Same day processing" />
            <h4>Same day processing</h4>
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
        <h3 class="section-title text-center">Basic Requirements</h3>

        <div class="card-grid">
          <div class="card-wrapper">
            <div class="card">
              <h4>Individual Application</h4>
              <ul>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Copy of Logbook</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Copy of ID</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>KRA Pin</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Insurance Premium Quote</span>
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
                  <span>Copy of Logbook</span>
                </li>
                <li class>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Certificate of registration/Incorporation</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>KRA Pin</span>
                </li>
                <li>
                  <img src="~/assets/img/star@2x.png" alt />
                  <span>Insurance Premium Quote</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="text-center">
          <!-- <nuxt-link
            to="/application/insurance-premium-financing"
            class="btn secondary lg font-bold text-white uppercase"
          >Apply Now</nuxt-link> -->
          <a
            href="#"
            class="btn secondary lg font-bold text-white uppercase"
            v-scroll-to="'#top-container'"
          >Apply Now</a>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="section-container">
        <h3 class="section-title text-center">FAQs</h3>

        <div class="faq-container">
          <div class="row">
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 1">What is Insurance Premium Financing?</a>

            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 1">
                <p>
                  Insurance premium financing is a facility that allows you to make the required lump sum premium to an
                  insurance company while giving you the benefit of paying-off the amount in instalments to your financier.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 2">Do you finance all types of policies?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 2">
                <p>
                  Being a pioneer product we currently only finance motor vehicles and we are open to exploring the others
                  in the future.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 3"
            >Will you pay the money to me so that I can forward it to the Insurance Company?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 3">
                <p>
                  No. The funds are paid directly to the Insurance Company. Your agent is informed immediately this is done
                  and the same communication is forwarded to you.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 4">Do you charge any extra fees?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 4">
                <p>Yes, a processing fee of 4%.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 5">Will you finance 100% of my premium?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 5">
                <p>No. We finance 80% to a minimum on Kshs. 2,500 and you’ll be required to pay a 20% deposit as a commitment.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 6"
            >What’s the minimum and maximum amount that you can finance?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 6">
                <p>We finance a minimum of Kshs. 2,500, and a maximum of Kshs. 2,000,000.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 7">How do I know how much I’ll be paying?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 7">
                <p>Once you get in touch with one of our agents, you will receive a quotation with the estimated instalments.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 8"
            >What happens if I do not know the market value of my motor vehicle?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 8">
                <p>Your agent will assist you to conduct the valuation with a registered valuer of your preferred insurance company.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 9"
            >Do I require security for the facility?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 9">
                <p>No. The initial 20% deposit paid will be your 'security'</p>
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
            >How long will it take to process the Insurance Certificate/Sticker?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 11">
                <p>Within 2 hours, subject to payment of the 20% deposit and submission of all the required documentation</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 12">What happens if I default?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 12">
                <p>
                  We will give you a seven days’ notice of cancellation of the insurance policies financed upon which we will
                  instruct the insurance company to cancel the policy.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 13"
            >Can my policy be reinstated once cancelled?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 13">
                <p>Yes, the policy can only be reinstated after seven days of cancellation.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 14"
            >What charges are associated with reinstatement?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 14">
                <p>
                  You will be required to clear all arrears, make an advance payment of one instalment and a reinstatement
                  fee of Kshs. 1,000.
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
  head: {
    title: "Momentum Credit – Insurance Premium Financing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,credit,smes,IPF,insurance,kenya,nairobi,premiums,borrow,lend,financing,loans,payments",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Insurance Premium Financing",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Deposit 20% and secure insurance premium financing with flexible repayments of up to 11 months with competitive premium rates and affordable interests. ",
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
        content: "Momentum Credit – Insurance Premium Financing",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Deposit 20% and secure insurance premium financing with flexible repayments of up to 11 months with competitive premium rates and affordable interests. ",
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
        content: "Momentum Credit – Insurance Premium Financing",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Deposit 20% and secure insurance premium financing with flexible repayments of up to 11 months with competitive premium rates and affordable interests. ",
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
      faq: 1,
      formSubmitted: false,
      showAddOns: false,
      rangePiecewiseStyle: {},
      rangeBackgroundStyle: {},
      rangeTooltipStyle: {},
      rangeProgressStyle: {},
      vehicleClass: [
        "Motor Private",
        "Taxi",
        "Motor Commercial Own Goods",
        "Motor Commercial General Cartage",
        "Tuk Tuk",
        "Boda Boda",
      ],
      excessWaiverRates: [0.0025, 0.005, 0.005, 0.005],
      excesWaiverMin: [2500, 5000, 5000, 5000, 0, 0],
      roadRescue: [6960, 0, 0, 0, 0, 0],
      personalAccident: [500, 500, 500, 500, 500, 500],
      paymentFrequnecy: [
        "Monthly",
        "Weekly",
        "Monthly",
        "Monthly",
        "Weekly",
        "Weekly",
      ],
      maxLoanTerms: [11, 52, 11, 11, 27, 27],
      calcMaxLoanTerms: [12, 52, 12, 12, 52, 52],
      ratesByBrian: [
        0.03475,
        0.00811370348,
        0.04304,
        0.03475,
        0.009685082,
        0.009685082,
      ],
      premiumRates: [0.035, 0.05, 0.045, 0.05, 0.05, 0.025],
      premiumMin: [20000, 30175, 30175, 30000, 15108, 0],
      tpoRates: [6000, 7574, 6500, 0, 7574, 6943],
      activeMaxLoanTerms: 11,
      activePaymentFrequnecy: "Monthly",
      activePremiumRates: 0.035,
      form: {
        source: "Insurance Premium Financing",
        user_name: "",
        user_phone: "",
        user_email: "",
        vehicleType: 0,
        coverType: "Comprehensive",
        sumInsured: 50000,
        numberOfInstalments: 11,
        basicPremium: 0,
        amountPerInstalment: 0,
        deposit: 0,
        excessWaiver: false,
        pvts: false,
        roadRescue: false,
        personalAccident: false,
        courtesyCar: "No",
      },
    };
  },
  watch: {
    "form.courtesyCar": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.personalAccident": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.roadRescue": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.pvts": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.excessWaiver": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.vehicleType": function (index) {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      //first we reset the range
      this.form.numberOfInstalments = 1;

      this.activeMaxLoanTerms = this.maxLoanTerms[index];
      this.activePaymentFrequnecy = this.paymentFrequnecy[index];
      this.activePremiumRates = this.premiumRates[index];

      this.hesabu();
    },
    "form.coverType": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.sumInsured": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
      this.hesabu();
    },
    "form.numberOfInstalments": function () {
      this.amount = this.thousandSeprator(this.form.sumInsured);
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
    this.amount = this.thousandSeprator(this.form.sumInsured);

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
      let vehicleClassIndex = self.form.vehicleType;
      let premiumCharged,
        levies,
        estimatedPremium,
        premiumBeforeLeviesStampDuty,
        totalBasicPremium,
        actualPremiumSummary,
        monthlyInstallments,
        processingFee,
        pmtRate,
        nPer,
        totalLoanAmount,
        loanAmount,
        estimatedInstalments,
        depositAmount,
        termOfLoanInYears,
        periodsPerYear;
      let stampDuty = 40;
      let annualInterestRate = 41.7031 / 100;
      let loanTerm = 1;

      //AddOns
      let withExcesssWaiver = 0;
      let withPVTS = 0;
      let withRoadRescue = 0;
      let withPersonalAccident = 0;
      let withCourtesyCar = 0;

      //calculate the premium charged

      if (self.form.coverType === "Comprehensive") {
        premiumCharged = Math.max(
          self.premiumRates[vehicleClassIndex] * self.form.sumInsured,
          self.premiumMin[vehicleClassIndex]
        );
      } else {
        //Third Party Only
        premiumCharged = self.tpoRates[vehicleClassIndex];
      }

      console.log(`Vehicle Class ${self.vehicleClass[vehicleClassIndex]}`);
      console.log(`Cover Type ${self.form.coverType}`);
      console.log(`Sum Insured ${self.form.sumInsured}`);
      console.log(`Premium Charged ${premiumCharged}`);

      //Here is where we add the addons

      //excessWaiver
      if (self.form.excessWaiver) {
        //get max value between  h16*g20 and Vl (g14 a3:h7, 2)
        withExcesssWaiver = Math.max(
          self.form.sumInsured * self.excessWaiverRates[vehicleClassIndex],
          self.excesWaiverMin[vehicleClassIndex]
        );
        console.log(`Excess Waiver is ${withExcesssWaiver}`);
      }

      //pvts
      if (self.form.pvts) {
        withPVTS = 0.0025 * self.form.sumInsured;
        console.log(`PVTS is ${withPVTS}`);
      }

      //road rescue
      if (self.form.roadRescue) {
        withRoadRescue = self.roadRescue[vehicleClassIndex];
        console.log(`Road Rescue is ${withRoadRescue}`);
      }

      //personal accident
      if (self.form.personalAccident) {
        withPersonalAccident = self.personalAccident[vehicleClassIndex];
        console.log(`Personal Accident is ${withPersonalAccident}`);
      }

      //Coutesy Car
      if (self.form.courtesyCar == "10") {
        withCourtesyCar = 3000;
      } else if (self.form.courtesyCar == "21") {
        withCourtesyCar = 6000;
      }

      /* if it's third-party, just work with the premium charged, else, let's do some maths */
      if (self.form.coverType !== "Third Party Only") {
        if (self.vehicleClass[vehicleClassIndex] === "Boda Boda") {
          //Bodaboda
          estimatedPremium = premiumCharged;
        } else if (self.vehicleClass[vehicleClassIndex] === "Motor Private") {
          estimatedPremium =
            parseInt(premiumCharged) +
            parseInt(withExcesssWaiver) +
            parseInt(withPVTS) +
            parseInt(withRoadRescue) +
            parseInt(withPersonalAccident) +
            parseInt(withCourtesyCar);
        } else if (self.vehicleClass[vehicleClassIndex] === "Taxi") {
          //if taxi add 2000 (Passanger Legal iability)
          estimatedPremium =
            parseInt(premiumCharged) +
            parseInt(withExcesssWaiver) +
            parseInt(withPVTS) +
            parseInt(withRoadRescue) +
            parseInt(withPersonalAccident) +
            parseInt(withCourtesyCar) +
            parseInt(2000);
        } else if (
          self.vehicleClass[vehicleClassIndex] === "Motor Commercial Own Goods"
        ) {
          estimatedPremium =
            parseInt(premiumCharged) +
            parseInt(withExcesssWaiver) +
            parseInt(withPVTS) +
            parseInt(withPersonalAccident);
        } else if (
          self.vehicleClass[vehicleClassIndex] ===
          "Motor Commercial General Cartage"
        ) {
          parseInt(premiumCharged) +
            parseInt(withExcesssWaiver) +
            parseInt(withPVTS) +
            parseInt(withPersonalAccident);
        } else if (self.vehicleClass[vehicleClassIndex] === "Tuk Tuk") {
          //if tuk tuk add 1500 (Passanger Legal iability)
          estimatedPremium =
            parseInt(premiumCharged) +
            parseInt(withExcesssWaiver) +
            parseInt(withPVTS) +
            parseInt(withPersonalAccident) +
            parseInt(1500);
        }
      } else {
        //rest is inclusive
        estimatedPremium = premiumCharged;
      }

      //Here is where we add windscreen & R/C
      premiumBeforeLeviesStampDuty = estimatedPremium;

      levies = (0.45 / 100) * premiumBeforeLeviesStampDuty;

      totalBasicPremium =
        parseInt(premiumBeforeLeviesStampDuty) +
        parseInt(levies) +
        parseInt(stampDuty);

      console.log(`Levies ${levies}`);
      console.log(`Estimated Premium ${estimatedPremium}`);
      console.log(
        `Premium Before Levies/Stamp Duty ${premiumBeforeLeviesStampDuty}`
      );
      console.log(`Total Basic Premium ${totalBasicPremium}`);

      //Actual Premium Summary
      if (self.vehicleClass[vehicleClassIndex] == "Boda Boda") {
        //if Boda Boda
        actualPremiumSummary =
          parseInt(premiumBeforeLeviesStampDuty) +
          parseInt(levies) +
          parseInt(stampDuty);
      } else if (
        self.vehicleClass[vehicleClassIndex] ==
        "Motor Commercial General Cartage"
      ) {
        //if Motor Commercial General Cartage

        actualPremiumSummary =
          parseInt(premiumBeforeLeviesStampDuty) +
          parseInt(levies) +
          parseInt(stampDuty);
      } else {
        actualPremiumSummary = totalBasicPremium;
      }

      console.log(
        `Actual Premium Summary, Premium Amount ${actualPremiumSummary}`
      );
      processingFee = actualPremiumSummary * 0.04;

      totalLoanAmount =
        parseInt(actualPremiumSummary) + parseInt(processingFee);

      //set the basic premium
      self.form.basicPremium = totalLoanAmount.toLocaleString();

      console.log(`Processing Fee ${processingFee}`);
      console.log(`Total Loan Amount ${totalLoanAmount}`);

      //

      pmtRate = annualInterestRate / self.form.numberOfInstalments;
      nPer = loanTerm * self.form.numberOfInstalments;
      loanAmount = parseInt(actualPremiumSummary) + parseInt(processingFee);

      console.log(`PMT Rate ${pmtRate}`);
      console.log(`nPer ${nPer}`);

      console.log(`Loan Amount ${loanAmount}`);

      estimatedInstalments = self.pmt(pmtRate, nPer, -loanAmount);

      console.log(`Estimated Instalments ${estimatedInstalments}`);

      //20% of basic premium
      depositAmount = (20 / 100) * loanAmount;

      //set the deposit amount
      self.form.deposit = parseInt(depositAmount.toFixed()).toLocaleString();

      //calc term of loan in years
      termOfLoanInYears =
        self.form.numberOfInstalments /
        self.calcMaxLoanTerms[vehicleClassIndex];

      if (self.paymentFrequnecy[vehicleClassIndex] === "Monthly") {
        periodsPerYear = 12;
      } else if (self.paymentFrequnecy[vehicleClassIndex] === "Weekly") {
        periodsPerYear = 52;
      }

      let schedule_nPer = termOfLoanInYears * periodsPerYear;

      monthlyInstallments =
        self.pmt(
          self.ratesByBrian[vehicleClassIndex],
          schedule_nPer,
          loanAmount
        ) * -1;

      console.log(`Monthly Instalment  ${monthlyInstallments}`);

      if (self.form.numberOfInstalments <= 0) {
        self.form.amountPerInstalment = 0;
      } else {
        self.form.amountPerInstalment = parseInt(
          monthlyInstallments.toFixed(0)
        ).toLocaleString();
      }
    },
    submitForm() {
      let self = this;
      if (self.form.sumInsured <= 0) {
        return;
      }

      if (!self.validatePhone(self.form.user_phone)) {
        self.phoneIsInvalid = true;
        return;
      }

      self.form.vehicleClassLabel = this.vehicleClass[this.form.vehicleType];

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

      self.$gtm.push({ event: "onIPFFormSubmitted" });
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

      if (value <= 0 || value == null) {
        return;
      }

      setTimeout(function () {
        self.form.sumInsured = value;
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