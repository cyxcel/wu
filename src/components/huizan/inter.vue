<template>
    <div class="all">
        <img class="background" src="@/assets/images/cyx/5.jpg" alt="">
        <div class="main">
            <div class="in-fu">
                <p>乌镇互联网国际会展中心</p>
            </div>
            <p class="mainp1">首页 > 会展乌镇 > 乌镇互联网国际会展中心</p>

            <div class="carousel-wrap">
                <el-carousel :interval="3000"  >
                    <el-carousel-item v-for="item in bannerList" :key="item.id">
                        <img :src="item.img" class="picImg" />
                    </el-carousel-item>
                </el-carousel>
            </div>

            <p class="main-p">
                乌镇互联网国际会展中心总占地面积203亩，建筑占地面积4万平方米，建筑面积8.1万平方米，
                其中地上建筑面积约6万平方米，地下建筑面积2.1万平方米，设置地下停车位700余个。
                会展中心由三座建筑组成，至南而北分别为会议中心、接待中心和展览中心三个功能区块。
            </p>

            <ul class="in-ul">
                <li v-for="item in items" :key="item.id">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <p>了解更多</p>
                    <div class="in-xian2"></div>
                </li>
            </ul>

            <p class="main-p">
                乌镇互联网国际会展中心项目充分考虑了承办国际高峰会议的功能定位以及所处的历史环节，
                建筑风格具有鲜明的双重特性：兼具现代化国际会议中心功能和中国江南水乡的建筑传统。
                建筑不做刻意雕琢，不做无谓装饰，着重凸显江南水乡传统文化与现代文明的融合共生。
                水乡特有的的白墙黑瓦、临水连廊等古典元素被赋予现代设计风格，建筑内部融入了智能会议、
                楼宇管理等智慧应用系统，传统与现代，文化与智慧交相辉映。
                2016年承办了第三届互联网大会和“互联网之光博览会”。
            </p>
            <a href="">
                <div class="in-en">
                    <img src="@/assets/images/cyx/23.png" alt="">
                    <p>世界互联网大会官网</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'inter',
  data () {
    return {
      bannerList: [
        { id: 0, img: require('@/assets/images/cyx/14.jpg') },
        { id: 1, img: require('@/assets/images/cyx/15.jpg') },
        { id: 2, img: require('@/assets/images/cyx/16.jpg') }
      ],
      items:[
        { id: 0, img: require('@/assets/images/cyx/19.png'),title:'会议中心' },
        { id: 1, img: require('@/assets/images/cyx/20.png'),title:'接待中心' },
        { id: 2, img: require('@/assets/images/cyx/21.png'),title:'展览中心' },
        { id: 3, img: require('@/assets/images/cyx/22.png'),title:'云舟宾客中心' },
      ]
    }
  }
}
</script>

<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
}
.all{
    position: relative;
}
.background{
    width: 100%;
    height: 340px;
}
.in-fu{
    position: absolute;
    top: 270px;
    left: 170px;
    width: 480px;
    height: 90px;
    background: black;
}
.in-fu>p{
    font-size: 30px;
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    margin: 8px;
}
.main{
    padding-top: 20px;
    width: 75%;
    margin: 0 auto;
}
.mainp1{
    padding: 20px 0 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 40px;
}
.carousel-wrap {
    width: 100%;
    margin: 0 auto;
    height: 300px;
}
.picImg{
    width: 100%;
    height: 300px;
}
.main-p{
    font-size: 14px;
    color: #7E808A;
    padding: 60px 0 60px 0;
    line-height: 30px;
}
.in-ul{
    height: 660px;
    padding-bottom: 40px;
    border-bottom: 1px solid #D5DAE1;
}
.in-ul>li{
    width: 260px;
    height: 300px;
    float: left;
    margin: 0 70px 20px 0;
}
.in-ul>li>img{
    width: 260px;
    height: 200px;
}
.in-ul>li>h3{
    font-size: 20px;
    margin-top: 20px;
    font-weight: 300;
}
.in-ul>li>p{
    font-size: 12px;
    padding:10px 0 10px 0;
}
.in-xian2{
    height: 2px;
    width: 60px;
    background-color: black;
}
.in-en{
    width:300px;
    height: 60px;
    background-color: #D5DAE1;
    margin-bottom: 30px;
    line-height: 60px;
}
.in-en>img{
    margin: 10px;
    float: left;
}
.in-en>p{
    color: black;
}
</style>