<template>
  <div :class="{'page-container':true,'loadingPosts':postsLoading}">
    <section class="page-title-section blog-page p-4 custom-media-page">
      <div class="content">
        <h1 class="title">Get Insightful &amp; Fun Content</h1>
        <h3 class="subtitle">#KeepTheMomentum</h3>
      </div>
    </section>
    <section class="pb-1rem">
      <div class="section-container">
        <h3 class="section-title text-center">Media</h3>

        <div class="blog-grid">
          <div class="blog-col">
            <div class="blog-cell">
              <div
                class="bg"
                :style="{backgroundImage: `url('${getFeaturedMedia(articles[0].featured_media,articles[0]._embedded)}')`}"
              ></div>
              <div class="header-overlay"></div>
              <div class="content">
                <h4>{{articles[0].title.rendered}}</h4>
                <nuxt-link :to="`/articles/${articles[0].id}`" class="btn sm">Read More</nuxt-link>
              </div>
            </div>
          </div>
          <div class="blog-col">
            <div class="blog-cell" v-for="article in filteredArticles" :key="article.id">
              <div
                class="bg"
                :style="{backgroundImage: `url('${getFeaturedMedia(article.featured_media,article._embedded)}')`}"
              ></div>
              <div class="header-overlay"></div>
              <div class="content">
                <!-- Everything You Need To Know About... -->
                <h4>{{article.title.rendered}}</h4>
                <nuxt-link :to="`/articles/${article.id}`" class="btn sm">Read More</nuxt-link>
              </div>
            </div>

            <!-- Start Here -->
            <!-- <div class="blog-cell">
              <div class="bg" :style="{backgroundImage: `url('${blogImages[2]}')`}"></div>
              <div class="header-overlay"></div>
              <div class="content">
                <h4>Invoice factoring advantages and disadvantages..</h4>
                <nuxt-link to="/articles/3" class="btn sm">Read More</nuxt-link>
              </div>
            </div>-->
            <!-- /End Here -->
          </div>
        </div>
      </div>
    </section>

    <section class v-if="news.length >= 1">
      <div class="section-container">
        <h3 class="section-title text-center test1">News</h3>

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
    </section>

    <section class="m-blue-bg">
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
  name: "CRS",
  scrollToTop: true,
  data() {
    return {
      mediaPostCaategoryId: 2,
      newsPostCategoryId: 3,
      postsLoading: false,
      // articles: [],
      // news: [],
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
    const posts = await $axios.$get(`/posts?categories=2&_embed`);

    const blog = await $axios.$get(`/posts?categories=3&_embed`);
    return { articles: posts, news: blog };
  },
  // async fetch() {
  //   this.articles = await this.$http.$get(`/posts?categories=2&_embed`);

  //   this.news = await this.$http.$get(`/posts?categories=3&_embed`);
  // },
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
