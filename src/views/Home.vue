<template>
  <div id="app">
    <div id="home-container">
      <img src="../assets/logo.png" id="logo-home" width="100%" />
      <div id="btn-box">
        <router-link to="/planets">
          <div class="btn-home">
            <v-icon large color="green darken-2"> mdi-earth </v-icon>
            <span>Planets</span>
          </div>
        </router-link>
        <router-link to="/starships">
          <div class="btn-home">
            <v-icon large color="green darken-2"> mdi-rocket-launch </v-icon>
            <span>Starships</span>
          </div>
        </router-link>
        <router-link to="/people">
          <div class="btn-home">
            <v-icon large color="green darken-2">
              mdi-account-group-outline
            </v-icon>
            <span>People</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#home-container {
  width: 70%;
  margin: 0 auto;
  display: grid;
  row-gap: 25%;
  margin-top: 20%;
}

#logo-home {
  margin: 0 auto;
}

#btn-box {
  width: 100%;
  display: grid;
  row-gap: 2rem;
  text-align: left;
}

.btn-home {
  margin: 0 auto;
  width: 100%;
  color: white;
  background-color: #548c9c;
  border-radius: 5px;
}
</style>
