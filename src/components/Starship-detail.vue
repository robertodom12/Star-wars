<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      class="mx-auto"
      width="100%"
      type="text"
    ></v-skeleton-loader>
    <transition name="fade">
      <div id="detail-box" v-if="!loading">
        <router-link to="/starships">
          <v-icon large color="green darken-2"> mdi-arrow-left </v-icon>
        </router-link>
        <img src="../assets/starship.png" width="50%" alt="" />
        <h1>{{ planet.name }}</h1>
        <table id="dataTable">
          <tr>
            <td><strong>Starship Class</strong></td>
            <td>{{ planet.starship_class }}</td>
          </tr>
          <tr>
            <td><strong>Model</strong></td>
            <td>{{ planet.model }}</td>
          </tr>
          <tr>
            <td><strong>Passengers</strong></td>
            <td>{{ planet.passengers }}</td>
          </tr>

          <tr>
            <td><strong>Manufacturer</strong></td>
            <td>{{ planet.manufacturer }}</td>
          </tr>
          <tr>
            <td><strong>Crew</strong></td>
            <td>{{ planet.crew }}</td>
          </tr>
          <tr>
            <td><strong>Cost in credits</strong></td>
            <td>{{ planet.cost_in_credits }}</td>
          </tr>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StarshipDetail",
  data() {
    return {
      planet: null,
      loading: true,
      errored: false,
    };
  },
  async mounted() {
    try {
      //EL API NO TIENE EL REGISTRO 1 POR ALGUNA RAZON :P
      const response = await axios.get(
        `https://swapi.dev/api/starships/${parseInt(this.$route.params.id) + 1}`
      );
      this.planet = response.data;
      this.loading = false;
    } catch (error) {
      this.$notify({
        group: "error",
        title: "Starship not found",
        type: "error",
      });
      this.$router.push("/starships");
    }
  },
};
</script>

<style scoped>
#detail-box {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
