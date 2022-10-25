<template>
  <div class="search-result">
    <div class="search-header">
      <div class="search-header-left">
        <input
          type="text"
          class="search-header-left-input"
          placeholder="请输入关键字"
          v-model="keyword"
          @keyup.enter="search"
        />
        <div
          class="search-header-left-delete"
          @click="deleteAll"
          v-show="showButton"
        ></div>
      </div>
      <div class="search-header-right" @click="search">搜索</div>
    </div>
    <div class="search-result-content">
      <div class="search-result-content-list">
        <div
          class="search-result-content-list-item"
          v-for="item in list"
          :key="item.id"
        >
          <div class="search-result-content-list-item-title">
            {{ item.title }}
          </div>
          <div class="search-result-content-list-item-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const newKeyword = router.currentRoute.value.query.keyword
const showButton = ref(false)
const keyword: any = ref(newKeyword)
const deleteAll = () => {
  keyword.value = ''
}
watchEffect(() => {
  showButton.value = keyword.value.length > 0
})

const search = () => {
  console.log(keyword.value)
}
let list = [
  {
    id: 1,
    title: '商品1',
    content: '商品1的内容'
  },
  {
    id: 2,
    title: 'vuejs · GitHub',
    content:
      'Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.Open source projects from vuejs, vuejs has 121 repositories available. Follow their code on GitHub.'
  },
  {
    id: 3,
    title: '商品3',
    content: '商品3的内容'
  }
]
</script>
<style lang="scss" scoped>
.search-result {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  .search-header {
    width: 600px;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .search-header-left {
      width: 300px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      .search-header-left-input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 14px;
        padding: 0 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
        &::placeholder {
          color: #999;
        }
      }
      .search-header-left-delete {
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
    }
    .search-header-left-delete {
      position: absolute;
      right: 18px;
      width: 20px;
      height: 20px;
      background-color: #ccc;
      color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }
    .search-header-left-delete::before {
      content: 'x';
      display: block;
      margin-top: -1px;
      line-height: 20px;
      text-align: center;
    }

    .search-header-right {
      width: 80px;
      height: 40px;
      background-color: #1890ff;
      color: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}
.search-result-content {
  width: 600px;
  margin: 0 auto;

  .search-result-content-list {
    width: 100%;
    height: 100%;
    .search-result-content-list-item {
      width: 100%;
      height: 150px;
      background-color: #ccc;
      margin: 10px;

      .search-result-content-list-item-title {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: bold;
      }
      .search-result-content-list-item-content {
        width: fit-content;
        line-height: 20px;
        padding: 0 10px;
        font-size: 14px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
  }
}
</style>
