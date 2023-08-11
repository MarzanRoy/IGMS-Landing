<template>
  <div class="body-container">
    <div class="text-size-changer-container">
      <div class="text-size-changer" style="font-size: 18px">
        <a style="color:#848484" href="javascript:void(0);" class="decrease font_18">A-</a>
        <a style="color:#848484" href="javascript:void(0);" class="increase font_18">A+</a>
      </div>
    </div>
    <div class="page-container">
      <TabWrapper>
        <Tab title="Search" :contents="Data" />
        <Tab title="General Information on IGMS" :contents="Data['igms']" />
        <Tab title="General Information on Accounts with IGMS" :contents="Data['accounts']" />
        <Tab title="General Information on Proposals" :contents="Data['proposals']" />
        <Tab title="Training Guides" :contents="Data['guides']" />
      </TabWrapper>
    </div>
  </div>
</template>

<script>
import TabWrapper from "@/components/TabWrapper";
import Data from "@/assets/helpData.json";
import Tab from "@/components/Tab";


export default {
  name: "HelpView",
  components: {
    TabWrapper,
    Tab
  },
  methods: {},
  data() {
    return {
      Data : Data,
    }
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  margin: auto;
  font-size: 16px;
  padding-left: 3%;
  width: 1170px;
}

.text-size-changer a {
  margin-right: 15px;
}

.text-size-changer-container {
  margin: auto;
  width: 1170px;
  text-align: right;
  padding: 10px;
}

.body-container {
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}
</style>