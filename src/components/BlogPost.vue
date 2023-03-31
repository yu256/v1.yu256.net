<template>
  <div class="container" v-for="(item, index) in items" :key="index">
    <div class="card__image">
      <img :src="`/img/img${index + 1}.jpg`" alt="">
      <div class="card__overlay" :class="index % 2 === 0 ? 'blue' : 'indigo'">
        <div class="card__overlay-content">
          <ul class="card__meta">
            <li><a href=""><i class="fa fa-tag"></i>{{ item.tag }}</a></li>
            <li><a href=""><i class="fa fa-clock-o"></i>{{ formatDate(item.date) }}</a></li>
          </ul>
          <a href="" class="card__title">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';

const items = [
  { tag: "タグ1", title: "タイトル1", date: "20230331" },
  { tag: "タグ2", title: "タイトル2", date: "20230101" },
  { tag: "タグ3", title: "タイトル3", date: "20230101" },
];
const formatDate = (date: string): string => {
  const diffDays = moment().diff(date, "days");
  if (diffDays < 1) {
    return "今日";
  } else if (diffDays === 1) {
    return "昨日";
  } else {
    return `${diffDays}日前`;
  }
}
</script>

<style scoped lang="scss">
$indigo: #5C6BC0;
$blue: #29B6F6;

img {
  max-width: 100%;
}

a:hover {
  text-decoration: underline !important;
}

.container {
  width: 100%;
  max-width: 320px;
  padding-right: 1em;
  padding-bottom: 1em;
}

.card__image {
  border-radius: 3px;
  display: block;
  min-height: 240px; 
  overflow: hidden;
  position: relative;

  img {
    display: block;
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
  position: absolute;
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
  padding: 1.5em;
  z-index: 3;
}

.card__meta {
  margin-bottom: 7em;
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