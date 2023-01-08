<template>
  <section class>
    <div class="section-container">
      <h3 class="section-title text-center" v-if="error.statusCode === 404">Page Not Found</h3>
      <h3 class="section-title text-center" v-else>An Error Occurred</h3>
      <div class="py-4 text-center">
        <nuxt-link to="/">Home Page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
};
</script>