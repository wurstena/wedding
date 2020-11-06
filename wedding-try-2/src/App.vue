<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="./assets/images/Wedding-Logo.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/">
          <div class="menu-item home">
            <p>Home</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

</script>

<style>
* {
  box-sizing: border-box;
}



#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  height: 100px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;

}

#brand img {
  width: 100%;

}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
