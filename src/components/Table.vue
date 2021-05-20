<template>
  <div>
    <div class="header-list">
      <router-link to="/">
        <v-icon large color="green darken-2"> mdi-arrow-left </v-icon>
      </router-link>
      <h1>{{ title }}</h1>
    </div>
    <input v-model="searchText" class="searchInput" type="text" />
    <table id="dataTable" style="width: 100%">
      <tr class="header">
        <th>Name</th>
        <th>Actions</th>
      </tr>
      <tr v-bind:key="item.name" v-for="(item, index) in search">
        <td>{{ item.name }}</td>
        <td>
          <router-link :to="{ name: route, params: { id: index + 1 } }">
            <v-icon large color="green darken-2">
              mdi-eye-circle-outline
            </v-icon>
          </router-link>
        </td>
      </tr>
    </table>
    <div id="empty-box" v-if="search.length === 0">
        <h2>Data empty or not found</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planets",
  components: {},
  props: {
    dataSource: Array,
    title: String,
    route: String,
  },
  data() {
    return {
      loading: true,
      errored: false,
      searchText: null,
    };
  },
  methods: {},
  computed: {
    search() {
      if (this.searchText) {
        return this.dataSource.filter((item) => {
          return this.searchText
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.dataSource;
      }
    },
  },
};
</script>

<style scoped>

.searchInput {
  width: 100%;
  background-color: white;
  height: 2rem;
  border-radius: 5px;
  margin-bottom: 1.6%;
}
#empty-box{
    background-color: white;
    text-align: center;
}
</style>
