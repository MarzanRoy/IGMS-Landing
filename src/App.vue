<template>
  <header>
    <div class="container">
      <div class="column1">
        <router-link to="/">
          <img
              alt="IGMS Logo" src="https://researchgrant.gov.sg/Resource%20Library/images/igms-logo.png"
              style="padding-top: 30px;margin-bottom: 35px;margin-left: -25px;">
        </router-link>
      </div>
      <div class="column2">
        <img alt="MOE Logo" src="https://researchgrant.gov.sg/Resource%20Library/images/logo_sg_gov.png">
        <br>
        <div class="top-nav">
          <ul>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sightmap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <nav>
    <div class="container">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About Us</router-link>
        </li>
        <li>
          <a href="#">Awarded Projects</a>
        </li>
        <li>
          <a href="#">Closed Grant Call</a>
        </li>
        <li>
          <router-link to="/help">Help</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <transition name="slide-page">
    <div v-show="$route.name !== 'home'">
      <div id="breadcrumb"></div>
      <hr>
    </div>
  </transition>
  <router-view v-slot="{ Component }">
    <transition name="slide-page">
      <component :is="Component" />
    </transition>
  </router-view>
  <button class="back-to-top" @click="scrollToTop" v-show="showBackToTop">
    <i class="fa-solid fa fa-arrow-up"></i>
  </button>
  <footer>
    <div class="logo-container">
      <a href="#">
        <img src="https://researchgrant.gov.sg/Resource%20Library/images/logo-nrf.png"  alt=""/>
      </a>
      <a href="#">
        <img src="https://researchgrant.gov.sg/Resource%20Library/images/ASTAR_Logo_1.png"  alt="" style="width: 300px;"/>
      </a>
      <a href="#">
        <img src="https://researchgrant.gov.sg/Resource%20Library/images/MOE-logo.png"  alt=""/>
      </a>
      <a href="#">
        <img src="https://researchgrant.gov.sg/Resource%20Library/images/moh-logo.gif"  alt=""/>
      </a>
    </div>
      <div class="footerlinks">
        <div style="margin: 0 5px;width: 98%;">
          <div class="footertexts">
            <a href="#">Terms of Use</a> | <a href="#">Privacy Statement</a> | <a href="#">Security Policy</a> | <a href="#">Rate this Website</a> | <a href="#">Sitemap</a>
          </div>
        </div>
        <div style="float: left;position: relative;min-height: 1px;padding-right: 15px;padding-left: 15px;">
          <span style="color:#fff;">
            Copyright © 2019 Government of Singapore<br>
            This site is best viewed using IE9 & above,  Mozilla Firefox 33 & above or Google Chrome 39 & above with 1024 x 768 resolution
          </span>
        </div>
      </div>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      showBackToTop: ref(false)
    }
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.pageYOffset > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style>
.slide-page-enter-from,
.slide-page-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.slide-page-enter-active,
.slide-page-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

nav a:hover, .router-link-exact-active {
  color: orange !important;
}

main {
  will-change: transform, opacity;
}

.back-to-top {
  z-index: 1;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}

.back-to-top {
  opacity: 0.8;
}

.footertexts {
  padding-bottom: 5px;
  padding-left: 5px;
  float: left;
  display: block;
  margin: 0;
  line-height: 16px;
  font-family: "Segoe UI","microsoft yahei",'Alegreya Sans', "Arial", "Sans Serif",serif;
  text-align: right;
  color: #fff;
}

div.footertexts > a {
  color: #fff;
}

.footerlinks {
  flex-direction: column;
  display: flex;
  padding: 16px 0;
  line-height: 16px;
  background: url(https://researchgrant.gov.sg/Resource%20Library/images/footerlinks.png) no-repeat center;
  background-size: cover;
  font-family: "Segoe UI","microsoft yahei",'Alegreya Sans', "Arial", "Sans Serif",serif;
  text-align: right;
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  margin: 0;
}

footer > div > a > img {
  text-align: center;
  padding: 0 25px;
  margin: 9px 0 20px;
  max-width: 100%;
  border: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  overflow: clip;
}

.logo-container {
  display: table;
  content: " ";
  width: 1170px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  z-index: 10;
}

footer {
  box-sizing: border-box;
  background: #edf4ff;
  position: relative;
  border: none;
  padding: 20px 0 0 0;
  margin: 0 0 -1px 0;
  color: #696969;
  width: 100%;
  clear: both;
  font-size: 12px;
  line-height: 22px;
}

hr {
  padding-top: 10px;
  overflow: hidden;
  width: 100%;
  margin: 0;
  border: 0;
  border-bottom: solid 1px #dcdcdc;
}

#breadcrumb {
  margin-left: 0;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
}

nav {
  margin: 0;
  padding: 0;
  text-align: center;
  height: 50px;
  background: url(https://researchgrant.gov.sg/Resource%20Library/images/banner-bg.png) repeat-x center #144283;
  width: 100%;
}

nav .container {
  display: flex;
  justify-content: center;
  background: transparent;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

nav ul {
  margin: 0;
  padding: 0;
  float: left;
}

nav ul li {
  justify-content: center;
  text-align: center;
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
  position: relative;
  list-style: none;
}

nav ul li a {
  padding-left: 0.15em;
  padding-right: 0.15em;
  text-decoration: none;
  white-space: nowrap;
  display: block;
  margin: 0 40px;
  font-size: 18px;
  color: #ffffff;
  line-height: 50px;
  font-weight: 200;
  font-family: 'Exo','Segoe UI',serif;
}

header {
  width:100%;
  padding-left: 0;
  padding-right: 0;
  margin: auto;
}

.column2 ul li a {
  color: #616161;
  font-size: 15px;
  background: url(https://researchgrant.gov.sg/Resource%20Library/images/icon_arrow_small.png) left no-repeat;
  padding-left: 10px;
}

.column2 ul li {
  list-style: none;
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.top-nav {
  margin: 12px 0;
  padding-left: 0;
  list-style: none;
}

.container {
  width: 1170px;
  position: relative;
  text-align: center;
  background-color: #fff;
  display: flex;
  margin: auto;
}

.column1 {
  text-align: left;
  float: left;
  width: 50%;
}

.column2 {
  text-align: right;
  float: right;
  width: 50%;
}

.column1, .column2 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

img {
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;
  font-size: 13px;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
