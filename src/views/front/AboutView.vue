<template>

    <div class="container">
      <h1>關於我們</h1>
      <div class="header">
        <div class="headerText">
          <h3 style="margin-top:50px">一 小小卡鋪是您的最佳選擇 一</h3>
        </div>
      </div>
      
      <h1 class="title">專業、用心、良好的服務</h1>
      <div id="content">
        <n-grid cols="1 m:2" responsive="screen">
          <n-grid-item class="order1">
          <div class="content-img" data-aos="fade-right" data-aos-duration="500" >
            <img src="@/assets/about_01.jpg">
          </div>
        </n-grid-item>
        <n-grid-item class="order2">
          <div class="content monster-card">
            <p>你有開盒的的衝動嗎?</p>
            <p>每次選擇店家時都害怕遇到濾包</p>
            <p>或是購買到品項不良的商品嗎?</p>
            <p>那小小卡鋪將是您的最佳選擇!</p>
            <p>我們將為您提供專業、用心、良好的服務,</p>
            <p>讓您每次購買都能夠以安心、愉快的心情回家。</p>
          </div>
        </n-grid-item>
        <n-grid-item class="order3">
          <div class="content magic-card">
            <p>購買東西時最難受的事情</p>
            <p>莫過於等待出貨及到貨的時間了，</p>
            <p>因此小小卡鋪將在收到玩家訂單的第一時間</p>
            <p> 以最快的速度進行出貨!</p>
            <p>讓玩家能夠在最快的時間內開最新的卡包。</p>
          </div>
        </n-grid-item>
        <n-grid-item class="order4">
          <div class="content-img" data-aos="fade-left" data-aos-duration="500" >
            <img src="@/assets/about_02.jpg">
          </div>
        </n-grid-item>

        <n-grid-item class="order5">
          <div class="content-img" data-aos="fade-right" data-aos-duration="500" >
            <img src="@/assets/about_03.jpg">
          </div>
        </n-grid-item>
        <n-grid-item  class="order6">
          <div class="content trap-card">
            <p>小小卡鋪所有販售商品均為正版商品，</p>
            <p>敬請安心購買。</p>
            <p>依消費者保護法的規定，</p>
            <p>消費者享有七天鑑賞期。</p>
            <p>商品或訂單有任何問題可以來電聯絡我們</p>
            <p>電話 : (02)2300-9966</p>
            <p>營業時間 : 9:00am ~ 10:00pm</p>
          </div>
        </n-grid-item>
        </n-grid>
      </div>
      
    </div>
</template>

<style scoped>


.container {
  width: 75%;
  margin: auto;
  padding: 180px 0;
}

p {
  font-family: NotoSansTC-Medium;
  font-size: 1.5rem;
}

.title {
  text-align: center;
  color: white;
  margin: 100px 0 50px 0;
}


.header {
  color: white;
}

.headerText {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.headerText h3 {
  color: white;
  font-weight: 900;
}

#content {
  width: 100%;
  margin: auto;
}

.content {
  height: 300px;
  backdrop-filter: blur(50px);
  padding: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.content p {
  color: whitesmoke;
  font-size: 16px;
}

.content-img {
  height: 300px;
  
}

.content-img img {
  width: 100%;
  height: 100%;
}


.order1 {
  order:1;
}
.order2 {
  order:2;
}

.order3 {
  order:4;
}
.order4 {
  order:3;
}
.order5 {
  order:5;
}
.order6 {
  order:6;
}


@media (min-width:768px) {
  .content {
    height: 400px;
    padding: 0 80px;
  }
  .content p {
    font-size: 1.5rem;
  }

  .content-img {
    height: 400px;
  }
  
}

  @media (min-width:1400px) {
    .content {
      height: 450px;
      backdrop-filter: blur(50px);
      padding: 0 80px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .content p {
      font-size: 1.5rem;
    }

    .content-img {
      height: 450px;
    }
    .order1 {
      order:1;
    }
    .order2 {
      order:2;
    }
    .order3 {
      order:3;
    }
    .order4 {
      order:4;
    }
    .order5 {
      order:5;
    }
    .order6 {
      order:6;
    }
  }
</style>