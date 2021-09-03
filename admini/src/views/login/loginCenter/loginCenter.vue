<template>
  <div class="from">
    <div class="leftCenterFrom">
      <div class="headerFrom">
        <span>{{ loginData.welcome }}</span>
        <span>{{ loginData.here }}</span>
      </div>
      <div class="fromSubmit">
        <el-form
          :model="loginData.ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="pass">
            <el-input
              type="password"
              v-model="loginData.ruleForm.pass"
              autocomplete="off"
              placeholder="We need to know your user name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
              type="password"
              v-model="loginData.ruleForm.checkPass"
              autocomplete="off"
              placeholder="You need to fill in your password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginTs.submitForm"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="rightIkon">
      <img :src="loginData.Banner" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import loginTs from "../loginHeader/login";
import loginData from "../loginHeader/loginData";
export default defineComponent({
  setup() {
    return {
      loginTs,
      loginData,
    };
  },
});
</script>
<style lang="sass" scoped>
@import './loginCenter.sass'
</style>