<template>
  <div class="table">
    <ul id="horizontal-list">
      <li>
        <router-link to="/dashboard/Sci-Fi">
          <span>Sci-Fi</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/Humor">
          <span>Humor</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/Mystery">
          <span>Mystery</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/Poetry">
          <span>Poetry</span>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>

<style>
.table {
  display: table; /* Allow the centering to work */
  margin: 0 auto;
}

ul#horizontal-list {
  min-width: 696px;
  list-style: none;
  padding: 20px 10px;
  border-bottom: 1px solid #ffaaaa;
}
ul#horizontal-list li {
  display: inline;
  padding: 10px 35px;
}
ul#horizontal-list a {
  color: #ffaaaa;
}
ul#horizontal-list li:hover {
  background-color: #fbfafc;
}
</style>
