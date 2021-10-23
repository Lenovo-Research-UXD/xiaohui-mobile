<template>
  <div class="contact">
    <div class="title">联系我们</div>
    <div class="lists">
      <div class="list">
        <img src="/images/about/icon-phone.svg" alt="icon" class="icon" />
        <div class="content">+86 18519577858</div>
      </div>
      <div class="list">
        <img src="/images/about/icon-email.svg" alt="icon" class="icon" />
        <div class="content">xiaohui@lenovo.com</div>
      </div>
      <div class="list">
        <img src="/images/about/icon-address.svg" alt="icon" class="icon" />
        <div class="content">北京市海淀区软件园二期联想全球总部E4</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  width: 315px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    @include title;
    position: relative;
    left: 1px;
  }

  .lists {
    width: 315px;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .list {
      width: 315px;
      height: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 26px;
        height: 26px;
        opacity: 0.6;
      }
      .content {
        @include commonText;
        width: calc(315px - 11px - 26px);
      }
    }
  }
}
</style>
