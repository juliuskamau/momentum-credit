<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-ezua"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper">
            <h1 class="title">Ezua Chapaa</h1>
            <p>
              The Innovative revolving USSD credit line,<a href="tel:*674%23%20">*674#</a>, allows you to access credit limits from as low as Ksh 100 up to Ksh 2,000,000.
            </p>
            <div class="mt-8">
              <a  href="tel:*674%23%20" class="btn lg font-bold text-white uppercase mb-4 kk">FOR EXISTING CLIENTS DIAL *674#</a>
             
                    <a
            href="#"
            class="btn lg font-bold text-white uppercase mb-4"
            v-scroll-to="'#ezua-chapaa-form'"
          >FOR NEW CLIENTS ACTIVATE EZUA CHAPAA</a>

            </div>
          </div>
        </div>

        <div class="col">
          <form
            class="calculator-form calculator-form-updated"
            id="ezua-chapaa-form"
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
                <label for="Vehicle-Model">Year of Registration*</label>
                <input type="text" 
                placeholder="Year of Registration" class="w-full"
                required
            v-model="form.year_of_registration"
                />
                </div>


                
            <div class="p-1 pb-6 px-6 text-center" v-if="ezuachapaa">
              <div class="text-sm text-green-700">
                Thank you for your request. One of our representative will get back to you as soon as possible.
                <!-- Your quote is ready to download. Click <a href="#" class="text-yellow">here</a> to download. -->
              </div>
            </div>

            <div class="w-full p-6 text-center" v-if="!ezuachapaa">
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
          <h3 class="section-title">Ezua Chapaa</h3>
          <p class="mb-4">
            Ezua Chapaa/USSD Credit Card, allows you to get enough financing for daily operations. Instead of downloading several mobile apps, we offer you a large credit limit from Kes 100 to Kes 2,000,000 with which you can withdraw and repay hassle-free.
          </p>
          <p class="mb-4">
           Ezua Chapaa is available to both existing Momentum logbook loan clients and new clients.
         </p>
          <div class="mt-8 mb-4">
            <a href="tel:*674%23%20"
              class="btn lg font-bold text-white uppercase mb-4"
            >FOR EXISTING CLIENTS DIAL *674#</a>
     
                 <a
            href="#"
            class="btn lg font-bold text-white uppercase mb-4"
            v-scroll-to="'#ezua-chapaa-form'"
          >FOR NEW CLIENTS ACTIVATE EZUA CHAPAA</a>
          </div>
        </div>
        <div class="img-col ezua-chapaa-side-img">
          <img src="~/assets/img/ezua/side-bar.jpg" alt="Ezua Chapaa" />
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
        <h3 class="section-title text-center">Benefits of Ezua Chapaa</h3>
        <div class="icons-container cols-4 title-only benefits-section">
          <div>
            <img
              src="~/assets/img/ezua/cash-icon.png"
              alt="Only 20% deposit &amp; flexible repayments of up to 11 months."
            />
            <h4>
              Conveniently access at your
              liberty and as the need arises
              with minimum paperwork
            </h4>
          </div>
          <div>
            <img
              src="~/assets/img/ezua/time-icon.png"
              alt="Market beating premium rates &amp; Interest rates as low as 2% per month"
            />
            <h4>
              Flexible minimum repayments
              and longer repayment period –
              Up to 3 years or even more
              depending on usage
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/clock-icon.png" alt="Same day processing" />
            <h4>
              TAT – The Turn Around Time of
              this service is electric with
              loans being able to be
              processed as fast as in a
              matter of minutes
            </h4>
          </div>
          <div>
            <img src="~/assets/img/ezua/ussd-icon.png" alt="No early settlement fees" />
            <h4>
              Affordable Rates – USSD
              Credit Card is relatively cheaper
              and more affordable
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

        <div class="text-center hidden">
          <nuxt-link to="#ezua-chapaa-form" class="btn secondary lg font-bold text-white uppercase">Apply Now</nuxt-link>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="section-container">
        <h3 class="section-title text-center">FAQs</h3>

        <div class="faq-container">
          <h4 class="faqs-title">1. Getting Started with USSD Credit Card</h4>
          <div class="row">
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 1">What is USSD Credit Card?</a>

            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 1">
                <p>
                  Similar to Safaricom’s/Mpesa’s “Fuliza”, USSD Credit Card is a Revolving Credit Facility in which you will
                  be given a credit limit from which you can withdraw the amount he needs at his/her liberty. Any unutilized
                  amount or repaid amount shall be used for further withdrawal by the client.
                </p>
                <p>
                  <strong>Example</strong>
                </p>
                <p>
                  If you have been given a credit limit of Sh. 20,000 and you withdraw Sh.5,000, the amount available for
                  further withdrawal is Sh.15,000. Interest will accrue on the outstanding Sh.5,000. If the you pays say
                  Sh.3,000, the available limit for withdrawal shall be Sh. 3,000 (the repaid amount) +Sh.15,000 (the initially
                  available amount) = Sh.18,000. The amount that shall accrue interest is the remaining Sh. 2,000 (Sh.5,000
                  – Sh.3,000) and the cycle continues on and on until the client pays off the facility.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 2">
              What are the differences between the Conventional Logbook Loan (a Fixed Schedule
              Loan) a Revolving Credit Facility ?
            </a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 2">
                <table>
                  <thead>
                    <tr>
                      <th>Conventional Logbook Loan</th>
                      <th>Revolving Credit Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-column="Conventional Logbook Loan">
                        The monthly repayments are fixed/equal
                        across the loan period
                      </td>
                      <td data-column="Revolving Credit Facility">
                        A minimum repayment, usually relatively lower
                        than the fixed installments in a fixed schedule
                        facility, is payable at the end of every month
                      </td>
                    </tr>
                    <tr>
                      <td data-column="Conventional Logbook Loan">The loan term is fixed (18 months)</td>
                      <td data-column="Revolving Credit Facility">
                        Depending on the client’s usage, the repayment
                        period can stretch to upto three years (or even
                        more)
                      </td>
                    </tr>
                    <tr>
                      <td data-column="Conventional Logbook Loan">
                        The entire loan amount is disbursed to
                        the client upfront
                      </td>
                      <td data-column="Revolving Credit Facility">
                        The client is given a limit from which he can
                        withdraw money at his liberty
                      </td>
                    </tr>
                    <tr>
                      <td data-column="Conventional Logbook Loan">
                        The interest is calculated on a reducing
                        balance basis
                      </td>
                      <td
                        data-column="Revolving Credit Facility"
                      >The interest is calculated on a flat rate basis</td>
                    </tr>
                    <tr>
                      <td data-column="Conventional Logbook Loan">
                        The client can only access funds once
                        (unless it’s a Topup)
                      </td>
                      <td data-column="Revolving Credit Facility">
                        The client can access any available limit amount
                        in his limit at any time at their own convenience
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 3"
            >What is the eligibility criteria for using this Service?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 3">
                <p>To access this Service, you need to meet the below criteria:</p>
                <ul>
                  <li>You need to be an existing Momentum Credit Limited client.</li>
                  <li>You must have paid at least three instalments.</li>
                  <li>Your instalment repayments must be up to date.</li>
                  <li>
                    <strong>Your valuation must be valid</strong> - Your vehicle’s valuation shall be valid for 9 months
                    after which you will be required to undertake another valuation of the vehicle.
                  </li>
                  <li>
                    <strong>Your Insurance must be valid</strong> - You shall successfully access this Service as long as
                    your vehicle’s insurance expires in 30 days or more. If your vehicle’s insurance is
                    expiring in less than 30 days, you will be required to renew your insurance so that you
                    can continue enjoying this Services.
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 4"
            >Is this Service only available for Momentum Credit Clients?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 4">
                <p>
                  Yes. At the moment, this Service is only available to Momentum Credit Ltd clients. For more
                  information on being a Momentum Credit Ltd client , please call 0709434434.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 5"
            >How shall I know that I qualify to use this Service?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 5">
                <p>
                  For you to know that you qualify for this service, you need to receive a pre-qualification text from
                  Momentum Credit Ltd informing you that you have qualified for the Service and the amount/limit qualified
                  for
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 6"
            >For how long shall the offer be valid after pre-qualification?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 6">
                <p>
                  Upon pre-qualification and subsequent receipt of the pre-qualification message, the offer shall be valid
                  for 30 days.
                </p>
              </div>
            </transition>
          </div>
</div>
          <h4 class="faqs-title">2. Accessing Your Account</h4>
<div class="row">
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 7"
            >How do I activate/register for this Service?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 7">
                <p>To activate this service, dial *674#, choose option 1(“Register”) and enter your ID number.</p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 8"
            >How should I enter my ID number if it has less than eight digits ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 8">
                <p>
                  If your ID has less than eight digits, please insert a zero/zeros before entering your ID number.
                  For example, if your ID number is 123456, enter it as 00123456
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 9">What devices support this service ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 9">
                <p>
                  This service shall be supported by all phones with different operating systems including Android
                  Operating System, Windows Operating system, iPhone Operating System, Black Berry Operating
                  System etc.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 10">
              Can I access this service using a different phone number from the one I gave during the
              loan application ?
            </a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 10">
                <p>
                  No. You can only access this service using the same phone number you gave during the original loan
                  application.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 11"
            >Shall this Service be available across all networks ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 11">
                <p>No, at the moment, this service shall only be available for clients using Safaricom lines</p>
              </div>
            </transition>
          </div>
</div>
          <h4 class="faqs-title">3. Services Accessible Via the USSD Platform</h4>
<div class="row">

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 12"
            >What are the main menu items in line with the USSD Credit Card Product?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 12">
                <p>The main menu items in line with the USSD Credit Card Product include:</p>
                <ul>
                  <li>
                    Access Funds
                    <ul>
                      <li>Create Limit</li>
                      <li>Withdraw Funds</li>
                    </ul>
                  </li>
                  <li>
                    Billing
                    <ul>
                      <li>Repayment Due</li>
                      <li>Total Outstanding Balance</li>
                      <li>Pay Loan</li>
                    </ul>
                  </li>
                  <li>
                    Statements
                    <ul>
                      <li>Mini Statement</li>
                      <li>Full statement</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 13"
            >Can Momentum Credit Ltd clients who have not yet paid three instalments access this service ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 13">
                <p>Yes, such clients can access the other menu items except for the “Request for a Credit Limit” option</p>
              </div>
            </transition>
          </div>
</div>
          <!-- START FAQ -->
          <div class="faq">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 14"
            >What other options are available through the *674# other than requesting for?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 14">
                <p>All clients, those who qualify for the USSD Credit Card or not, shall be able to:</p>
                <ul>
                  <li>Check their instalments due dates and amounts</li>
                  <li>Check their pay off balances</li>
                  <li>Make their monthly repayments</li>
                  <li>Check their insurance expiry dates</li>
                  <li>Review the Terms and Conditions of our various products</li>
                  <li>Enquire about our other products including Insurance Premium Financing</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <h4 class="faqs-title">4. Applying for USSD Credit Card</h4>
<div class="row">
          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 15"
            >How can I request for USSD Credit Card ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 15">
                <ul>
                  <li>Dial the short code, Login and enter your PIN</li>
                  <li>Select "Revolving Facility"</li>
                  <li>From the menu list, select "Request for Credit Limit"</li>
                  <li>Enter the amount you want to apply for and press OK</li>
                  <li>Confirm the amount you have entered and select "Proceed"</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 16"
            >How long does the application process take?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 16">
                <p>The application process is fast and easy hence takes just a few minutes</p>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 17"
            >How fast can I get the money after application?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 17">
                <p>
                  The Turn Around Time (TAT) of getting money through this service is as below provided you
                  meet the loan requirements:
                </p>
                <ul>
                  <li>Amounts of Sh.200,000 and below shall be disbursed instantly</li>
                  <li>
                    Amounts above Sh.200,000 shall be processed between 8.00am to 5.00pm from
                    Monday to Friday and from 8.00am to 12.30pm on Saturdays.
                  </li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 18"
            >How many times can I apply for USSD Credit Card?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 18">
                <p>
                  USSD Credit Card is a continuous product which you can apply for as many times as you want
                  provided that your valuation and insurance are renewed as per the company’s provisions
                </p>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->
</div>
          <h4 class="faqs-title">5. USSD Credit Card Features and Benefits</h4>
<div class="row">
          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 19"
            >What’s the unique pricing of USSD Credit Card?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 19">
                <ul>
                  <li>NTSA charges shall be waived</li>
                  <li>Chattel fees shall be waived</li>
                  <li>Tracking installation charges shall be waived</li>
                  <li>Processing fees shall be 3% of the limit amount payable once every year.</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 20"
            >What are the maximum and minimum loan terms for this product?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 20">
                <p>The minimum and maximum loan amounts are as below:</p>
                <ul>
                  <li>Minimum loan term: 1 month</li>
                  <li>Maximum loan term: 36 months</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 21"
            >What are the minimum and maximum loan amounts for USSD Credit Card ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 21">
                <p>The minimum and maximum credit limits are as below:</p>
                <ul>
                  <li>Minimum loan amount: Sh.100</li>
                  <li>Maximum loan amount: Sh.2,000,000</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 22"
            >What are the benefits of this service?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 22">
                <ul>
                  <li>Flexible minimum repayments of the 8% of Total Due (Principal +Interest) + Tracking Fees</li>
                  <li>Longer repayment period – Upto 3 years or even more depending on usage</li>
                  <li>Client can conveniently access his money at his liberty and as the need arises</li>
                  <li>Affordable Rates – USSD Credit Card is relatively cheaper and more affordable</li>
                  <li>Convenience – Minimum paperwork and easy to use/navigate</li>
                  <li>Ease of access – The service is easily accessible anytime, anywhere</li>
                  <li>Affordable pricing – The pricing of the product is quite affordable</li>
                  <li>
                    TAT – The Turn Around Time of this service is electric with loans being able to be processed
                    in as fast as in a matter of minutes
                  </li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->
</div>
          <h4 class="faqs-title">6. Withdrawing Funds and Repayment</h4>
<div class="row">
          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 23"
            >Through what channels can the withdrawn amount be disbursed?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 23">
                <ul>
                  <li>For amounts greater than 100,000, the amount will be disbursed via Pesalink</li>
                  <li>
                    For amounts less than or equal to 100,000, the amount will be disbursed via M-Pesa or through
                    Pesalink.0
                  </li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 24">How can I repay my loan ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 24">
                <p>You can repay the loan:</p>
                <ul>
                  <li>
                    Through providing additional cheques. You are required to provide the additional
                    cheques within 14 days after the loan disbursement
                  </li>
                  <li>Via Lipa na Mpesa PayBill (801480)</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a
              href="#"
              class="quiz"
              @click.prevent="faq = 25"
            >Will there be any early repayment fees if I repay my loan earlier ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 25">
                <p>No. You shall not be charged any early repayment fees if you repay your loan early</p>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->
</div>
          <h4 class="faqs-title">7. Privacy and Security</h4>
<div class="row">
          <!-- START FAQ -->
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 26">What is a PIN?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 26">
                <p>A PIN is a four-digit number used as your unique identifier. You should never share this number with anyone.</p>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 27">What happens if I forget my PIN?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 27">
                <p>If you forget your PIN please:</p>
                <ul>
                  <li>Call 0709434434 for a PIN reset.</li>
                  <li>
                    Upon receiving the OTP (One Time Password), dial *674# and select "Forgot PIN"
                    from the welcome/Opt-in screen
                  </li>
                  <li>Enter the OTP, then set and confirm a four-digit PIN. This shall be your new PIN</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 28">Can I change my PIN ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 28">
                <p>
                  Yes, if you have a feeling that your PIN has been compromised, you can change it at any time. To
                  change your PIN:
                </p>
                <ul>
                  <li>Dial *674#</li>
                  <li>Select “Proceed” in the welcome screen</li>
                  <li>Select “My Account”</li>
                  <li>From the list, select “Change PIN”</li>
                  <li>Enter old PIN</li>
                  <li>Enter New PIN</li>
                  <li>Confirm new PIN</li>
                </ul>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->

          <!-- START FAQ -->
          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 29">Can I change my account details ?</a>
            <transition name="fade" mode="out-in">
              <div class="ans" v-if="faq == 29">
                <p>
                  Yes, to change your account details including your phone number, bank account details, physical
                  address details, etc. kindly call 0709434434. Our representative shall walk you through the
                  necessary process.
                </p>
              </div>
            </transition>
          </div>
          <!-- END FAQ -->
</div>
          <!-- FAQs -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EzuaChapaa",
  head: {
    title: "Momentum Credit – Ezua Chapaa",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Our Innovative revolving USSD credit line, allows you to simply access mobile credit limits from as low as KSH. 100 up to KSH. 2,000,000. Dial *674#.ured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Ezua Chapaa",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Our Innovative revolving USSD credit line, allows you to simply access mobile credit limits from as low as KSH. 100 up to KSH. 2,000,000. Dial *674#.ured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
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
        content: "Momentum Credit – Ezua Chapaa",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Our Innovative revolving USSD credit line, allows you to simply access mobile credit limits from as low as KSH. 100 up to KSH. 2,000,000. Dial *674#.ured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
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
        content: "Momentum Credit – Ezua Chapaa",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Our Innovative revolving USSD credit line, allows you to simply access mobile credit limits from as low as KSH. 100 up to KSH. 2,000,000. Dial *674#.ured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
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
      faq: 1,
      ezuachapaa: "",
     // hasScrolledToBottom: false,
      form: {
        source: "ezua chapaa",
        user_name: "",
        user_phone: "",
        user_email: "",
        vehicle_make: "",
        year_of_registration: "",
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
        self.ezuachapaa = true;
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
.ans ul {
  list-style: disc;
  padding-left: 1em;
  li {
    ul {
      list-style: circle;
      padding-left: 1em;
    }
  }
}
.benefits-section {
  justify-content: space-evenly;
  div {
    width: 21%;
    box-shadow: 2px 2px 11px #ccc;
    padding: 1em;
    h4 {
      max-width: 90%;
    }
  }
}
.faqs-title {
  background-color: #e5ba5b;
  padding: 0.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 8px;
  color: #48686b;
  transition: opacity 0.3s ease-in;
  margin-bottom: 1em;
  margin-top: 0.4em;
  display: inline-block;
}
.ezua-chapaa-side-img {
  img {
    width: 65%;
  }
}
.icons-section .section-title {
  padding-bottom: 0rem;
  margin-bottom: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 5px auto;
}

/* Zebra striping */
tr:nth-of-type(odd) {
  background: #eee;
}

th {
  background: #48686b;
  color: #e5bb5c;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
  width: 50%;
}

@media (max-width: 769px) {
  .product-intro .header-bg.header-ezua {
    background-position: center;
  }
  .product-intro {
    min-height: calc(80vh - 100px);
  }
  #after-header .text-col p {
    padding-bottom: 0rem;
  }
  .icons-section {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .icons-container div {
    margin-top: 1em;
  }
  .benefits-section div {
    width: 100%;
    margin-top: 1em;
  }
  .icons-container div img {
    width: 60px;
    margin: 0px auto;
  }
  .benefits-section div h4 {
    margin: 0px auto;
    margin-top: 1em;
  }
  .faqs-title[data-v-533acfd7] {
    font-size: 1.3rem;
  }
  .faq-container {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .m-blue-bg {
    padding-bottom: 0rem;
    .card-grid {
      padding-bottom: 0rem;
    }
  }
}
/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table {
    width: 100%;
  }

  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }
  td,
  th {
    width: 100%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    // white-space: nowrap;
    /* Label the data */
    content: attr(data-column);

    color: #000;
    font-weight: bold;
  }
}
</style>
