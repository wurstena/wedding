<template>
  <div class="wrapper">
    <div class="images">
      <div class="image" v-for="image in images" :key="image.id">
        <div class="info">
          <h1>{{image.name}}</h1>
        </div>
        <div class="picture">
          <!--img :src="'./assets/images/' + image.pic"-->
        </div>
        <div class="extra-info">
          <h2>{{image.date}}</h2>
          <p>{{image.location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: {
    images: Array
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.images {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.image {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.picture img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.image .picture {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: gray;
  color: white;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 14px;
}

.extra-info {
  display: flex;
}

.auto {
  margin-left: auto;
}

</style>
