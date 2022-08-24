<template>
  <div class="nav_box">
    <div class="nav-container">
      <nav>
        <div id="logo">
          <RouterLink to="/">
              <div class="logo">
                <img src="@/assets/logo.png">
              </div>
            </RouterLink>
        </div>
        <div class="container">
            <div class="b-menu">
              
              <!--漢堡按鈕圖示-->
              <label for="switch"><img src="../../assets/hamburger.png"></label>
              <!--選單開關-->
              <input type="checkbox" id="switch">
              <!--選單內容-->
              <ul class="menu">
                  <li> 
                    <RouterLink to="/newcard">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15zM12.25 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm-.75 1.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0z" fill="currentColor"></path></g></svg>
                      </n-icon>  新卡情報
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink to="/product">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M839.5 344h-655c-.3 0-.5.2-.5.5v91.2c0 59.8 49 108.3 109.3 108.3c40.7 0 76.2-22 95.1-54.7c2.9-5.1 8.4-8.3 14.3-8.3s11.3 3.2 14.3 8.3c18.8 32.7 54.3 54.7 95 54.7c40.8 0 76.4-22.1 95.1-54.9c2.9-5 8.2-8.1 13.9-8.1h.6c5.8 0 11 3.1 13.9 8.1c18.8 32.8 54.4 54.9 95.2 54.9C791 544 840 495.5 840 435.7v-91.2c0-.3-.2-.5-.5-.5z" fill-opacity=".15" fill="currentColor"></path><path d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9zM214 184h596v88H214v-88zm362 656.1H448V736h128v104.1zm234.4 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1c24.4 0 48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1c.2-.1.4-.1.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zM840 435.7c0 59.8-49 108.3-109.3 108.3c-40.8 0-76.4-22.1-95.2-54.9c-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7c-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5v91.2z" fill="currentColor"></path></svg>
                      </n-icon>  商品專區
                    </RouterLink>
                  </li>

                  <li> 
                    <RouterLink to="/deck">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M17.75 2.008a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498A2.25 2.25 0 0 1 17.904 22l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.756V4.258a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5zM7.75 7a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zM7 11.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75zM7.75 15a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5z" fill="currentColor"></path></g></svg>
                      </n-icon>  卡組專欄
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink to="/about">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z" fill="currentColor"></path></svg>
                      </n-icon>  關於我們
                      </RouterLink>
                  </li>

                  <li> 
                    <RouterLink v-if='!isLogin' to="/login">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M392 80H232a56.06 56.06 0 0 0-56 56v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56z" fill="currentColor"></path><path d="M80 240a16 16 0 0 0 0 32h96v-32z" fill="currentColor"></path></svg>
                      </n-icon> 登入
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink v-if='isLogin' to="/cart">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><circle cx="176" cy="416" r="32" fill="currentColor"></circle><circle cx="400" cy="416" r="32" fill="currentColor"></circle><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z" fill="currentColor"></path></svg>
                      </n-icon>  購物車
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink v-if='isLogin' to="/order">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><g fill="none"><path d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2h.585zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM7 7.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zM5.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1zm0 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1z" fill="currentColor"></path></g></svg>
                      </n-icon>  訂單
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink v-if='isLogin && isAdmin' to="/admin">
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M10.67 13.02c-.22-.01-.44-.02-.67-.02c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V19c0 .55.45 1 1 1h8.26a6.963 6.963 0 0 1-.59-6.98z" fill="currentColor"></path><circle cx="10" cy="8" r="4" fill="currentColor"></circle><path d="M20.75 16c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.488.488 0 0 0-.59-.22l-1.06.36c-.32-.27-.68-.48-1.08-.63l-.22-1.09a.503.503 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09c-.4.15-.76.36-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36c.32.27.68.48 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09c.4-.15.76-.36 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z" fill="currentColor"></path></svg>
                      </n-icon>  後台管理
                    </RouterLink>
                  </li>

                  <li>
                      <RouterLink v-if='isLogin' to="/" @click='logout'>
                      <n-icon color="white" size="25">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z" fill="currentColor"></path><path d="M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z" fill="currentColor"></path></svg>
                      </n-icon>  登出
                    </RouterLink>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  </div>
    <RouterView> </RouterView>
    <n-back-top   :visibility-height="10"/>
  <n-layout-footer id="footer">
    <div id="container">
      <n-grid cols="2 m:2 l:4"  responsive="screen">
        <n-grid-item>
          <div class="information">
            <h2>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M775.3 248.9a369.62 369.62 0 0 0-119-80A370.2 370.2 0 0 0 512.1 140h-1.7c-99.7.4-193 39.4-262.8 109.9c-69.9 70.5-108 164.1-107.6 263.8c.3 60.3 15.3 120.2 43.5 173.1l4.5 8.4V836h140.8l8.4 4.5c52.9 28.2 112.8 43.2 173.1 43.5h1.7c99 0 192-38.2 262.1-107.6c70.4-69.8 109.5-163.1 110.1-262.7c.2-50.6-9.5-99.6-28.9-145.8a370.15 370.15 0 0 0-80-119zM312 560a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96zm200 0a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96z" fill-opacity=".15" fill="currentColor"></path><path d="M664 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0z" fill="currentColor"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7z" fill="currentColor"></path><path d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0z" fill="currentColor"></path></svg></n-icon>
              聯絡資訊
            </h2>
            <h4>關於我們</h4>
            <h4>營業時間 : 9:00am ~ 8:00pm</h4>
            <h4>客服時間 : 9:00am ~ 10:00pm</h4>
            <h4>電話 : (02)2300-9966</h4>
            <h4>手機 : 0988555555</h4>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h2>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944c14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195c-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845c28.886-12.994 95.413-49.038 107.534-77.323c7.797-18.194 21.384-29.084 40-29.092c34.222-.014 57.752 35.098 44.119 66.908c-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20s8.954 20 20 20s20-8.954 20-20z" fill="currentColor"></path></svg></n-icon>
              站內連結
            </h2>
            <RouterLink to="/newcard"><h4>新卡情報</h4></RouterLink>
            <RouterLink to="/product"><h4>商品專區</h4></RouterLink>
            <RouterLink to="/deck"><h4>卡組專欄</h4></RouterLink>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h2>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" fill="currentColor"></path></svg></n-icon>
              友情連結
            </h2>
            <a href="https://www.yugioh-card.com/hk/?lang=cn-t" target="_blank">遊戲王 OCG  Card Game Asia</a>
            <a href="https://ntucgm.blogspot.com/" target="_blank">NTUCGM 遊戲王部落格</a>
            <a href="https://theygopedia.blogspot.com/" target="_blank">潮落夜江斜月</a>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="information">
            <h2>
              <n-icon><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z" fill="currentColor"></path></svg></n-icon>
              社群媒體
            </h2>
            <a href="https://zh-tw.facebook.com/" target="_blank">Facebook</a>
            <a href="https://twitter.com/?lang=zh-Hant" target="_blank">Twitter</a>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
          </div>
        </n-grid-item>
        </n-grid>
    </div>
  </n-layout-footer>
  <n-layout-footer id="copyright">
    <h5 >@copyright 2022 所有圖片來自於網路</h5>
  </n-layout-footer>

  </template>

<script setup>
  import { RouterLink } from "vue-router";
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/stores/user'

  const user = useUserStore()
  const { logout } = user
  const { isLogin, isAdmin } = storeToRefs(user)
  
  


  </script>

<style scoped>
  .nav_box{
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5000;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,1);
  }

  .nav-container{
    width: 75%;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  .b-menu{
    width:100%;
  }

  .logo img {
    width: 180px;
  }

  nav .container {
    width: 75%;
    height: 100%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    z-index: 5000;
    backdrop-filter: blur(5px);
    background-color: rgba(0,0,0,0.7);
    border-bottom: 1px solid #4b4a4a;
    display: flex;
    justify-content: space-between;
  }

  .n-icon {
    vertical-align: middle;
  }



  nav a.router-link-exact-active {
    color: lightgreen;
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  .n-grid {
    gap: 100px !important;
  }



  #footer {
    width: 100%;
    background: #0d0e17;
    padding: 50px 0;
    display: flex;
    justify-content: space-around;
  }

  .information {
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 30px;
  }

  .information a {
    color: whitesmoke;
  }

  .information h2 {
    margin-top: 2%;
    margin-bottom: 5%;
  }

  .information .n-icon {
    vertical-align: middle;
  }


  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }


    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      font-size: 1rem;

      padding: 1rem 0;
    }
  }

  ul {
    list-style: none; 
    padding-left: 0; 
  }

  a {
    text-decoration: none;
  }

  /* NavBar */

  nav::after {
    content: "";
    display: block;
    clear: both;
  }

  /* 隱藏 checkbox */
input {
  display: none;
}

/* 漢堡按鈕 */
label {
  float: right;
  margin-left: 250px;
  padding-right: 100px;
  line-height: 50px;
}

label img {
    width: 50px;   
    vertical-align: middle;
  }

/* 選單列 */
.menu {
  clear: both;
}

.menu li {
    text-align: center;
  }

  .menu li a {
      display: block;
      padding: 10px 0;
      font-size: 18px;
      
    }



  .menu {
    max-height: 0;
    overflow: hidden;
  }

  input:checked ~ .menu {
    max-height: 400px;
  }

  .menu {
    max-height: 0;
    overflow: hidden;
    /* 動畫秒數 */
    transition: .5s; 
  }

@media screen and (min-width: 1024px) {

  #logo {
    margin-left: 50px;
  }
    label {
      display: none;
    }
    .menu {
      float: right;
      clear: none;
      max-height: 50px;
    }
    .menu li {
      display: inline-block;
      border-bottom: none;
    }

    .menu li a {
      padding: 0 15px;  
    }
  }

  #copyright {
    color: white;
    background: #0d0e17;
    text-align: center;
  }
</style>

