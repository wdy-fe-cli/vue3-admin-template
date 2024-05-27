<template>
  <div class="toolbox relative" flex="dir:top">
    <!-- <the-page-title :showBackBtn="false" :title="$t('toolbox.t1')" :desc="$t('toolbox.t2')"></the-page-title> -->
  </div>
</template>

<script setup name="ToolBox">
import tool1Img from '/tool1.png'
import tool2Img from '/tool2.png'
import tool3Img from '/tool3.png'
import tool4Img from '/tool4.png'
import tool5Img from '/tool5.png'
import cardRightImg from '../../assets/images/card_right.png'
import comingImg from '../../assets/images/coming.png'
</script>

<style scoped lang="scss">
.toolbox {
  padding: 12px 24px;
  .card-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 260px;
    }
  }
}
</style>
