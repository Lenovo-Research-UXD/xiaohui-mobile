<template>
  <div class="header">
    <img class="icon-menu" src="/images/common/icon-menu@2x.png" alt="menu" />
    <div class="icon-xiaohui-wrapper">
      <img
        class="icon-xiaohui"
        src="/images/common/icon-xiaohui@2x.png"
        alt="xiaohui"
      />
      <img src="/images/common/icon-beta.svg" alt="beta" class="icon-beta" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 44px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.icon-menu {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
}
.icon-xiaohui-wrapper {
  width: 80px;
  height: 17px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-xiaohui {
    width: 80px;
    height: 17px;
  }

  .icon-beta {
    width: 14px;
    height: 5px;
    position: absolute;
    right: -18px;
    top: 1px;
  }
}
</style>
