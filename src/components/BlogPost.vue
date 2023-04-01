<template>
  <div class="container" v-for="(item, index) in items" :key="index">
    <img :src="`/img/img${index + 1}.jpg`" alt="">
    <div class="overlay" :class="index % 2 === 0 ? 'blue' : 'indigo'">
      <div class="overlay-content">
        <ul>
          <li><a href=""><i class="fa fa-tag"></i> {{ item.tag }}</a></li>
          <li><a href=""><i class="fa fa-clock-o"></i> {{ formatDate(item.date) }}</a></li>
        </ul>
        <RouterLink :to="'/posts/' + item.date + '/'" class="card__title">{{ item.title }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';

const items = [
  { tag: "todo", title: "ブログを開設しました", date: "20230401" },
//  { tag: "todo", title: "タイトル2", date: "20230101" },
//  { tag: "todo", title: "タイトル3", date: "20230101" },
];
const formatDate = (date: string): string => {
  const diffDays = moment().diff(date, "days");
  return diffDays === 0 ? "今日"
    : diffDays === 1 ? "昨日"
    : diffDays < 31 ? `${diffDays}日前`
    : moment(date).format("YYYY/MM/DD");
}
</script>

<style scoped lang="scss">
$indigo: #5C6BC0;
$blue: #29B6F6;

.indigo {
  background-image: linear-gradient(to bottom, rgba($indigo, 0.1), rgba($indigo, 0.8));
  z-index: 2;
}

.blue {
  background-image: linear-gradient(to bottom, rgba($blue, 0.1), rgba($blue, 0.8));
  z-index: 2;
}

img {
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 320px;
  border-radius: 3px;
  min-height: 240px; 
  overflow: clip;
  position: relative;
  margin: 10px;
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
  font-weight: 700;
  line-height: 1.2;
  transition: all 0.3s ease-out;
  &:hover {
    color: rgba(white, 0.7);
    text-decoration: none;
  }
}

.overlay {
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
}

.overlay-content {
  padding: 1.5em;
  z-index: 3;
  a:hover {
  text-decoration: underline;
  }
  ul {
    margin-bottom: 7em;
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