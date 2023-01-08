<template>
  <div class="page-container">
    <section class="page-title-section sahih-page p-4">
      <div class="content">
        <h1 class="title text-center">Shariah Supervisory Board</h1>
      </div>
    </section>

    <section>
      <div class="section-container">
        <div class="board-grid">
          <div class="member">
            <img src="~/assets/img/sahih/sheikh.jpg" alt="Sheikh Professor Salim Mohammed Badamana" />
            <div class="content">
              <h4>Sheikh Professor Salim Mohammed Badamana</h4>
              <h5 style="display:none;">
                Has over 10 years’ experience in Shari’ah compliant Products
              </h5>
              <h5>
                Prof. Badamana is currently the chairman of the Shariah Supervisory Board of Gulf African Bank. He retired from the university of Nairobi.
              </h5>
              <a href="#" @click.prevent="profile='sheikh'" class="btn sm text-white">Read More</a>
            </div>
          </div>
          <div class="member">
            <img src="~/assets/img/sahih/Khalifan.jpg" alt="Khalfan Abdallah Salim" />
            <div class="content">
              <h4>Khalfan Abdallah Salim</h4>
              <h5>
               An accomplished authority in matters of Islamic Banking and finance.
              </h5>
              <a href="#" @click.prevent="profile='Khalfan'" class="btn sm text-white">Read More</a>
            </div>
          </div>
          <div class="member">
            <img src="~/assets/img/sahih/ali.jpg" alt="Ali Mahmud" />
            <div class="content">
              <h4>Ali Mahmud</h4>
              <h5>
             Has extensive knowledge in Commercial Law.
              </h5>
              <a href="#" @click.prevent="profile='ali'" class="btn sm text-white">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ali -->

    <transition name="fade" mode="out-in">
      <div class="profile" v-if="profile == 'ali'">
        <div class="content">
          <a href="#" @click.prevent="profile=''" class="close-modal">
            <img src="~/assets/img/sahih/close.png" alt="CLose" />
          </a>
          <h1 class="title">Principal Partner, Ali &amp; Company Advocates</h1>
          <p>
He has extensive knowledge in Commercial Law, having obtained a Masters Degree from the University of London, Queens Mary, London.  Apart from being a part time  lecturer at the Islamic University of Uganda, he also sits at various Shariah supervisory Boards, including Chase Iman.
          </p>
        </div>
      </div>

      <!-- Khalfan  -->
      <div class="profile" v-if="profile == 'Khalfan'">
        <div class="content">
          <a href="#" @click.prevent="profile=''" class="close-modal">
            <img src="~/assets/img/sahih/close.png" alt="CLose" />
          </a>
          <h1 class="title">CEO, Abrar Solutions Limited</h1>
          <p>
            He has over 10 years experience in Sharia Compliant
            Products across various banks in both Tanzania &amp; Kenya.
            He has build a reputable foundation as an Islamic forerunner
            with the category.
          </p>
          <p>
            Currently he is the CEO of Abrar Solutions Limited and having held similar positions
            across various banks, his expertise in various stages of development
            of sharia complaint products is world-class.
          </p>
        </div>
      </div>

      <!-- Sheikh  -->
      <div class="profile" v-if="profile == 'sheikh'">
        <div class="content">
          <a href="#" @click.prevent="profile=''" class="close-modal">
            <img src="~/assets/img/sahih/close.png" alt="CLose" />
          </a>
          <h1 class="title">Chairman, Sharia Supervisory for Gulf African Bank</h1>
         <!-- <p class="subtitle">Chairman, Sharia Supervisory for Gulf African Bank</p> --->
          <p>
            Professor Badamana holds a PhD in Islamic studies from the University
            of Khartoum and is currently the chairman of the Shariah Supervisory Board of Gulf African Bank. 
            He has lectured and examined MA
            and PHD students at the University of Nairobi and Kenyatta in the department
            of Philosophy and Religious studies. He retired from the university of Nairobi.
          </p>
          <p>
            He has presented papers at many international forums as well as
            published in many journals and papers. He is a leading figure in the
            Society's collective attempts towards Islamic welfare in Kenya.
            He sits in Shariah supervisory boards of several institutions both
            locally and internationally.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "blog",
  head: {
    title: "Shariah Supervisory Board - Momentum Sahih",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,sharia,ceo,chairman,Sahih,financing,book,fatwa,logbook, credit, kenya, nairobi",
      },
      {
        hid: "title",
        name: "title",
        content: "Shariah Supervisory Board - Momentum Sahih",
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
        content: "Shariah Supervisory Board - Momentum Sahih",
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
        content: "Shariah Supervisory Board - Momentum Sahih",
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
  layout: "sahih",
  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>