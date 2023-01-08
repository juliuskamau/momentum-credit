<template>
  <div :class="{'page-container':true,'loadingPosts':postsLoading}">
    <section class="page-title-section blog-page p-4">
      <div class="content">
        <h1 class="title">Get Insightful &amp; Fun Content</h1>
        <h3 class="subtitle">#KeepTheMomentum</h3>
      </div>
    </section>
    <section class="pb-1rem">
      <div class="section-container">
        <h3 class="section-title text-center">Media</h3>

        <div class="blog-grid mb-10">
          <div class="blog-col">
            <div class="blog-cell">
              <div
                class="bg"
                :style="{backgroundImage: `url('${getFeaturedMedia(articles[0].featured_media,articles[0]._embedded)}')`}"
              ></div>
              <div class="header-overlay"></div>
              <div class="content">
                <h4>{{articles[0].title.rendered}}</h4>
                <nuxt-link :to="`/articles/sahih/${articles[0].id}`" class="btn sm">Read More</nuxt-link>
              </div>
            </div>
          </div>
          <div class="blog-col">
            <div class="blog-cell sahih-cell" v-for="article in filteredArticles" :key="article.id">
              <div
                class="bg"
                :style="{backgroundImage: `url('${getFeaturedMedia(article.featured_media,article._embedded)}')`}"
              ></div>
              <div class="header-overlay"></div>
              <div class="content">
                <!-- Everything You Need To Know About... -->
                <h4>{{article.title.rendered}}</h4>
                <nuxt-link :to="`/articles/sahih/${article.id}`" class="btn sm">Read More</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="hidden" v-if="news.length >= 1">
      <div class="section-container">
        <h3 class="section-title text-center">News</h3>

        <div class="blog-row">
          <div class="blog-cell" v-for="blog in news" :key="blog.id">
            <div
              class="bg"
              :style="{backgroundImage: `url('${getFeaturedMedia(blog.featured_media,blog._embedded)}')`}"
            ></div>
            <div class="header-overlay"></div>
            <div class="content">
              <h4>{{blog.title.rendered}}</h4>
              <nuxt-link :to="`/articles/${blog.id}`" class="btn sm">Read More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="m-blue-bg hidden">
      <div class="section-container">
        <h3 class="section-title text-center">Testimonials</h3>

        <div class="testimonial-container">
          <div class="testimonial-grid">
            <div class="item-wrapper focused">
              <div class="card">
                <p>I had an emergency at my business and Momentum came to my aid, I only called and one of the representatives came to my aid. It was quick and easy. Thanks Momentum</p>
                <h4>Martin Kiarie</h4>
                <h4>CEO</h4>
              </div>
              <div class="media-wrapper">
                <img src="~/assets/img/user@2x.png" alt="User Testimonial" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "media_sahih",
  layout: "sahih",
  head: {
    title: "Media - Momentum Sahih",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "momentum,sharia,news,Sahih,media,financing,book,kenya,nairobi",
      },
      {
        hid: "title",
        name: "title",
        content: "Momentum Sahih — السّلامُ عليكُمْ",
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
        content: "Momentum Sahih — السّلامُ عليكُمْ",
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
        content: "Momentum Sahih — السّلامُ عليكُمْ",
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
  scrollToTop: true,
  data() {
    return {
      mediaPostCaategoryId: 2,
      newsPostCategoryId: 3,
      postsLoading: false,
      //   articles: [],
      //   news: [],
      blogImages: [
        "/img/blog/blog-1@2x.jpg",
        "/img/blog/blog-2@2x.jpg",
        "/img/blog/blog-3@2x.jpg",
        "/img/blog/blog-4@2x.jpg",
        "/img/blog/blog-5@2x.jpg",
        "/img/blog/blog-6@2x.jpg",
        "/img/blog/blog-7@2x.jpg",
        "/img/blog/blog-8@2x.jpg",
        "/img/blog/blog-9@2x.jpg",
      ],
    };
  },
  computed: {
    filteredArticles() {
      return this.articles.slice(1, 5);
    },
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get(`/posts?categories=4&_embed`);
    //const posts = await $axios.$get(`/posts?categories=4&_embed`);
    return { articles: posts };
  },
  //   async fetch() {
  //     this.articles = await this.$http.$get(`/posts?categories=2&_embed`);

  //     this.news = await this.$http.$get(`/posts?categories=3&_embed`);
  //   },
  mounted() {
    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
  },
  methods: {
    getFeaturedMedia(id, media) {
      if (id == 0) {
        return `https://via.placeholder.com/800x400/aaa/aaa`;
      }
      return media["wp:featuredmedia"][0]["source_url"];
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
