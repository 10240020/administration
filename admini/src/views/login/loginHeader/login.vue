<template>
  <div class="login">
    <div class="loginBoxBorder">
      <span class="PositionBack">  Welcome your arrival </span>
      <div class="bcak">
        <div class="LoginBoxCenter">
          <div class="loginBox">
            <div class="loginText">
              <span>Login</span>
            </div>
            <div class="loginIcon">
              <span
                >sign<i
                  :class="['el-icon-' + data.icon]"
                  v-for="(data, index) in loginData.icon"
                  :key="index"
                ></i
              ></span>
            </div>
          </div>
          <Center />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Center from "../loginCenter/loginCenter.vue";
import loginTs from "./login";
import loginData from "./loginData";
export default defineComponent({
  components: {
    Center,
  },
  setup() {
    return {
      loginTs,
      loginData,
    };
  },
});
</script>
<style lang="sass" scoped>
@import './login.sass'
</style>