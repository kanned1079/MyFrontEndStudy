<script setup lang="ts" name="MainLobby">
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";
</script>

<template>
  <div class="root">
    <d-layout class="layout">
      <d-header class="dheader">
        <CommonHeader></CommonHeader>
      </d-header>
      <d-layout>
        <d-aside class="daside">
          <CommonAside></CommonAside>
        </d-aside>
        <d-content class="main-content">Content</d-content>
      </d-layout>
      <d-footer class="dfooter">Footer</d-footer>
    </d-layout>
  </div>

</template>

<style scoped lang="less">
.dheader, .dfooter {
  background: #333854;
  color: #fff;
  text-align: center;
  line-height: 6vh;
}

.daside {
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  min-width: 240px;
}

.main-content {
  height: 94vh;
}
</style>