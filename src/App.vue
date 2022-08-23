<script setup>
import { NConfigProvider } from 'naive-ui'
const themeOverrides = {
  common: {
    primaryColorHover: '#9dc31e'
  },
  Card: {
    titleTextColor:'#fff'
  },
  Menu : {
    itemTextColor: '#fff',
  },
  Table : {
    tdColor:'#d1dfe7',
    thColor:'#173446',
    tdColorStriped:'#fdfdfb',
    borderColor:'#5e6160',
    thTextColor:'#cdedff',
    tdTextColor:'#112797'
  }
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <header>
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/newcard">Newcard</RouterLink>
          <RouterLink to="/product">product</RouterLink>
        </nav> -->
        <!-- <RouterView /> -->
        
    </header>

    <RouterView />
  </n-config-provider>
</template>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

  .n-modal {
    margin-top: 15%;
    --n-close-icon-size: 40px !important;
    --n-close-icon-color:red !important;
  }

  .n-back-top {
  right: calc(10px) !important;
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (min-width: 1400px) { 
    .n-modal {
      margin-top: 5%;
    }

    .n-back-top {
      right: calc(100px) !important;
    }
  }



.n-dialog .n-dialog__icon {
  display: none !important;
}

</style>
