<template>
  <div class="all">
    <img class="background" src="@/assets/images/cyx/1.jpg" alt="">
    <div class="main">
        <div class="fu">
            <p>乌镇旅业</p>
        </div>
        <p>首页 > 乌镇旅业</p>
        <div class="section1">
            <h3 class="h3">企业简介</h3>
            <img src="@/assets/images/cyx/2.png" alt="">
            <p>
                乌镇旅游股份有限公司是由中青旅控股股份有限公司和桐乡市乌镇古镇旅游投资有限公司共同投资经营的股份制企业。
                乌镇景区是国家五A级旅游景区，位于上海杭州苏州的中间，至三大城市只需一小时车程。
                乌镇景区目前拥有员工4500余人，截止2018年12月，公司总资产69亿元，净资产48亿元，景区年收入超过19亿元。
                举办乌镇戏剧节、乌镇国际当代艺术邀请展、乌镇国际未来视觉艺术展，建设乌镇大剧院、木心美术馆等，
                并成功接待世界互联网大会•乌镇峰会，成为大会永久举办地。
            </p>
            <p>
                目前，乌镇旅游股份有限公司相继保护开发了乌镇东西栅景区、乌村高端乡村度假区、古北水镇景区、濮院古镇、贵州乌江村等等，
                已经形成景区连锁经营管理核心优势，已成为中国休闲旅游目的地的供应商。
            </p>
            <p>
                公司一贯重视人才的引进和培养，坚守“以人为本、有作为，有地位”的人才观，欢迎有意向人士加入乌镇旅游，
                共谋进步，共享成功，与乌镇旅游共发展。
            </p>
        </div>
        <div class="section2">
            <h3 class="h3">企业理念</h3>
            <div class="xian"></div>
            <p>以“价值营销”为核心，不断提升企业发展空间； 以“品质细节”为要求，不断提高规范管理水平；</p>
            <p>以“以人为本”为导向，培育企业的核心竞争力； 以“体验旅游”为方向，打造中国旅游的第一品牌。</p>
            <h3 class="h3">企业愿景</h3>
            <div class="xian"></div>
            <p>中国休闲旅游目的地供应商。</p>
        </div>
    </div>
   
    <div class="section3">
        <ul>
            <li v-for="item in items" :key="item.id">
                <img :src="item.img" alt="">
                <h3>{{item.title}}</h3>
                <p>{{item.ner}}</p>
                <div class="xian2"></div>
            </li>
        </ul>
    </div>

    <div class="section4">
        <div class="set-1">
            <a href="">
                <img src="@/assets/images/cyx/9.jpg" alt="">
                <p>乌镇报刊-立志园</p>
                <span>双月刊</span>
                <div>立即阅读 </div>
                <div></div>
            </a>
        </div>
        <div class="set-2">
            <p>乌镇品牌</p>
            <ul>
                <li v-for="item in last" :key="item.id">
                    <img :src="item.img" alt="">
                    <p>{{item.p}}</p>
                </li>
            </ul>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:"lvye",
    data(){
        return{
            items:[
                {id:1,img:require("@/assets/images/cyx/3.png"),title:"志愿者之家",ner:"了解更多"},
                {id:2,img:require("@/assets/images/cyx/4.png"),title:"招贤纳士",ner:"了解更多"},
                {id:3,img:require("@/assets/images/cyx/5.png"),title:"景区招商",ner:"了解更多"},
                {id:4,img:require("@/assets/images/cyx/6.png"),title:"游客建议",ner:"了解更多"},
                {id:5,img:require("@/assets/images/cyx/7.png"),title:"战略合作伙伴",ner:"了解更多"},
                {id:6,img:require("@/assets/images/cyx/8.png"),title:"员工风采",ner:"了解更多"},
            ],
            last:[
                {id:1,img:require("@/assets/images/cyx/9.png"),p:"乌镇预定网"},
                {id:2,img:require("@/assets/images/cyx/10.png"),p:"乌村官网"},
                {id:3,img:require("@/assets/images/cyx/11.png"),p:"古北水镇"},
                {id:4,img:require("@/assets/images/cyx/12.png"),p:"司马台长城"}
            ]
        }
    }
}
</script>

<style scoped>
    *{
        list-style: none;
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
    .fu{
        position: absolute;
        top: 270px;
        left: 200px;
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
    .main{
        padding-top: 20px;
        width: 70%;
        margin: 0 auto;
    }
    .main>p{
        padding: 20px 0 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
    }
    .section1{
        height: 560px;
        border-bottom: 1px solid #ddd;
    }
    .h3{
        font-size: 25px;
        font-weight: 500;
        padding-top: 50px;
    }
    .section1>img{
        float: right;
        width: 300px;
        height: 360px;
        padding: 40px 0 0 20px;
    }
    .section1>p{
        padding-top: 40px ;
        font-size: 14px;
        color: #7E808A;
    }
    .xian{
        width: 40px;
        height: 2px;
        margin: 30px 0 30px 0;
        background-color: red;
    }
    .section2{
        height: 400px;
    }
    .section2>p{
        font-size: 14px;
        color: #7E808A;
    }
    .section3{
        width: 100%;
        height: 520px;
        background-color: #F3F4F8;
}
    .section3>ul{
        width: 70%;
        margin: 0 auto;
        padding: 20px;
    }
    .section3 li{
        float: left;
        width: 190px;
        height: 190px;
        cursor: pointer;
        background-color: #fff;
        list-style: none;
        margin: 20px;
        border: 1px solid  #D5DAE1;
        text-align: center;
    }
    .section3 li:hover{
        border: 1px solid  #7E808A;
    }
    .section3 li:hover .xian2{
        background-color: red;
        transition: all 1s;
    }
    .section3 li>h3{
        font-weight: 300;
    }
    .section3 li>p{
        padding: 10px;
        font-size: 12px;
    }
    .xian2{
        height: 2px;
        width: 50px;
        margin: 0 auto;
        background-color: black;
    }
    .section4{
        width: 70%;
        margin: 0 auto;
        padding: 30px;
    }
    .set-1{
        width: 520px;
        height: 220px;
        border:1px solid #D5DAE1;
    }
    .set-1>a>img{
        padding: 30px 20px 30px 20px;
        float: left;
    }
    .set-1>a>p{
        padding-top: 30px;
        color: black;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .set-1>a>span{
        font-size: 14px;
        color: black;
        padding: 3px;
        border: 1px solid #D5DAE1;
    }
    .set-1>a>div:first-of-type{
        padding: 10px;
        color: black;
        text-align: right;
        margin: 50px 30px 0 0; 
    }
    .set-1>a>div:nth-child(5){
        height: 2px;
        width: 60px;
        margin-left: 420px;
        background-color: black;
    }
    .set-2>p{
        padding-top:60px;
        font-size: 25px;
        font-weight:500;
        text-align:center;
    }
    .set-2>ul>li{
        float: left;
        padding-right: 70px;
    }
    .set-2>ul>li>p{
        font-size: 25px;
        font-weight:500;
        text-align:center;
    }
</style>