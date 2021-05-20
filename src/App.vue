<template>
  <div id="app">
    <notifications group="error" />
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #2e557c;
}

h1 {
  color: white;
}

.main-box {
  margin-top: 3rem;
  width: 100%;
}

a {
  color: white;
  text-decoration: none;
}

/*TRANSITIONS FOR V-IF*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.header-list{
  text-align: center;
}

.header-list > a{
  float: left;
}

/* TABLE */
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
</style>
