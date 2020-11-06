<template>
<div class="wrapper">
  <div class="photos">
    <div class="photo" v-for="photo in photos" :key="photo.id">
      <div class="info">
        <h1>{{photo.name}}</h1>
      </div>
      <div class="picture">
        <img :src="'/images/'+photo.image">
      </div>
      <div class="other-info">
        <h2>{{photo.date}}</h2>
        <p>{{photo.location}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: {
    photos: Array
  },
  methods: {
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.photos {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.photo {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.photo img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.photo .picture {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.other-info {
  display: flex;
}

.auto {
  margin-left: auto;
}
</style>
