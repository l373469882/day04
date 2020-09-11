<template>
<div id="app">
    <van-search shape="round" background="#FFA500" placeholder="请输入搜索关键词" />
    <van-tabs v-model="activeName">
        <van-tab title="精选" name="a">
            <ListItem v-for="(item,index) in list" :key="index" :item="item" />
        </van-tab>
        <van-tab title="99超级新" name="b">内容 2</van-tab>
        <van-tab title="直播" name="c">内容 3</van-tab>
        <van-tab title="短视频" name="d">内容 4</van-tab>
        <van-tab title="买家秀" name="e">内容 5</van-tab>
    </van-tabs>

    <router-view />

    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/list">发现</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/find">分类</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/car">购物车</van-tabbar-item>
        <van-tabbar-item icon="chat-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
import ListItem from './components/ListItem';
import axios from 'axios';

export default {
    data() {
        return {
            active: 0,
            activeName: "a",
            list: {}
        };
    },
    components: {
        ListItem
    },
    created() {
        axios.get("/api/list").then(result => {
            this.list = result.data
        })
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
}

html,
body,
#app {
    width: 100%;
    height: 100%;
}

#app {
    display: flex;
    flex-direction: column;
}
</style>
