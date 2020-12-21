<template>
  <div class="all">
        <img class="background" src="@/assets/images/cyx/32.jpg" alt="">
        <div class="main">
            <div class="fu">
                <p>影集</p>
            </div>
            <p class="mainp1">首页 > 会展乌镇 > 影集</p>

            <div>
                <!-- vjs-big-play-centered可使播放按钮居中，vjs-fluid可使视频占满容器 -->
                <video
                id="myVideo"
                class="video-js vjs-big-play-centered vjs-fluid"
                >
                <source
                    src="@/assets/images/cyx/1.mp4"
                    type="video/mp4"
                >
                </video>
            </div>

            <div class="ying-top">
                <p class="ying-tit">宣传片</p>
                <div v-for="item in yingji" :key="item.id" class="ying-left">
                    <img :src="require('@/assets/images/cyx/' + item.imgId + '.jpg')" alt="">
                    <div class="ying-n">
                        <img src="@/assets/images/cyx/25.png" alt="">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="ying-bot">
            <div class="ying-bot-n">
                <p class="ying-tit ying-b">纪录片</p>
                <div v-for="item in yingji2" :key="item.id" class="ying-left">
                    <img :src="require('@/assets/images/cyx/' + item.imgId + '.jpg')" alt="">
                    <div class="ying-n">
                        <img src="@/assets/images/cyx/25.png" alt="">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>  
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            yingji:[
                {
                    id:1,
                    imgId:47,
                    name:"心的乌镇 来过 便不曾离开"
                },
                {
                    id:2,
                    imgId:49,
                    name:"文化乌镇宣传片"
                },
                {
                    id:3,
                    imgId:50,
                    name:"2014年第二届乌镇戏剧节"
                },
                {
                    id:4,
                    imgId:51,
                    name:"2013年乌镇戏剧节宣传片赖声"
                },
                {
                    id:5,
                    imgId:52,
                    name:"2013年乌镇戏剧节宣传片黄磊"
                },
                {
                    id:6,
                    imgId:53,
                    name:"首届世界互联网大会乌镇峰会"
                },
                 {
                    id:7,
                    imgId:54,
                    name:"乌镇宣传片"
                },
                {
                    id:8,
                    imgId:55,
                    name:"刘若英谈重游乌镇想在乌镇"
                },
                {
                    id:9,
                    imgId:56,
                    name:"第三届世界互联网大会视频"
                },
            ],
            yingji2:[
                {
                    id:1,
                    imgId:57,
                    name:"第四届乌镇戏剧节闭幕式短片"
                },
                {
                    id:2,
                    imgId:58,
                    name:"乌镇戏剧节5周年短片"
                },
                {
                    id:3,
                    imgId:59,
                    name:"2017年第五届乌镇戏剧节"
                },
                {
                    id:4,
                    imgId:60,
                    name:"2016年第四届乌镇戏剧节"
                },
                {
                    id:5,
                    imgId:61,
                    name:"乌镇国际当代艺术邀请"
                },
                {
                    id:6,
                    imgId:62,
                    name:"陈向宏讲乌村保护规划"
                },
            ]
        };
    },
    mounted() { 
        this.initVideo();
    },
    methods: {
        initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
            // 是否显示控制条。
            controls: true,
           // 视频封面图地址
          	poster: 'http://www.wuzhen.com.cn/uploads/album/2019082211445440791.jpg',
            //自动播放属性,muted:静音播放,none:关闭自动播放
            
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示高度（以像素为单位）
            width:"1000px",
            height:"420px",
           // 自适应宽高 
           fluid:false, 
            });
        },
    }
};
</script>

<style>
.fu{
    position: absolute;
    top: 270px;
    left: 170px;
    width: 280px;
    height: 90px;
    background: black;
}
.fu>p{
    font-size: 30px;
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    margin: 8px;
}
.ying-tit{
    margin: 60px 0 40px 0;
    font-size: 36px;
    font-weight: 400;
}
.ying-b{
    padding-top: 40px;
}
.ying-left{
    float: left;
    margin: 20px 36px 40px 0;
}
.ying-top{
    height: 1000px;
}
.ying-left>img{
    width: 300px;
}
.ying-n>img{
    vertical-align: text-bottom;
}
.ying-n>span{
    font-size: 20px;
    padding-left: 10px;
}
.ying-bot{
    background-color: #F3F4F8;
    height: 700px;
}
.ying-bot-n{
    width: 75%;
    margin: 0 auto;
}
</style>