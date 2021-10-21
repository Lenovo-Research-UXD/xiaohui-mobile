<template>
  <div class="footer">
    <div class="left-wrapper">
      <img src="/images/common/icon-uxd.svg" alt="uxd" class="icon-uxd" />
      <div class="contact-wrapper">
        <p>联想研究院用户研究体验设计团队</p>
        <p>电话：+86 18519577858</p>
        <p>联系邮箱：xiaohui@lenovo.com</p>
      </div>
    </div>
    <div class="right-wrapper">
      <img
        src="/images/common/image-qrcode@2x.png"
        alt="qrcode"
        class="qrcode"
      />
      <div class="tips">
        <p>扫码关注公众号</p>
        <p>了解更多资讯</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: 216px;
  padding: 41px 30px 52px 30px;
  border-top: 1px solid rgba(73, 73, 73, 0.1);

  display: flex;
  justify-content: space-between;

  background-color: $backgroundColor;

  .left-wrapper {
    width: 180px;
    height: 120px;
    .icon-uxd {
      width: 100px;
      height: 40px;
      object-fit: cover;
      margin-top: 4px;
    }

    .contact-wrapper {
      width: 180px;
      height: 60px;
      p {
        @include greyText;
      }
    }
  }

  .right-wrapper {
    width: 84px;
    height: 124px;
    display: flex;
    flex-direction: column;
    .qrcode {
      width: 84px;
      height: 84px;
      object-fit: cover;
    }

    .tips {
      width: 84px;
      height: 40px;
      p {
        @include greyText;
        text-align: right;
      }
    }
  }
}
</style>
