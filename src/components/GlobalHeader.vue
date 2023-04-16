<script lang="ts" setup>
import { ref } from 'vue';
const navActive = ref(false);
const toggleNav = () => {
  navActive.value = !navActive.value;
};
const deactiveNav = () => {
  navActive.value = false;
};
</script>

<template>
  <header>
    <h1><RouterLink :class="$style.title" to="/">ゆーねっと</RouterLink></h1>
    <nav :class="{ active: navActive }">
      <ul>
        <li>
          <RouterLink to="/" @click="deactiveNav"
            ><i class="fa fa-home">&nbsp;&nbsp;ホーム</i></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" @click="deactiveNav"
            ><i class="fa fa-pencil-square-o">ブログ</i></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" @click="deactiveNav"
            ><i class="fa fa-pencil-square-o">TODO</i></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" @click="deactiveNav"
            ><i class="fa fa-pencil-square-o">TODO</i></RouterLink
          >
        </li>
      </ul>
    </nav>
    <button @click="toggleNav" :class="{ active: navActive }" title="メニューを開く" type="button">
      <span></span><span></span><span></span>
    </button>
  </header>
</template>

<style lang="scss" module>
.title {
  font-size: 1.5em;
  color: var(--foreground) !important;
}
</style>

<style scoped lang="scss">
header {
  width: 100%;
  height: 50px;
  position: sticky;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin-left: 1em;
  }
  nav {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    background-color: var(--backgroundLighted);
    transition: background-color ease 0.4s, transform ease 0.4s !important;
    z-index: 2;
    &.active {
      transform: translateY(0);
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.05);
    }
    @media screen and (min-width: 960px) {
      position: static;
      transform: initial;
      background-color: inherit;
      height: inherit;
      display: flex;
      width: 50%;
      margin-right: 1em;
    }
    ul {
      padding-top: 250px;
      padding-bottom: 200px;
      list-style: none;
      @media screen and (min-width: 960px) {
        padding-top: inherit;
        padding-bottom: inherit;
        width: 100%;
        display: flex;
        align-items: center;
        height: initial;
        justify-content: space-between;
      }
      li {
        a {
          color: var(--foreground);
          width: 100%;
          display: block;
          text-align: center;
          font-size: 20px;
          margin-bottom: 24px;
          @media screen and (min-width: 960px) {
            margin-bottom: 0;
          }
        }
        &:last-child a {
          margin-bottom: 0;
        }
      }
    }
  }
  button {
    width: 48px;
    height: 100%;
    background-color: transparent;
    border-color: transparent;
    z-index: 9999;
    &.active {
      transform: translateX(0);
      span {
        &:nth-child(1) {
          top: 5px;
          transform: rotate(405deg);
        }
        &:nth-child(2) {
          transform: translateX(-200%);
          opacity: 0;
        }
        &:nth-child(3) {
          top: -15px;
          transform: rotate(315deg);
        }
      }
    }
    @media screen and (min-width: 960px) {
      display: none;
    }
    span {
      width: 100%;
      height: 2px;
      background-color: var(--foreground);
      position: relative;
      transition: background-color ease 0.5s !important;
      display: block;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        margin: 8px 0;
      }
      &:nth-child(3) {
        top: 0;
      }
    }
  }
}
</style>
