<template>
  <div class="page-container">
    <div class="product-intro">
      <div class="header-bg header-whistleblower"></div>
      <div class="header-overlay"></div>

      <div class="content p-4">
        <div class="col is-flex">
          <div class="title-wrapper md:pt-32">
            <h1 class="title text-white">Anonymous Whistleblower Portal</h1>
            <span class="inline-block text-white mt-4">
              Momentum Credit is committed to fair and ethical business conduct.
              An effective whistle blow will go a long way in ensuring that the
              highest ethical standards are always maintained. Any disclosure
              made here is treated in the strictest confidence and the identity
              of the whistle blower is highly protected.
            </span>
            <div class="mt-8">
              <a
                href="#"
                class="btn lg font-bold uppercase text-white"
                v-scroll-to="'#faqs'"
                >FAQs</a
              >
            </div>
          </div>
        </div>

        <div class="col">
          <form
            class="calculator-form calculator-form-updated"
            id="insurance-premium-form"
            @submit.prevent="submitForm()"
          >
            <div class="form-title-wrapper hidden">
              <h5>Fll the Form</h5>
            </div>

            <div class="input-row pt-6 pb-0 panel_over">
              <h4 class="font-bold text-1xl center">
                To share details of the reportable incident, kindly complete the
                following form or share your report through
                <br /><a href="mailto:whistleblowing.platcorp@gmail.com"
                  >whistleblowing.platcorp@gmail.com </a
                ><br />
                <span class="yellow">Make a report</span>
              </h4>
            </div>

            <div class="input-row pt-6">
              <h4 class="font-bold text-2xl">Malpractice details</h4>
            </div>

            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Description of the Malpractice*</label>
                <textarea
                  v-model="form.malpractice_description"
                  required
                  rows="3"
                  class="w-full"
                  placeholder="Describe the events"
                ></textarea>
              </div>
            </div>

            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Where did the malpractice occur?*</label>
                <textarea
                  v-model="form.where_is_occurred"
                  required
                  rows="2"
                  class="w-full"
                  placeholder="Where did it happen?"
                ></textarea>
              </div>
            </div>
            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Attach supporting document</label>
                <small class="mb-3"
                  >Accepted formats: png, jpeg &amp; gif</small
                >
                <div class="file-upload-wrapper">
                  <button type="button" @click.prevent="openUploadWidget()">
                    Upload File
                  </button>
                </div>
                <div
                  class="relative p-2 border border-gray-400 mt-4 rounded-sm"
                  v-if="form.supporting_document_url !== ''"
                >
                  <img
                    :src="form.supporting_document_url"
                    alt="Anonymous Whistleblower"
                    style="width: 60px"
                  />
                  <button
                    @click.prevent="form.supporting_document_url = ''"
                    type="button"
                    class="font-bold absolute opacity-75 hover:opacity-100"
                    style="top:5px;right:8px"
                  >
                    X
                  </button>
                </div>
                <span
                  v-if="documentError !== ''"
                  class="input-error-message text-sm pt-1 pl-4 text-red-700"
                  >{{ documentError }}</span
                >
              </div>
            </div>

            <div class="input-row pt-6 pb-4">
              <div class="input-item w-full">
                <label for="still-happening"
                  >Is the alleged Malpractice still on-going?*</label
                >
                <select id="still-happening" v-model="form.still_happening">
                  <option value="" selected disabled>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="NO">No</option>
                  <option value="Unknwon">Unknown</option>
                </select>
              </div>
            </div>

            <div class="input-row pt-6">
              <h4 class="font-bold text-2xl">
                Personnel/officer(s) involved in the Malpractice
              </h4>
            </div>

            <div class="input-row pt-6">
              <div class="input-item">
                <label>Full Name</label>
                <input
                  type="text"
                  v-model="form.personnel_name"
                  placeholder="Enter Name"
                  class="w-full"
                />
              </div>
              <div class="input-item">
                <label>Email</label>
                <input
                  type="email"
                  v-model="form.personnel_email"
                  placeholder="Enter email address"
                  class="w-full"
                />
              </div>
            </div>

            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Phone Number</label>
                <input
                  type="tel"
                  v-model="form.personnel_phone"
                  placeholder="07XXXXXXXX"
                  class="w-full"
                  @focus="phoneIsInvalid = false"
                />
              </div>
              <span
                v-if="phoneIsInvalid"
                class="input-error-message text-sm pt-1 pl-4 text-red-700"
                >Phone number is invalid!</span
              >
            </div>

            <div class="input-row pt-6">
              <h4 class="font-bold text-2xl">
                Whistleblower’s Information (Optional)
              </h4>
            </div>

            <div class="input-row pt-6">
              <div class="input-item">
                <label>Full Name</label>
                <input
                  v-model="form.whistleblower_name"
                  type="text"
                  placeholder="Enter name"
                  class="w-full"
                />
              </div>
              <div class="input-item">
                <label>Email</label>
                <input
                  v-model="form.whistleblower_email"
                  type="email"
                  placeholder="Enter email address"
                  class="w-full"
                />
              </div>
            </div>

            <div class="input-row pt-6 pb-6">
              <div class="input-item w-full">
                <label>Phone Number</label>
                <input
                  type="tel"
                  v-model="form.whistleblower_phone"
                  placeholder="07XX XXX XXX"
                  class="w-full"
                />
              </div>
            </div>

            <div class="p-1 pb-6 px-6 text-center" v-if="formSubmitted">
              <div class="text-sm text-green-700">
                Thank you for your submission.
                <!-- Your quote is ready to download. Click <a href="#" class="text-yellow">here</a> to download. -->
              </div>
            </div>

            <div class="p-6 text-center" v-if="!formSubmitted">
              <button type="submit" class="uppercase btn submit-btn">
                <strong class="px-6 text-white">Submit</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <section class="bg-white" id="faqs">
      <div class="section-container">
        <h3 class="section-title">FAQs</h3>

        <div class="faq-container">
          <div class="row">

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 1"
              >What can be reported?</a
            >

            <transition name="fade" mode="out-in">
              <div class="ans dynamic-content" v-if="faq == 1">
                <p>Reportable misconduct includes but is not limited to: -</p>
                <ol>
                  <li>
                    All forms of financial malpractices or impropriety such as
                    fraud, corruption, bribery, forgery, blackmail, theft,
                    misappropriation of funds and classified documents
                  </li>
                  <li>
                    Failure to comply with legal obligations, statutes, and
                    regulatory directives.
                  </li>
                  <li>
                    Actions detrimental to Health and Safety or the Environment.
                  </li>
                  <li>Any form of criminal activity;</li>
                  <li>
                    Improper conduct or unethical behaviour that undermines
                    universal and core ethical values such as integrity,
                    respect, honesty, accountability and fairness etc.
                  </li>
                  <li>Other forms of corporate governance breaches.</li>
                  <li>
                    Connected transactions not disclosed or reported in line
                    with regulations.
                  </li>
                  <li>
                    Insider abuse - where employees with special access
                    privileges and knowledge of operations and information use
                    this knowledge and information to alter or disable security
                    controls for their own benefit and to the detriment of the
                    Company.
                  </li>
                  <li>Non-disclosure of conflict of interest.</li>
                </ol>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 2"
              >What happens after I file a Whistleblower report?</a
            >
            <transition name="fade" mode="out-in">
              <div class="ans dynamic-content" v-if="faq == 2">
                <p>
                  Once the disclosure is received, it will be assessed and where
                  necessary, an investigation will be launched. A report on the
                  findings will be presented and in consultation with the board,
                  the appropriate action will be taken. Where the whistleblower
                  wishes to know the feedback on the outcome of the
                  investigation, a follow up is done to update them.
                </p>
              </div>
            </transition>
          </div>

          <div class="faq large-6">
            <a href="#" class="quiz" @click.prevent="faq = 3"
              >Is the confidentiality for the Whistleblower guaranteed?</a
            >
            <transition name="fade" mode="out-in">
              <div class="ans dynamic-content" v-if="faq == 3">
                <p>
                  All concerns will be treated in confidence and every effort
                  made to protect the identity of the whistleblower. Whilst
                  making all reasonable effort to maintain the confidentiality
                  of the matter as a whole, at a certain stage in the
                  investigation, it may be necessary to make the origin of the
                  complaint known to the person or persons the allegations
                  relate to. This will be discussed with the whistleblower
                  should this extra ordinary circumstance arise.
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
    title: "Momentum Credit – Anonymous Whistleblower",
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
        content: "Momentum Credit – Anonymous Whistleblower"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Momentum Credit is committed to fair and ethical business conduct. An effective whistle blow will go a long way in ensuring that the highest ethical standards are always maintained. Any disclosure made here is treated in the strictest confidence and the identity of the whistle blower is highly protected."
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
        content: "Momentum Credit – Anonymous Whistleblower"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Momentum Credit is committed to fair and ethical business conduct. An effective whistle blow will go a long way in ensuring that the highest ethical standards are always maintained. Any disclosure made here is treated in the strictest confidence and the identity of the whistle blower is highly protected."
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
        content: "Momentum Credit – Anonymous Whistleblower"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Momentum Credit is committed to fair and ethical business conduct. An effective whistle blow will go a long way in ensuring that the highest ethical standards are always maintained. Any disclosure made here is treated in the strictest confidence and the identity of the whistle blower is highly protected."
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
  data() {
    return {
      phoneIsInvalid: false,
      amount: null,
      documentError: "",
      faq: 1,
      formSubmitted: false,
      cloudinaryWidget: null,
      form: {
        source: "Anonlymous Whistleblower",
        personnel_name: "",
        personnel_email: "",
        personnel_phone: "",
        malpractice_description: "",
        where_is_occurred: "",
        supporting_document_url: "",
        still_happening: "",
        whistleblower_name: "",
        whistleblower_email: "",
        whistleblower_phone: ""
      }
    };
  },
  created() {
    let self = this;
  },
  mounted() {
    let self = this;

    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
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
    submitForm() {
      let self = this;

    /*  if (!self.validatePhone(this.form.personnel_phone)) {
        this.phoneIsInvalid = true;
        return false;
      }

      if (self.form.whistleblower_phone !== "") {
        if (self.validatePhone(this.form.whistleblower_phone)) {
          return false;
        }
      }*/

      if (
        self.form.supporting_document_url == "" ||
        self.form.supporting_document_url == null
      ) {
        //this.documentError = "Please upload a supporting document!";
       // return;
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
      self.$gtm.push({ event: "onIPFFormSubmitted" });
    },
    createCloudinaryWidget() {
      let self = this;
      const newWidget = cloudinary.createUploadWidget(
        {
          cloudName: "dbgmadpei",
          uploadPreset: "a9wzxfxg",
          multipe: false,
          maxFiles: 1,
          cropping: true,
          croppingAspectRatio: 1,
          croppingCoordinationMode: "face",
          clientAllowedFormats: ["png", "jpeg", "gif"]
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log(`Image Info`, result.info);
            self.documentError = "";
            self.form.supporting_document_url = result.info.secure_url;
          }
        }
      );
      return newWidget;
    },
    openUploadWidget() {
      /* Make sure the user does not play around with the uploader */
      if (sessionStorage.uploader) {
        if (sessionStorage.uploader >= 4) {
          return;
        } else {
          sessionStorage.uploader = ++sessionStorage.uploader;
        }
      } else {
        sessionStorage.uploader = 1;
      }

      if (!this.cloudinaryWidget) {
        this.cloudinaryWidget = this.createCloudinaryWidget();
      }
      this.cloudinaryWidget.open();
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.panel_over .center {
  text-align: center;
}
.panel_over .yellow {
  color: #e5ba5b;
}
.panel_over a {
  color: #000;
}
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