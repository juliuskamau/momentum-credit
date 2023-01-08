<template>
  <div class="page-container">
    <section class="page-title-section blog-page p-4">
      <div class="content">
        <h1 class="title">Get Insightful &amp; Fun Content</h1>
        <h3 class="subtitle">#KeepTheMomentum</h3>
      </div>
    </section>
    <section>
      <div class="section-container">
        <div class="single-blog flex flex-wrap">
          <div class="flex-1 blog-content">
            <div class="featured-media">
              <div
                class="bg"
                :style="{backgroundImage: `url('${getFeaturedMedia(postData.featured_media,postData._embedded)}')`}"
              ></div>
              <img
                :src="getFeaturedMedia(postData.featured_media,postData._embedded)"
                alt
                class="hidden"
              />
            </div>
            <div>
              <h1 class="single-blog-title">{{postData.title.rendered}}</h1>
            </div>
            <article v-html="postData.content.rendered" class="single-blog-content"></article>
          </div>
          <div class="w-4/12 sidebar">
            <div class="sidebar-content">
              <h4 class="sidebar-title">More Posts</h4>

              <nuxt-link
                :to="`/articles/${blog.id}`"
                class="item"
                v-for="blog in otherPosts"
                :key="blog.id"
              >
                <div class="media">
                  <img
                    :src="getFeaturedMedia(blog.featured_media,blog._embedded)"
                    :alt="blog.title.rendered"
                  />
                </div>
                <span class="date">
                  &#x1f4c5;
                  <span>{{getFormatedDate(blog.date_gmt)}}</span>
                </span>
                <h4 class="title">{{blog.title.rendered}}</h4>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "blog",
  head() {
    return {
      title: this.postData.title.rendered.substring(0, 60),
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "momentum,sharia,contact,Sahih,branch",
        },
        {
          hid: "title",
          name: "title",
          content: this.postData.title.rendered.substring(0, 25),
        },
        {
          hid: "description",
          name: "description",
          content: this.postData.title.rendered,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.postData.title.rendered.substring(0, 25),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.postData.title.rendered,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: this.postData.title.rendered.substring(0, 25),
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: this.postData.title.rendered,
        },
      ],
    };
  },
  scrollToTop: true,
  data() {
    return {
      postId: 1,
      // postData: [],
      // otherPosts: [],
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
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`/posts/${params.id}?_embed`);

    const relatedPosts = await $axios.$get(
      `/posts?_embed&categories=2,3&exclude=${params.id}&per_page=3`
    );
    return { postData: post, otherPosts: relatedPosts };
  },
  // async fetch() {
  //   this.postData = await this.$http.$get(
  //     `/posts/${this.$route.params.id}?_embed`
  //   );

  //   this.otherPosts = await this.$http.$get(
  //     `/posts?_embed&exclude=${this.$route.params.id}&per_page=3`
  //   );
  // },
  mounted() {
    let self = this;

    //always close the mobile menu
    this.$store.commit("settings/closeMobileMenu");
    this.postId = this.$route.params.id;
  },
  methods: {
    getFeaturedMedia(id, media) {
      if (id == 0) {
        return `https://via.placeholder.com/400x300/aaa/aaa`;
      }
      return media["wp:featuredmedia"][0]["source_url"];
    },
    getFormatedDate(dateString) {
      let formattedDate = new Date(Date.parse(dateString));
      return formattedDate.toDateString();
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
