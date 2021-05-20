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
        <router-link to="/planets">
          <v-icon large color="green darken-2"> mdi-arrow-left </v-icon>
        </router-link>
        <img src="../assets/planet.png" width="50%" alt="" />
        <h1>{{ planet.name }}</h1>
        <table id="dataTable">
          <tr>
            <td><strong>Population</strong></td>
            <td>{{ planet.population }}</td>
          </tr>
          <tr>
            <td><strong>climate</strong></td>
            <td>{{ planet.climate }}</td>
          </tr>
          <tr>
            <td><strong>terrain</strong></td>
            <td>{{ planet.terrain }}</td>
          </tr>
          <tr>
            <td><strong>diameter</strong></td>
            <td>{{ planet.diameter }}</td>
          </tr>
          <tr>
            <td><strong>gravity</strong></td>
            <td>{{ planet.gravity }}</td>
          </tr>
          <tr>
            <td><strong>Orbital period</strong></td>
            <td>{{ planet.orbital_period }}</td>
          </tr>
          <tr>
            <td><strong>Rotation period</strong></td>
            <td>{{ planet.rotation_period }}</td>
          </tr>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanetDetail",
  data() {
    return {
      planet: null,
      loading: true,
      errored: false,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/planets/${this.$route.params.id}`
      );
      this.planet = response.data;
      this.loading = false;
    } catch (error) {
      this.$notify({
        group: "error",
        title: "Planet not found",
        type: "error",
      });
      this.$router.push("/planets");
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
