<template>
  <div class="search">
    <div class="search-header">
      <div class="search-header-left">
        <div class="search-header-left-input">
          <input
            type="text"
            placeholder="请输入关键字"
            v-model="keyword"
            @keyup.enter="search"
          />
          <div
            class="search-header-left-delete"
            @click="deleteAll"
            v-show="showButton"
          ></div>
          <div class="search-content" v-show="showText">
            {{ keyword }}
          </div>
        </div>
      </div>
      <div class="search-header-right" @click="search">搜索</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref, watchEffect } from 'vue'

const keyword = ref('')
const showButton = ref(false)
const showText = ref(false)

const debounce = (fn: Function, delay: number) => {
  let timer: any = null
  let that: any = this
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(that, arguments)
    }, delay)
  }
}
const deleteAll = () => {
  keyword.value = ''
}
watchEffect(() => {
  showButton.value = keyword.value.length > 0
  showText.value = keyword.value.length > 0
})

const search = () => {
  console.log(keyword.value)
  // 跳转到搜索结果页面
  router.push({
    path: '/searchResult',
    query: {
      keyword: keyword.value
    }
  })
}

debounce(search, 500)
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;

  .search-header {
    position: relative;
    top: 200px;
    width: 600px;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .search-header-left {
      display: flex;
      align-items: center;

      .search-header-left-input {
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        position: relative;

        input {
          width: 100%;
          height: 100%;
          border: 1px solid #1890ff;
          border-radius: 4px;
          outline: none;
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
        .search-content {
          position: absolute;
          top: 50px;
          width: 300px;
          height: auto;
          background-color: #fff;
          border: 1px solid #1890ff;
          border-top: none;
          border-radius: 0 0 4px 4px;
          overflow: hidden;
        }
      }
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
</style>
