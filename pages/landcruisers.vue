<template>
  <div class="page-container">

            <no-ssr> <!-- important to add no-ssr-->
<carousel :autoplay="true" :nav="false" :items="1">
<div class="item-banner">
                       <img
              src="~/assets/img/land-cruiser-momentum-credit-1.png"
              alt=""
            />
           <div class="overlay">
             <h1>SALE COMING SOON</h1>
     <a target="_blank" href="/documents/LandcruiserSpecs.pdf" class="btn hide">Click to view</a>
           </div>
</div>
<div class="item-banner">
                       <img
              src="~/assets/img/land-cruiser-momentum-credit-1.png"
              alt=""
            />
           <div class="overlay">
             <h1>SALE COMING SOON</h1>
             <a target="_blank" href="/documents/img/LandcruiserSpecs.pdf" class="btn hide">Click to view</a>
           </div>
</div>
<div class="item-banner">
                       <img
              src="~/assets/img/land-cruiser-momentum-credit-2.jpg"
              alt=""
            />
           <div class="overlay">
             <h1>SALE COMING SOON</h1>
             <a target="_blank" href="/documents/img/LandcruiserSpecs.pdf" class="btn hide">Click to view</a>
           </div>
</div>
<div class="item-banner">
                       <img
              src="~/assets/img/land-cruiser-momentum-credit-3.jpg"
              alt=""
            />
           <div class="overlay">
             <h1>SALE COMING SOON</h1>
             <a target="_blank" href="/documents/img/LandcruiserSpecs.pdf" class="btn hide">Click to view</a>
           </div>
</div>
<div class="item-banner">
                       <img
              src="~/assets/img/land-cruiser-momentum-credit-4.jpg"
              alt=""
            />
           <div class="overlay">
             <h1>SALE COMING SOON</h1>
             <a target="_blank" href="/documents/img/LandcruiserSpecs.pdf" class="btn hide">Click to view</a>
           </div>
</div>
  </carousel>
</no-ssr>




  <div class="overlay-landcruiser">
<form class="calculator-form calculator-form-updated" id="landcruiserformsubmition" @submit.prevent="submitForm">
           <div class="form-title-wrapper">
              <h1>SUBMIT DETAILS</h1>
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
           
               
<div class="input-item w-full">
                <label for="user-email">Details</label>
                <input type="textarea"
                  placeholder="Details"
                  class="w-full"
                  required
               v-model="form.user_details"
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
              <strong style="padding:0px;" class="px-6 text-white">GET A QUOTE</strong>
              </button>
            </div>
            
            </div>
</form>
</div>



            
    <section class="text-image-grid" style="display:none;">
      <div class="section-container section-container01">
        <div class="w-full">
          <article class="dynamic-content">
            <div class="w-full">
 <div class="landcruiser-image">             
              <h3 class="section-title title01">
         KDE REGISTERED EX Gok LANDCRUISERS
        </h3>
                             <img
              src="~/assets/img/landcruiser2.png"
              alt=""
            />

                          <h3 class="section-title">
      THE 2014/15 TOYOTA LANDCRUISER 79 SERIES
        </h3>


<p>
 The particular version of the Toyota Landcruiser 79 series is Ex GoK. It’s a <strong>4*4,4WD reconditioned</strong> by the Kenya vehicle Manufactured (KVM). The rugged-core appeal makes it a <strong>perfect fit</strong> for the <strong>off-road and on-road world</strong>. Bumpy and rough terrains have always been a part of the Land Cruiser’s playing field.
</p>

<p>
  It’s <strong>versatile</strong>, ready to get any job done. Whether it’s built as an <strong>ambulance</strong>, a <strong>touring vehicle</strong>, a <strong>farming pickup</strong>, or a <strong>family 4x4 for upcountry road trips</strong>. This <strong>hard-wearing</strong> vehicle is the companion every <strong>adventurous driver</strong> requires. So, as an owner, all you have to worry about is the where-to-go-to-next and not the how-to-get-there.
</p>

</div><!---- landcruiser -->

 <div class="specification">
  <h3 class="section-title">
       Specifications
  </h3>
<div class="row">
    <div class="large-6 specification-left">
  <p>• The cars will eventually be locally registered as <strong>KDE.</strong> </p>
  <p>• Fully reconditioned by <strong>KVM.</strong></p>
  <p>• YOM: <strong>2010.</strong> </p>
   </div>
   <div class="large-6">
     <div class="relative">
       <span class="starting-price btn">*Starting price Kes. 1,800,000</span>
     </div>
   </div>
</div><!---- row --->

<table>
	<thead>
	<tr>
		<th>Model</th>
		<th>HZJ79R-TJMRS</th>
		<th></th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Exterior Colours</td>
		<td>Khaki Green, White, Beige <*other colors on request></td>
		<td></td>
	</tr>
	<tr>
		<td>Fuel</td>
		<td>Type<br>
Capacity</td>
		<td>Diesel
90L <+90 Liters Sub Tank></td>
	</tr>
  	<tr>
		<td>Engine</td>
		<td>Type<br>
Cubic Capacity<br>
Power<br>
Torque<br>
Fuel Distribution</td>
		<td>
      12-Valve,<br> OHC 1HZ-Engine,<br> 6 Cylinder,<br> In-line 4,164 cc<br>
96Kw/ 3800rpm<br>
285Nm/ 2200rpm<br>
Distributor Type Fuel Injection
    </td>
	</tr>
  	<tr>
		<td>Transmission</td>
		<td>5 Speed <br>Manual/4WD</td>
		<td></td>
	</tr>
  	<tr>
		<td>Dimensions</td>
		<td>LXWXH (mm)</td>
		<td>5,085 x 1,<br>970 x 1,690</td>
	</tr>
  	<tr>
		<td>Weight</td>
		<td>Kerb Weight<br>
Gross Vehicle Weight</td>
		<td>2,140Kg<br>
3,200Kg</td>
	</tr>
  	<tr>
		<td>Suspension</td>
		<td>Front
Rear</td>
		<td>Rigid axle, <br>Coil  Springs
Rigid axle ,<br> semi-elliptic leaf springs</td>
	</tr>
  	<tr>
		<td>Tyres</td>
		<td>7.50 R 16-8 Ply, <br>5.50F Steel</td>
		<td></td>
	</tr>
  	<tr>
		<td>Brakes</td>
		<td>Front
Rear</td>
		<td>Ventilated Discs<br>
Leading <br>Trailing Drum</td>
	</tr>

	</tbody>
</table>
 </div> <!----- specification --->
<div class="features">
  <h3 class="section-title-feature">
  Features
  </h3>
  <div class="image-contaier">
                                 <img
              src="~/assets/img/landcruiser3.png"
              alt=""
            />
    <div class="row">
      <div class="large-6"></div>
       <div class="large-6">
         <div class="overlay-wrapper">
           <div class="table">
             <div class="table-cell">
                 <h3 class="section-title">
   Standard Features
  </h3>
  <p>
    Front Wheel Hub<br>
Side Steps<br>
Front Mudguards<br>
Cargo Tray Hooks<br>
Side Impact Beams<br>
Front towing eye, Rear pintle hook<br>
Heavy Duty Suspension<br>
High Altitude Compensator<br>
Air Cleaner with Schnorkel<br>
Lockable Spare Wheel Mounted behind the Cabin<br>
Halogen headlamp<br>
Drop Down Tail Gate with Rugged & Reliable Chain
  </p>
               </div><!---- table-cell -->
            </div><!---- table -->

         </div>
       </div>
    </div><!--- row --->
  </div><!--- image-contaier --->



  <div class="image-contaier">
                                 <img
              src="~/assets/img/landcruiser4.png"
              alt=""
            />
          
    <div class="row">
      <div class="large-6">
                 <div class="overlay-wrapper">
                  <div class="table">
             <div class="table-cell">
                 <h3 class="section-title">
     Comfort & Convenience
  </h3>
  <p>
Front assist grip<br>
Digital clock<br>
Spacious Cabin<br>
Cigarette lighter<br>
Double Glove Box -W/lock + Cup Holder<br>
Seat Material - Vinyl<br>
Power assisted steering<br>
Front Bench Seat-3 Seater<br>
AM/SW/FM/Cassette with 2 Speakers<br>
Manual Tilt & Collapsible Steering Column<br>
Air Conditioner
  </p>
               </div><!---- table-cell -->
            </div><!---- table -->

         </div><!------- overlay-wrapper  --->
        
        </div><!---- large-6 --->
       <div class="large-6"></div><!----- large-6  --->
    </div><!--- row --->

  </div><!--- image-contaier --->




</div> <!----- Features --> 

            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "landcruisers",
    head: {
    title: "Momentum Credit – Ex-GoK Lancruisers for Sale",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "KDE registered Ex-Gok 2014/15 Toyota Landcruiser 79 series for sale. It’s a 4*4,4WD reconditioned by the Kenya vehicle Manufactured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Credit – Ex-GoK Lancruisers for Sale",
      },
      {
        hid: "description",
        name: "description",
        content:
          "KDE registered Ex-Gok 2014/15 Toyota Landcruiser 79 series for sale. It’s a 4*4,4WD reconditioned by the Kenya vehicle Manufactured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
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
        content: "Momentum Credit – Ex-GoK Lancruisers for Sale",
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
        content: "Momentum Credit – Ex-GoK Lancruisers for Sale",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "KDE registered Ex-Gok 2014/15 Toyota Landcruiser 79 series for sale. It’s a 4*4,4WD reconditioned by the Kenya vehicle Manufactured (KVM). The rugged-core appeal makes it a perfect fit for the off-road and on-road world. ",
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
  mounted() {
    let self = this;
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
  },
  data() {
    return {
      counter: 0,
      formSubmitted: "",
      hasScrolledToBottom: false,
      form: {
        source: "landcruiserform",
        user_name: "",
        user_phone: "",
        user_email: "",
        user_details:"",
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
  created() {},
};
</script>

<style>
.overlay-landcruiser .input-row .input-item label {
     display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}
.overlay-landcruiser  .input-row .input-item{
display: block;
}
.overlay-landcruiser  .input-row .input-item input{
  border-color: #ccc;
    padding-left: 1rem;
    min-height: 40px;
    border-radius: 0;
    border-radius: 25px;
    background: transparent;
}
.owl-theme .owl-nav.disabled + .owl-dots{
   margin-top: -60px !important;
    position: absolute !important;
    left: 50% !important;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: #e5ba5b !important;
}
.owl-theme .owl-dots .owl-dot span{
     background: #fff !important;
}
.hide{
  display: none;
}
.item-banner{
position:relative;
}
.item-banner .overlay{
    position: absolute;
    top: 30%;
    bottom: 50%;
    left: 5%;
    width: 40%;

}
.overlay-landcruiser .calculator-form{
  
    display: table;
    z-index: 9;
    position: absolute;
    top: 30%;
    bottom: 50%;
    right: 5%;
    width: 30%;
    background: #F1F3F5;
    box-shadow: 0px 0px 4px 0px rgb(140 140 140 / 32%);
    border-radius: 46px;
}

.overlay-landcruiser  textarea{
height: 100px !important;
}

.overlay-landcruiser .calculator-form h1{
    display: inline-block;
    margin: 0 auto;
    background-color: #E5BA5B;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    font-weight: 900;
    box-shadow: 1px 2px 3px rgb(144 138 138 / 35%);
    font-size: 1.3rem;
    text-align: center;
}
.overlay-landcruiser .form-title-wrapper{
 text-align: center;
 margin-top: 20px;
}
.item-banner .overlay h1{
    color: #fff;
    font-size: 60px;
    line-height: 1em;
    font-weight: bolder;
}
.item-banner .overlay .btn{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding: 0.9rem  4.25rem 0.9rem 4.25rem;
    margin-top:20px;
}
.landcruiser-image h3{
 font-size: 50px;
    font-weight: bolder;
    color: #000;
    margin-bottom: 2rem;
    margin-top: 2rem;
}
.landcruiser-image .title01{
   margin-top: 0rem;
}
.landcruiser-image p{
  font-size: 19px;
  margin-bottom: 4rem;
  margin-top: 0rem;
}

.relative{
  position:relative;
}
.starting-price{
    position: absolute;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
    right: 0px;
    padding: 1.5rem;
    width: 90%;
    margin-top: 25px;
    border-radius: 9999px 0px 0px 9999px;
}
.section-container01{
  width: 100%;
 max-width: 100%;
 padding-left: 0rem !important;
    padding-right: 0rem !important;
}
.btn:hover {
    opacity: 0.9;
    background-color: #E5BA5B;
}
.table{
display:table;
height: 700px;
margin: 0 auto;
}
.table-cell{
display:table-cell;
vertical-align: middle;
text-align: center;
}
.table .table-cell h3{
  font-weight: bolder;
  font-size: 50px;
  color:#fff;
  margin: 0 auto;
}
.table .table-cell p{
      line-height: 2em;
}
.section-title-feature{
  font-weight: bolder;
  font-size: 24px;
  color:#445c5f;
  text-align: center;
  background-image: url("~assets/img/menulandcruiser.png");
  background-repeat: no-repeat;
  background-position: 45% center;
  margin-top: 2em !important;
  margin-bottom: 2em !important;
}
.image-contaier{
position:relative;
}
.overlay-wrapper{
    background-image: url("~assets/img/opacity-image.png");
    position: absolute;
    z-index: 9;
    top: 0;
    color: #fff;
    height: 100%;
    width: 50%;
}
.landcruiser-image{
display:block;
margin:0 auto;
text-align: center;
padding-left: 3rem;
padding-right: 3rem;
}

.large-6 {
    width: 50%;
}
.row{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
.specification{
  background: #445c5f;
  padding-bottom: 0rem;
  padding-top: 3rem;
  padding-left: 0rem;
  padding-right: 0rem;
}
.specification-left p{
text-align: right;
color:#fff;
font-size: 24px;
margin-top: 0.5em;
margin-bottom: 0.5em;
}
.specification-left{
  margin-bottom: 6rem;
  border-right: solid 1px #607A7C;
  padding-right: 3rem;
}

table { 
  width: 100%; 
  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  /*background: #eee; */
}
th { 
  background: #445C5F; 
  color: #e5ba5b; 
  font-weight: bold; 
  font-size: 18px;
   text-align: center;
}
td, th { 
  padding: 1rem;
  border: 1px solid #607A7C; 
}
td{
text-align: left;
color:#fff;
}
section{
  padding-bottom: 0px;
}
/** media query */

@media (max-width: 480px) {
  .overlay-wrapper{
    position: initial;
    width: 100%;
    background-color: #445C5F;
    background-image: none;
  }
  .features .large-6 {
    width: 100%;
}
  .features  .table{
    height: auto;
    padding: 2rem;
}
.item-banner .overlay {
    top: 15%;
    left: 10%;
}
.item-banner .overlay h1,.landcruiser-image .title01,.landcruiser-image h3,.table .table-cell h3 {
    font-size: 18px;
}
.landcruiser-image .title01,.landcruiser-image h3,.starting-price,.table .table-cell h3{
  text-align: center;
}
.item-banner .overlay .btn,.starting-price {
    font-size: 14px;
    padding: 0.3rem 0.4rem 0.3rem 0.4rem;
    margin-top: 9px;
}
.starting-price {
      margin-top: 50px;
}
.specification-left p{
   font-size: 14px;
}
.specification h3{
    color: #fff;
    text-align: center;
}
.features .section-title-feature{
  color: #445c5f;
  background-position: 33% center;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}
.overlay-landcruiser .calculator-form{
      margin-top: 10px;
      position: initial;
      width: 95%;
}
}

@media (max-width: 767.98px) {
.overlay-wrapper{
    position: initial;
    width: 100%;
    background-color: #445C5F;
    background-image: none;
  }
  .features .large-6 {
    width: 100%;
}
  .features  .table{
    height: auto;
    padding: 2rem;
}
.item-banner .overlay {
    top: 15%;
    left: 10%;
}
.item-banner .overlay h1,.landcruiser-image .title01,.landcruiser-image h3,.table .table-cell h3 {
    font-size: 18px;
}
.landcruiser-image .title01,.landcruiser-image h3,.starting-price,.table .table-cell h3{
  text-align: center;
}
.item-banner .overlay .btn,.starting-price {
    font-size: 14px;
    padding: 0.3rem 0.4rem 0.3rem 0.4rem;
    margin-top: 9px;
}
.starting-price {
      margin-top: 50px;
}
.specification-left p{
   font-size: 14px;
}
.specification h3{
    color: #fff;
    text-align: center;
}
.features .section-title-feature{
  color: #445c5f;
  background-position: 33% center;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}
.overlay-landcruiser .calculator-form{
      margin-top: 10px;
      position: initial;
      width: 95%;
}
}

@media (max-width:320px) {}
@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
    /* For iPad portrait layouts only */
.overlay-wrapper{
    position: initial;
    width: 100%;
    background-color: #445C5F;
    background-image: none;
  }
  .features .large-6 {
    width: 100%;
}
  .features  .table{
    height: auto;
    padding: 2rem;
}
.item-banner .overlay {
    top: 15%;
    left: 10%;
}
.item-banner .overlay h1,.landcruiser-image .title01,.landcruiser-image h3,.table .table-cell h3 {
    font-size: 18px;
}
.landcruiser-image .title01,.landcruiser-image h3,.starting-price,.table .table-cell h3{
  text-align: center;
}
.item-banner .overlay .btn,.starting-price {
    font-size: 14px;
    padding: 0.3rem 0.4rem 0.3rem 0.4rem;
    margin-top: 9px;
}
.starting-price {
      margin-top: 50px;
}
.specification-left p{
   font-size: 14px;
}
.specification h3{
    color: #fff;
    text-align: center;
}
.features .section-title-feature{
  color: #445c5f;
  background-position: 33% center;
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}
.overlay-landcruiser .calculator-form{
      margin-top: 10px;
      position: initial;
      width: 95%;
}
    }
</style>