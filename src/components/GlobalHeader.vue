<script lang="ts" setup>
import { ref } from 'vue'
const navActive = ref(false)
const toggleNav = () => {
  navActive.value = !navActive.value
}
</script>

<template>
  <header>
    <div>
      <h1><RouterLink to="/">ゆーねっと</RouterLink></h1>
      <nav :class="{ active: navActive }">
        <ul>
          <li><RouterLink to="/" @click="toggleNav"><i class="fa fa-home">&nbsp;&nbsp;ホーム</i></RouterLink></li>
          <li><RouterLink to="/blog/" @click="toggleNav"><i class="fa fa-pencil-square-o">ブログ</i></RouterLink></li>
		  <li><RouterLink to="/blog/" @click="toggleNav"><i class="fa fa-pencil-square-o">TODO</i></RouterLink></li>
		  <li><RouterLink to="/blog/" @click="toggleNav"><i class="fa fa-pencil-square-o">TODO</i></RouterLink></li>
        </ul>
      </nav>
      <button @click="toggleNav" :class="{ active: navActive }" title="メニューを開く" type="button"><span></span><span></span><span></span></button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
	background-color: white;
	width: 100%;
	height: 50px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	div {
		padding: 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: inherit;
		position: relative;
		nav {
			position: absolute;
			right: 0;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			transform: translateX(100%); 
			background-color: #f6ffde;
			transition: ease .4s;
			&.active {
				transform: translateX(0);
			}
			@media screen and (min-width: 960px) {
				position: static;
				transform: initial;
				background-color: inherit;
				height: inherit;
				display: flex;
				justify-content: end;
				width: 50%;
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
						color: black;
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
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
						}
						&:nth-child(3) {
							top: -13px;
							transform: rotate(-45deg);
						}
					}
			}
			@media screen and (min-width: 960px) {
				display: none;
			}
			span {
				width: 100%;
				height: 1px;
				background-color: #000;
				position: relative;
				transition: ease .4s;
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
}
</style>
