<template>
  <div class="page-container">
<section id="after-header" class="text-image-grid panel_over">
   <h1 class="title text-white">CAREERS</h1>
            <span class="inline-block text-white mt-4">
This is what we’re crazy about and we’re looking for the ones who feel the same. Please Fll in the Form.
            </span>
<form  id="motor_import_financing" @submit.prevent="submitForm">
            <div class="input-row pt-6">
              <div class="input-item w-full">
                <label>Job title*</label>
                <input
                  type="text"
                  required
                  v-model="form.user_job_title"
                  placeholder="Enter job title"
                  class="w-full"
                />
              </div>
            </div>
            <div class="input-row pt-6 pb-6">
                        
            <div class="input-item pt-6">
                <label>Name*</label>
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full"
                   required
                  v-model="form.user_name"
                />
             
            </div>
              <div class="input-item pt-6">
                <label>Phone*</label>
                <input
                  type="tel"
                  placeholder="Phone"
                  class="w-full"
                   required
                  v-model="form.user_phone"
                />
              </div>
              <div class="input-item pt-6">
                <label>Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full"
                   required
              v-model="form.user_email"
                />
              </div>


                 <div class="input-item pt-6">
                <label>Date of application*</label>
                <input
                  v-model="form.user_date_of_application"
                  type="date"
                  required
                  placeholder="Date of application"
                  class="w-full"
                />
              </div>


            <div class="input-row w-full">
              <div class="input-item w-full">
                <label>short description of who you are as a professional*</label>
                <textarea
                  v-model="form.user_short_description"
                  required
                  class="w-full"
                  placeholder="Describe your self"
                ></textarea>
              </div>
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

                <strong style="padding:0px;" class="px-6 text-white">submit</strong>
                <a style="visibility: hidden;"  onclick="return gtag_report_conversion('https://momentumcredit.co.ke/motor-import-financing');" href="https://momentumcredit.co.ke/motor-import-financing">GET A QUOTE</a>
              </button>
            </div>
            
            </div>
</form>

</section>
  </div>
</template>
<script>
export default {
  name: "careers form",
    head: {
    title: "Momentum Credit – careers form",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "With just 25%, the careers form product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – careers form",
      },
      {
        hid: "description",
        name: "description",
        content:
          "With just 25%, the careers form product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
        content: "Momentum Credit – careers form",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "With just 25%, the careers form product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
        content: "Momentum Credit – careers form",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "With just 25%, the careers form product facilitates seamless and cheap car importation in 60 days, with huge cost savings of up to 20%. ",
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
        source: "careers form",
        user_job_title:"",
        user_name: "",
        user_phone: "",
        user_email: "",
        user_date_of_application: "",
        user_short_description: "",

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
.panel_over{
  
  

}

.panel_over input,
.panel_over textarea{
  width:100%;
  background: #f5efef;
  border: none;
    padding-left: 1rem;
    height: 60px;
    border-radius: 0;
    border-radius: 25px;
}
.panel_over textarea{
  height:200px;
}
.panel_over .center{
  text-align: center;
}
.panel_over h1{
  color:#E5BA5B;
  text-align: center;
   display:block;
   font-size:25px;
}
.panel_over span{
   color:#000;
   text-align: center;
   display:block;
}
</style>
