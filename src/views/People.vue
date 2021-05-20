<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      class="mx-auto"
      width="100%"
      type="text"
    ></v-skeleton-loader>

    <transition name="fade">
      <div class="main-box" v-if="!loading">
        <Table
          title="People"
          route="PeoplepDetail"
          v-bind:dataSource="peopleArray"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Table from "../components/Table";

export default {
  name: "People",
  components: {
    Table,
  },
  data() {
    return {
      peopleArray: [],
      loading: true,
      errored: false,
      searchText: "",
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      this.peopleArray = response.data.results;
      this.loading = false;
    } catch (error) {
      this.$notify({
        group: "error",
        title: "Internal server error",
        type: "error",
      });
      this.$router.push("/");
    }
  },
  methods: {},
};
</script>

<style scoped>
#dataTable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#dataTable td,
#dataTable th {
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
}

#dataTable tr:hover {
  background-color: #ddd;
}

#dataTable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

.searchInput {
  width: 100%;
  background-color: white;
  height: 2rem;
  border-radius: 5px;
  margin-bottom: 1.6%;
}
</style>
