<template>
  <div class="home card">
    <img class="home-bg" src="https://cashier.obs.cidc-rp-12.joint.cmecloud.cn/fe-cash/welcome.png" alt="welcome" />
  </div>
</template>

<script setup name="home"></script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .home-bg {
    width: 60%;
    max-width: 1200px;
    margin-bottom: 20px;
  }
}
</style>
