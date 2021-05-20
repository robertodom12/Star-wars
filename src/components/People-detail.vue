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
        <router-link to="/people">
          <v-icon large color="green darken-2"> mdi-arrow-left </v-icon>
        </router-link>
        <img src="../assets/character.png" width="40%" alt="" />
        <h1>{{ planet.name }}</h1>
        <table id="dataTable">
          <tr>
            <td><strong>Birth Year</strong></td>
            <td>{{ planet.birth_year }}</td>
          </tr>
          <tr>
            <td><strong>Mass</strong></td>
            <td>{{ planet.mass }}</td>
          </tr>
          <tr>
            <td><strong>Skin Color</strong></td>
            <td>{{ planet.skin_color }}</td>
          </tr>
          <tr>
            <td><strong>Height</strong></td>
            <td>{{ planet.height }}</td>
          </tr>

          <tr>
            <td><strong>Hair Color</strong></td>
            <td>{{ planet.hair_color }}</td>
          </tr>
          <tr>
            <td><strong>Gender</strong></td>
            <td>{{ planet.gender }}</td>
          </tr>
          <tr>
            <td><strong>Eye color</strong></td>
            <td>{{ planet.eye_color }}</td>
          </tr>
        </table>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PeoplepDetail",
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
        `https://swapi.dev/api/people/${this.$route.params.id}`
      );
      this.planet = response.data;
      this.loading = false;
    } catch (error) {
      this.$notify({
        group: "error",
        title: "Character not found",
        type: "error",
      });
      this.$router.push("/people");
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
