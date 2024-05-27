<template>
  <div class="not-container">
    <img src="https://img.imark8.com/images/403.png" class="not-img" alt="403" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>{{ $t('errorPage.text403') }}~🙅‍♂️🙅‍♀️</h4>
      <el-button type="primary" @click="router.push(HOME_URL)">{{ $t('errorPage.btn') }}</el-button>
    </div>
  </div>
</template>

<script setup name="403">
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/config'

const router = useRouter()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
