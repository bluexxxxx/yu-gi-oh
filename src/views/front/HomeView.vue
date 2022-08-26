<template>
  <div class="container">
    <n-carousel :show-dots="false" autoplay interval="3000">
      <div style="width:100%;">
        <img class="carousel-img" src="@/assets/carousel_07.jpg">
      </div>
      <div  style="width:100%">
        <img class="carousel-img" src="@/assets/carousel_08.jpg">
      </div>
      <div  style="width:100%">
        <img class="carousel-img" src="@/assets/carousel_09.jpg">
      </div>
    </n-carousel>
  </div>

  <div class="container">
    <div class="header">
      <div class="headerText">
        <h1>規則說明</h1>
        <p>遊戲王公式卡片遊戲是利用你的《卡組》來跟對手</p>
        <p>進行《決鬥》的卡牌遊戲！</p>
        <p>遊戲的目的，是從《手牌》中《召喚》</p>
        <p>各式各樣的怪物、魔法、陷阱卡攻擊對手，</p>
        <p>當對手的生命點數《LP》變為0時，</p>
        <p>便可取得勝利。</p>
      </div>
    </div>
    <h1 class="title">卡牌種類</h1>
    <p class="small-title">卡牌主要分為３種，分別為「怪獸卡」、「魔法卡」及「陷阱卡」。</p>
    <div id="content">
      <n-grid cols="1 s:2" responsive="screen">

        <div class="flex-content"></div>
      <n-grid-item class="order1">
        <div class="content">
          <h3 class="monster-card font-size-2rem">怪獸卡</h3>
          <p>怪獸卡是戰場的主角！</p>
          <p>沒有持有任何《効果》的「通常怪獸」</p>
          <p>擁有特殊《効果》的「效果怪獸」</p>
          <p>除了這些卡牌外，還有「儀式怪獸」、「融合怪獸」、「同步怪獸」、「超量怪</p>
          <p>獸」、「鐘擺怪獸」、「連結怪獸」」等強力的怪獸卡！詳情請參閱 <a href="https://www.yugioh-card.com/hk/howto/?lang=cn-t" target="_blank">公式規則書</a> 吧！</p>
        </div>
      </n-grid-item>
      <n-grid-item class="order2">
        <div class="content-img" data-aos="fade-left" data-aos-duration="1000">
          <img src="@/assets/type_of_card_01.png">
        </div>
      </n-grid-item>
      <n-grid-item class="order3">
        <div class="content-img" data-aos="fade-right" data-aos-duration="1000">
          <img src="@/assets/type_of_card_02.png">
        </div>
      </n-grid-item>
      <n-grid-item class="order4">
        <div class="content">
          <h3 class="magic-card font-size-2rem">魔法卡</h3>
          <p>魔法卡《發動》後能夠發揮各種《効果》！在決鬥中不可或缺！</p>
        </div>
      </n-grid-item>
      <n-grid-item class="order5">
        <div class="content">
          <h3 class="trap-card font-size-2rem">陷阱卡</h3>
          <p>雖然陷阱卡使用的時機有所限制，但若能加以善用的話，便有機會扭轉局勢！</p>
          <p>《發動》陷阱智取對手！</p>
        </div>
      </n-grid-item>
      <n-grid-item class="order6">
        <div class="content-img" data-aos="fade-left" data-aos-duration="1000">
          <img src="@/assets/type_of_card_03.png">
        </div>
      </n-grid-item>
    </n-grid>
    </div>
    
    <h1 class="title">卡牌看法</h1>
    <div id="content">
      <n-grid cols="1 s:2" responsive="screen">
        <n-grid-item class="order7">
        <div class="content-img margin-bottom" data-aos="fade-right" data-aos-duration="1000" >
          <img src="@/assets/card_see_01.png">
        </div>
      </n-grid-item>
      <n-grid-item class="order8">
        <div class="content monster-card">
          <h3 class="font-size-2rem">怪獸卡</h3>
            <li>
              <h4>① 卡名</h4>
              <p>在這位置上寫上了卡牌名稱。</p>
            </li>
            
            <li>
              <h4>② 屬性</h4> 
              <p>怪獸主要分為6種屬性! 卡牌的效果中也有只影響特定屬性的效果存在。</p>
            </li>

            <li>
              <h4>③ 等級</h4>
              <p>以★的數目來表示該怪獸的等級。</p>
            </li>
            
            <li> 
              <h4>④ 怪獸情報</h4>
              <p>在這位置上寫了卡牌效果及使用方法。(通常怪獸除外)</p>
            </li>
            
            <li> 
              <h4>⑤ 種族</h4> 
              <p>怪獸區分為許多不同種族。此外，持有特定能力的怪獸在此處還會有另外的標示。</p>
            </li>
            
            <li>
              <h4>⑥ 攻擊力・守備力</h4> 
              <p>ATK指的是怪獸的攻擊力、DEF則表示怪獸的守備力，數值越高，在戰鬥時越有利。</p>
            </li>
        </div>
      </n-grid-item>
      <n-grid-item class="order9">
        <div class="content magic-card">
          <h3 class="font-size-2rem">魔法卡</h3>
          <li>
            <h4>① 卡名</h4> 
            <p>在這位置上寫上了卡牌名稱。</p>
          </li>
          
          <li>
            <h4>② 卡牌種類</h4> 
            <p>看見「魔」的標誌，就代表這張卡是魔法卡。</p>
          </li>

          <li>
            <h4>③ 效果標記</h4> 
            <p>魔法卡基本的六個效果種類分別以標記作為記號。</p>
          </li>
          
          <li>
            <h4>④ 效果說明</h4> 
            <p>記述著魔法卡的發動條件及效果。仔細閱讀後使用吧！</p>
          </li>
        </div>
      </n-grid-item>
      <n-grid-item class="order10">
        <div class="content-img margin-top" data-aos="fade-left" data-aos-duration="1000">
          <img src="@/assets/card_see_02.png">
        </div>
      </n-grid-item>

      <n-grid-item class="order11">
        <div class="content-img" data-aos="fade-right" data-aos-duration="1000">
          <img src="@/assets/card_see_03.png">
        </div>
      </n-grid-item>
      <n-grid-item  class="order12">
        <div class="content trap-card">
          <h3 class="font-size-2rem">陷阱卡</h3>
          <li>
            <h4>① 卡名</h4> 
            <p>在這位置上寫上了卡牌名稱。</p>
          </li>
          
          <li>
            <h4>② 卡牌種類</h4> 
            <p>看見「罠」的標誌，就代表這張卡是陷阱卡。</p>
          </li>

          <li>
            <h4>③ 效果標記</h4> 
            <p>陷阱卡基本的三個效果種類分別以標記作為記號。</p>
          </li>
          
          <li>
            <h4>④ 效果說明</h4> 
            <p>記述著陷阱卡的發動條件及效果。仔細閱讀後使用吧！</p>
          </li>
        </div>
      </n-grid-item>
      </n-grid>
    </div>
    
  </div>
</template>

<style scoped>

p {
  font-family: NotoSansTC-Medium;
}

.container {
  width: 75%;
  margin: auto;
  padding: 150px 0 0 0;
}

.n-carousel {
  margin-top: 2%;
  width: 100%;
  height: 200px;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


p {
  font-family: NotoSansTC-Medium;
  font-size: 1.2rem;
}

.title {
  text-align: center;
  color: white;
  margin: 30px 0 50px 0;
}

.small-title {
  text-align: center;
  color: white;
  margin: -30px 0 50px 0;
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
  font-size: 0.7rem;
}

.headerText h1 {
  color: rgb(255, 255, 255);
  font-weight: bolder;
  text-shadow: 8px 8px 6px #2b7d83;
}

.headerText p {
  font-size: 1rem;
}

#content {
  width: 100%;
  margin: auto;
}

.content {
  height: 450px;
  backdrop-filter: blur(50px);
  padding: 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.font-size-2rem {
  font-size: 2rem;
  margin-bottom: 20px;
}

.monster-card {
  color:#e49061;
}

.magic-card {
  color:#01947d;
}

.trap-card {
  color:#ac1a75;
}

.margin-bottom {
  margin-bottom: 100px;
}

.margin-top {
  margin-top: 50px;
}


.content li {
  list-style: none;
}

.content p {
  color: whitesmoke;
  font-size: 15px;
}

.content h4 {
  color: white;
}

.content-img {
  height: 300px;
}

.content-img img {
  width: 100%;
  height: 100%;
}

.monster-card h4{
  display: inline-block;
  background-color:#e49061;
  border-radius: 5px;
}

.magic-card h4{
  display: inline-block;
  background-color:#01947d;
  border-radius: 5px;
}

.trap-card h4 {
  display: inline-block;
  background-color:#ac1a75;
  border-radius: 5px;
}


.order1 {
  order: 2;
}
.order2 {
  order: 1;
}

.order3 {
  order:3;
}
.order4 {
  order:4;
}
.order5 {
  order:6;
}
.order6 {
  order:5;
}

.order7 {
  order:7;
}

.order8 {
  order:8;
}

.order9 {
  order:10;
}

.order10 {
  order:9;
}

.order11 {
  order:11;
}

.order12 {
  order:12;
}

.carousel-text {
  position: absolute;
  top: 70%;
  left: 0%;
  z-index: 9999;
  color: aqua; 
}

@media (min-width:768px) {

  .n-carousel {
  height: 450px;
}
}




@media (min-width:1400px) {

  .n-carousel {
    margin-top: 2%;
    width: 100%;
    height: 600px;
  }

  .carousel-text {
    position: absolute;
    top: 60%;
    left: 0%;
    z-index: 9999;
    color: aqua;
    font-size: 3rem;
  }

  .headerText p {
  font-size: 1.2rem;
}

  .content {
    padding: 0 164px;
    margin-bottom: 50px;
  }

  .content p {
  font-size: 1.2rem;
}

  .content-img {
    height: 450px;
    width: 600px;
    object-fit: cover;
  }

  .headerText {
    font-size: 1rem;
  }
  .order1 {
    order: 1;
  }
  .order2 {
    order: 2;
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
  .order7 {
    order:7;
  }

  .order8 {
    order:8;
  }

  .order9 {
    order:9;
  }

  .order10 {
    order:10;
  }

  .order11 {
    order:11;
  }

  .order12 {
    order:12;
  }
}

</style>
