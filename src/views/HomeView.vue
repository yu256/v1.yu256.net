<template>
  <main>
      <h2 class="title">About</h2>
      <p class="space">ゆーのホームページです。TypeScriptとVueの勉強のために作ってみているだけのサイトです。<br>備忘録とかいろいろ書いていくところにしたい。</p>
      <h2 class="title">SNSアカウント</h2>
      <div class="space">
        <p class="sns"><i class="fa fa-activitypub" aria-hidden="true"></i> ActivityPub</p>
        <p class="link">あかつきー（Misskeyフォークの自鯖）</p>
        <ul class="ul1">
          <li><a rel="me" href="https://yumk.xyz/@y">@y@yumk.xyz</a></li>
        </ul>
        <p class="link">Misskey.io</p>
        <ul class="ul1">
          <li><a rel="me" href="https://misskey.io/@yu2">@yu2@misskey.io</a></li>
        </ul>
        <p class="link">その他</p>
        <ul class="ul1">
          <li><a rel="me" href="https://beta.romneko.net/@y">@y@beta.romneko.net</a></li>
          <li><a rel="me" href="https://submarin.online/@yu">@yu@submarin.online</a></li>
          <li><a rel="me" href="https://misskey.m544.net/@yu1">@yu1@misskey.m544.net</a></li>
        </ul>
        <p class="sns"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</p>
        <ul class="ul1">
          <li><a rel="me" href="https://twitter.com/yu256tw">@yu256tw</a></li>
        </ul>
        <p class="sns"><i class="fa fa-github" aria-hidden="true"></i> GitHub</p>
        <ul class="ul1">
          <li><a rel="me" href="https://github.com/yu256">@yu256</a></li>
        </ul>
        <p class="sns"><i class="fa fa-keybase" aria-hidden="true"></i> Keybase</p>
        <ul class="ul1">
          <li><a rel="me" href="https://keybase.io/yu1024">@yu1024</a></li>
        </ul>
        <p class="sns"><i class="fa fa-youtube-play" aria-hidden="true"></i> YouTube</p>
        <ul class="ul1">
          <li><a href="https://www.youtube.com/@yu_1024">@yu_1024</a></li>
        </ul>
        <p class="sns"><i class="fa solid fa-envelope" aria-hidden="true"></i> email</p>
        <ul class="ul1">
          <li><a href="mailto:yu@yu256.net">yu@yu256.net</a></li>
        </ul>
      </div>
      <h2 class="title"><i class="fa fa-amazon" aria-hidden="true"></i>干し芋のリスト</h2>
      <div class="space">
        <ul class="ul1">
          <li><a href="https://www.amazon.jp/hz/wishlist/ls/3HOBLVBUU8DP9?ref_=wl_share">ほしい物リスト</a></li>
        </ul>
      </div>
    </main>
</template>

<style lang="scss">
main {
	width: 90%;
	max-width: 960px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	margin-top: 45px;
}

.title {
	font-size: 2em;
	margin: 20px;
	border-radius: 70px;
	background: #f7ffdb;
	box-shadow:	18px 18px 35px #d2d9ba,
				-18px -18px 35px #fffffc;
}

.space {
	padding: 10px;
	line-height: 1.75;
}

.link {
	padding-left: 15px;
}

.ul1 {
	padding-left: 35px;
}

.sns {
	font-size: 1.5em;
}</style>
