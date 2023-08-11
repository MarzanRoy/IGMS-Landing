<template>
  <ul class="tabs-header">
    <li
        v-for="(tabTitle, index) in tabTitles"
        :key="index"
        :class="{ selected: selectedTab === tabTitle }"
        @click="selectedTab = (selectedTab === tabTitle) ? 'Search' : tabTitle; ">
      {{ tabTitle }}
    </li>
  </ul>
  <div style="height: 1000px;width: 75%">
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "TabWrapper",
  setup( props, { slots } ) {
    const tabTitles = ref(slots.default().map((slot) => slot.props.title));
    const selectedTab = ref('Search');

    provide("selectedTab", selectedTab);
    return {
      selectedTab,
      tabTitles
    };
  }
}
</script>

<style scoped>
.tabs-header ul {
  width: 25%;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  display: table;
  background: #144283;
}

.tabs-header li, .tabs-header li.selected {
  border-bottom: solid 1px #394353;
}

.tabs-header li.selected {
  background: #285ba3;
}

.tabs-header li:hover {
  background: #285ba3;
}

.tabs-header li {
  box-shadow: 1px 1px 5px 1px #6590cc;
  cursor: pointer;
  background: #144283;
  list-style: none;
  color: #ffffff;
  position: relative;
  display: block;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

.tabs-header {
  width: 252px;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
}
</style>