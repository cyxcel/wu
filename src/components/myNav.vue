<template>
    <div id="app">
      <nav>
        <ul>
          <router-link to="/" tag="li" active-class="myactive">乌镇旅业</router-link>
          <router-link to="/chang" tag="li" active-class="myactive">场地介绍</router-link>
          <router-link to="/fuwu" tag="li" active-class="myactive">服务介绍</router-link>
          <router-link to="/inter" tag="li" active-class="myactive">乌镇互联网</router-link>
          <router-link to="/ying" tag="li" active-class="myactive">影集</router-link>
          <router-link to="/tu" tag="li" active-class="myactive">图集</router-link>
        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "myNav"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  nav{
    position: absolute;
    left: 260px;
    z-index: 2;
  }
  ul{
    height: 45px;
  }
  ul li{
    list-style: none;
    margin-right: 2px;
    cursor: pointer;
    float: left;
    width: 130px;
    height: 45px;
    line-height: 45px;
    background-color: rgba(61, 60, 60, 0.5);
    text-align: center;
    color: #fff;
  }

</style>
