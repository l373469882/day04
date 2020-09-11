<template>
<dl>
    <dt>
        <img :src="item.url" alt="">
    </dt>
    <dd>
        <p> {{item.title}} </p>
        <p style="color:red"> {{item.price}} </p>
    </dd>
</dl>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="scss">
dl {
    width: 160px;
    height: 300px;
    display: inline-block;
    margin: 10px;

    dd {
        padding: 10px;
    }
}
</style>
