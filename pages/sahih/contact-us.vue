<template>
  <div class="page-container">
    <section class="page-title-section contact-page p-4">
      <div class="bg"></div>
      <div class="content titles">
        <h1 class="title">We are here for you</h1>
        <h3 class="subtitle">#KeepTheMomentum</h3>
      </div>
      <div class="content form-layout">
        <div class="form-layout-inner">
          <div class="form-layout-container">
            <h4>
              <span>Get in touch with us</span>
              <img src="/img/icons/send.svg" alt="Send Icon" />
            </h4>
            <div class="col-form">
              <form @submit.prevent="contactFormRequest">
                <div class="input-group">
                  <label for="l-name">Name*</label>
                  <input type="text" id="l-name" v-model="form.name" placeholder="Name" required />
                </div>
                <div class="input-group">
                  <label for="l-email">Email*</label>
                  <input
                    type="email"
                    id="l-email"
                    v-model="form.email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input-group">
                  <label for="l-ohone">Phone*</label>
                  <input type="tel" id="l-phone" v-model="form.phone" placeholder="Phone" required />
                </div>
                <div class="input-group">
                  <label for="l-subject">Subject</label>
                  <input type="text" id="l-subject" v-model="form.subject" placeholder="Subject" />
                </div>
                <div class="input-group full">
                  <label for="l-message">Message</label>
                  <textarea placeholder="Message" id="l-message" v-model="form.message" rows="3"></textarea>
                </div>
                <div class="input-group md:w-11/12 full" v-if="contactFormSubmitted">
                  <div
                    class="text-sm text-green-700 px-2"
                  >Thank you for getting in touch. One of our representative will get in touch with you as soon as possible.</div>
                </div>
                <div class="input-group pt-4 full" v-if="!contactFormSubmitted">
                  <button type="submit" class="btn lg text-white font-bold">Send</button>
                </div>
              </form>
            </div>
          </div>
          <div class="form-layout-contacts gray-bg">
            <h4>Contact Information</h4>
            <div class="col-text">
              <div>
                <div class="info-list">
                  <h5>Sales Enquiries:</h5>
                  <div class="item_">
                    <img src="/img/icons/ring.svg" alt="Phone Icon" />
                    <span>
                      <a href="tel:0709434400">0709 434 400</a>
                    </span>
                  </div>
                  <div class="item_">
                    <img src="/img/icons/mail.svg" alt="Mail Icon" />
                    <span>
                      <a href="mailto:sahih@momentumcredit.co.ke">sahih@momentumcredit.co.ke</a>
                    </span>
                  </div>
                </div>

                <div class="info-list">
                  <h5>Customer Care:</h5>
                  <div class="item_">
                    <img src="/img/icons/ring.svg" alt="Phone Icon" />
                    <span>
                      <a href="tel:0709434000">0709 434 900</a>
                    </span>
                  </div>
                  <div class="item_">
                    <img src="/img/icons/mail.svg" alt="Mail Icon" />
                    <span>
                      <a href="mailto:cx@momentumcredit.co.ke">cx@momentumcredit.co.ke</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class>
      <div class="section-container">
        <div class="contact-sub-section">
          <h3 class="section-title">Get in touch with us</h3>
          <div class="contact-page-grid">
            <div class="col-form">
              <form @submit.prevent="contactFormRequest">
                <div class="input-group">
                  <label for="l-name">Name*</label>
                  <input type="text" id="l-name" v-model="form.name" placeholder="Name" required />
                </div>
                <div class="input-group">
                  <label for="l-email">Email*</label>
                  <input
                    type="email"
                    id="l-email"
                    v-model="form.email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input-group">
                  <label for="l-ohone">Phone*</label>
                  <input type="tel" id="l-phone" v-model="form.phone" placeholder="Phone" required />
                </div>
                <div class="input-group">
                  <label for="l-subject">Subject</label>
                  <input type="text" id="l-subject" v-model="form.subject" placeholder="Subject" />
                </div>
                <div class="input-group">
                  <label for="l-message">Message</label>
                  <textarea placeholder="Message" id="l-message" v-model="form.message" rows="3"></textarea>
                </div>
                <div class="input-group md:w-11/12" v-if="contactFormSubmitted">
                  <div
                    class="text-sm text-green-700 px-2"
                  >Thank you for getting in touch. One of our representative will get in touch with you as soon as possible.</div>
                </div>
                <div class="input-group pt-4" v-if="!contactFormSubmitted">
                  <button type="submit" class="btn lg text-white font-bold">Send</button>
                </div>
              </form>
            </div>
            <div class="col-text">
              <div>
                <ul>
                  <li>
                    <span>Sales Enquiries:</span>
                    <span>
                      <a href="tel:0709434400">0709 434 400</a>
                    </span>
                  </li>
                  <li>
                    <span>&nbsp;</span>
                    <span>
                      <a href="mailto:cx@momentumcredit.co.ke">info@momentumcredit.co.ke</a>
                    </span>
                  </li>
                  <li class="mt-4">
                    <span>Customer Care:</span>
                    <span>
                      <a href="tel:0709434900">0709 434 900</a>
                    </span>
                  </li>
                  <li>
                    <span>&nbsp;</span>
                    <span>
                      <a href="mailto:cx@momentumcredit.co.ke">cx@momentumcredit.co.ke</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="iframe-maps hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2034617316544!2d36.82326204142881!3d-1.2856992952257134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7c9bfe775%3A0xa759dcbd3e197b41!2sMomentum%20credit!5e0!3m2!1sen!2ske!4v1595843647889!5m2!1sen!2ske"
        width="600"
        height="450"
        frameborder="0"
        style="border:0"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <!-- Map Locator  -->
    <section class="branch-section">
      <div class="section-container">
        <div :class="{'branch-container':true,'hide-after':hasScrolledToBottom}">
          <div class="branch-wrapper" @scroll="handleScroll">
            <a style="display:none" href="#" @click.prevent="updateMap('eastleigh')">
              <h4>Eastleigh Branch</h4>
              <p>Sawa Towers, 3rd Floor, Eastleigh, Tel: 0794 554 309</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('nairobi')">
              <h4>HQ Hairobi</h4>
              <p>International House, 9th Floor – Mama Ngina Street Tel: 0796 444 555</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('thika')">
              <h4>Thika Branch</h4>
              <p>T Plaza 4th Floor Kenyatta Highway, Tel: 0742 501 557</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('mombasa')">
              <h4>Mombasa Branch</h4>
              <p>Jubilee Insurance Arcade- Ground floor, Moi avenue Tel: 0757650797</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('nakuru')">
              <h4>Nakuru Branch</h4>
              <p>Longonot House,1st Floor- Kenyatta Ave, Tel: 0758 761 180</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('kitengela')">
              <h4>Kitengela Branch</h4>
              <p>Kitengela Mall, 3rd Floor. Tel: 0740616429</p>
              <div>Click to view on map</div>
            </a>
            <a href="#" @click.prevent="updateMap('kisumu')">
              <h4>Kisumu Branch</h4>
              <p>Central Square, 2nd Floor – Oginga Odinga Street, Tel:0748 726881</p>
              <div>Click to view on map</div>
            </a>
          </div>
          <div class="map-wrapper" id="map" ref="map">
            <div class="iframe-maps">
              <iframe
                :src="mapSource"
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Map Locator  -->
  </div>
</template>
<script>
export default {
  name: "ContactSahihPage",
  layout: "sahih",
  head: {
    title: "Contact Us - Momentum Sahih",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content: "momentum,sharia,contact,Sahih,branch",
      },
      {
        hid: "title",
        name: "title",
        content: "Contact Us - Momentum Sahih",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Momentum Sahih is a Sharia-compliant financing product for supporting Muslims in their commercial activities.",
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
        content: "Contact Us - Momentum Sahih",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Momentum Sahih is a Sharia-compliant financing product for supporting Muslims in their commercial activities.",
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
        content: "Contact Us - Momentum Sahih",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Momentum Sahih is a Sharia-compliant financing product for supporting Muslims in their commercial activities.",
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
      contactFormSubmitted: "",
      hasScrolledToBottom: false,
      form: {
        source: "Sahih Get in Touch form",
        name: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
      },
      mapSource:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.832960447874!2d36.845378815317375!3d-1.273407635972807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b06c8f93d%3A0xf120abb53b70410!2sSAWA%20Tower!5e0!3m2!1sen!2ske!4v1597243987083!5m2!1sen!2ske",
    };
  },
  methods: {
    updateMap(town) {
      let self = this;

      let map = document.getElementById("map");
      this.$scrollTo(map);

      switch (town) {
        case "nairobi":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2034617316544!2d36.82326204142881!3d-1.2856992952257134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7c9bfe775%3A0xa759dcbd3e197b41!2sMomentum%20credit!5e0!3m2!1sen!2ske!4v1595843647889!5m2!1sen!2ske";
          break;
        case "eastleigh":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.832960447874!2d36.845378815317375!3d-1.273407635972807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178b06c8f93d%3A0xf120abb53b70410!2sSAWA%20Tower!5e0!3m2!1sen!2ske!4v1597243987083!5m2!1sen!2ske";
          break;
        case "mombasa":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15919.156681761498!2d39.667236!3d-4.0633492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x98816d1ec99ff44e!2sJubilee%20Arcade!5e0!3m2!1sen!2ske!4v1597760809252!5m2!1sen!2ske";
          break;
        case "thika":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63826.366884324445!2d37.057361!3d-1.0503425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f0f80ae570b%3A0xc17ead161af88afa!2sMomentum%20Credit!5e0!3m2!1sen!2ske!4v1597760715319!5m2!1sen!2ske";
          break;
        case "nakuru":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7689663278684!2d36.06711561475319!3d-0.28498549979207144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298df2dbc527ff%3A0x86171f547799d817!2sMomentum%20Credit!5e0!3m2!1sen!2ske!4v1597760760060!5m2!1sen!2ske";
          break;
        case "kitengela":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127637.52518437867!2d36.81786386888214!3d-1.3730900550705112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9f159a8a1407%3A0x46485c479b4ead64!2sMomentum%20Credit%20Limited!5e0!3m2!1sen!2ske!4v1597759648453!5m2!1sen!2ske";
          break;
        case "kisumu":
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4530080511619!2d34.75098732377134!3d-0.1017237066084144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa5c0f2ac8967%3A0xa2290372e214d686!2sCentral%20Square!5e0!3m2!1sen!2ske!4v1597759805481!5m2!1sen!2ske";
          break;
        default:
          self.mapSource =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2034617316544!2d36.82326204142881!3d-1.2856992952257134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d7c9bfe775%3A0xa759dcbd3e197b41!2sMomentum%20credit!5e0!3m2!1sen!2ske!4v1595843647889!5m2!1sen!2ske";
          break;
      }
    },
    contactFormRequest() {
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
        self.contactFormSubmitted = true;
        this.loading = false;
      } catch (error) {
        console.log(`Request Error ${error}`);
        this.loading = false;
      }

      self.$gtm.push({ event: "SahihGetInTouchFormSubmitted" });
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
