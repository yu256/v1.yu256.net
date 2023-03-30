<template>
  <main>
    <div class="blog">
      <div class="grid">
        <div class="card">
          <div class="card__image">
            <img src="@/assets/img/img1.jpg" alt="">
            <div class="card__overlay indigo">
              <div class="card__overlay-content">
                <ul class="card__meta">
                  <li><a href="#0"><i class="fa fa-tag"></i>TODO</a></li>
                  <li><a href="#0"><i class="fa fa-clock-o"></i>TODO</a></li>
                </ul>
                <a href="#0" class="card__title">TODO</a>
                <ul class="card__meta card__meta--last">
                  <li><a href="#0"><i class="fa fa-twitter"></i>Todo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="card">
          <div class="card__image">
            <img src="" alt="">
            <div class="card__overlay blue">
              <div class="card__overlay-content">
                <ul class="card__meta">
                  <li><a href="#0"><i class="fa fa-tag"></i>TODO</a></li>
                  <li><a href="#0"><i class="fa fa-clock-o"></i>TODO</a></li>
                </ul>
                <a href="#0" class="card__title">TODO</a>
                <ul class="card__meta card__meta--last">
                  <li><a href="#0"><i class="fa fa-twitter"></i>Todo</a></li>
                </ul>   
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </main>
</template>

<style scoped lang="scss">
$indigo: #5C6BC0; 
$blue: #29B6F6;

*,*:after,*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  word-wrap: break-word;
  hyphens: auto;
}

img {
  height: auto;
  max-width: 100%;
}

a:hover {
  text-decoration: underline !important;
}

.blog {
  overflow: clip;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}

.grid {
  float: none;
  width: 100%;
  padding-left: 0.6em;
  padding-right: 0.2em;
  padding-bottom: 0.4em;
  padding-top: 2em;
  @media screen and (min-width: 40.063em) {
    float: left;
    width: 33.333%;
  }
}

.card__image {
  border-radius: 3px;
  display: block;
  min-height: 240px; 
  overflow: hidden;
  position: relative;

  img {
    display: block;
    margin-bottom: 0;
    transition: all .25s ease-in-out;
  }

  &:hover > img {
    transform: scale(1.2);
  }
}

.card__title {
  color: white;
  display: inline-block;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.75em;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    color: rgba(white, 0.7);
    text-decoration: none;
  }
}

.card__overlay {
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.indigo {
  background-image: linear-gradient(to bottom, rgba($indigo, 0.1), rgba($indigo, 0.8));
  z-index: 2;
}

.blue {
  background-image: linear-gradient(to bottom, rgba($blue, 0.1), rgba($blue, 0.8));
  z-index: 2;
}

.card__overlay-content {
  position: absolute;
  bottom: 0;
  padding: 1.5em;
  z-index: 3;
}

.card__meta {
  margin-bottom: 6em;
  &.card__meta--last {
    margin-bottom: 0;
  }
}
   
li {
  color: #f8f8f8;
  display: inline;
  padding-right: 1em;
  font-size: 0.85em;
  font-variant: small-caps;
  letter-spacing: 1px;
  a {
    color: #f8f8f8;
  }
}
</style>