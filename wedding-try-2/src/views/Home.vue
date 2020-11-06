<template>
  <div>
    <div class="wrapper">

    </div>
    <PhotoList :images="images" />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoList from "../components/PhotoList.vue";

export default {
  name: "Home",
  components: {
    PhotoList
  },
  computed: {
    images() {
      return this.$root.$data.images;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
