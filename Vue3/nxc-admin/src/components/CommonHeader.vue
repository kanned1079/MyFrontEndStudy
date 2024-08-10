<script setup lang="ts" name="CommonHeader">

</script>

<template>
  <div class="root">
    <span class="title-part">
      <p>Nxc Networks</p>
    </span>
    <span class="r-part">
      <div class="l-content">
        <p>仪表盘</p>
      </div>
      <div class="r-content">
        <div class="icn-part">
          <d-button
              icon="delete"
              shape="circle"
              title="Delete"
          ></d-button>
        </div>
        <div class="profile-part">
          <p>mail</p>
        </div>
      </div>
    </span>
  </div>
</template>

<style scoped>
.root {
  height: 6vh;
  text-align: left;
  display: flex;
  .title-part {
    height: 100%;
    background-color: #2f477f;
    text-align: center;
    p {
      width: 240px;
      line-height: 6vh;
    }
  }
  .r-part {
    width: 100%;
    height: 100%;
    background-color: #385894;
    display: flex;
    justify-content: space-between;
    .l-content {
      width: 120px;
      text-align: center;
    }
    .r-content {
      width: 40vh;
      display: flex;
      text-align: right;
      justify-content: right;
      .icn-part {
        width: 6vh;
        height: 6vh;
        background-color: #9d9d9d;
        text-align: center;
        margin-right: 1vh;
        line-height: 6vh;
        justify-items: center;
        justify-content: center;
      }
      .profile-part {
        width: 30vh;
        background-color: #64967E;
        margin-right: 2vh;
        text-align: center;
      }
    }
  }
}
</style>