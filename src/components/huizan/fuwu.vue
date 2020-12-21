<template>
    <div class="all">
        <img class="background" src="@/assets/images/cyx/5.jpg" alt="">
        <div class="main">
            <div class="fu">
                <p>服务介绍</p>
            </div>
            <p class="mainp1">首页 > 会展乌镇 > 服务介绍</p>
            <img class="img1" src="@/assets/images/cyx/13.jpg" alt="">
            <p class="main-p2">
                乌镇景区拥有一支商务服务专业团队，集十年丰富经验，我们紧扣客户需求，量身策划，精准定位，
                确保活动的尽善尽美。至今已为众多国内外政府部门、大中型企事业集团及公司部门成功策划实施了
                各类年会、研讨会、市场推广会、新闻发布会和公关、庆典、路演、拓展训练、奖励旅游等活动，
                得到了客户的一致好评，并建立了良好的长期合作关系。
            </p>
            <p class="midtit">服务宗旨</p>
            <div class="ji">
                <p>维护客户的利益，坚持诚信服务的原则；</p>
                <p>以专业的团队和个性化的服务，全程跟进、无缝对接；</p>
                <p>为您赢得广大客户的信任和支持；</p>
                <p>追求客户满意是我们最大的责任。</p>
                <p>期望在您企业发展的乐谱中留下完美的音符，</p>
                <p>为您，我们会做得更好…</p>
            </div>
            <p class="midtit">服务优势</p>
            <ul class="ul">
                <li v-for="item in items" :key="item.id">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <div class="xian2"></div>
                    <p class="main-p2">{{item.ner}}</p>
                </li>
            </ul>
        </div>
        <p class="end">立即预订 ></p>
        <div class="dian"></div>
    </div>
    
</template>

<script>
export default {
    name:"fuwu",
    data(){
        return{
            items:[
                {id:1,img:require("@/assets/images/cyx/13.png"),title:"环境一流",ner:"西栅景区是一个河流环绕的岛式古镇，景区内环境安静，空气清新"},
                {id:1,img:require("@/assets/images/cyx/14.png"),title:"设施完善",ner:"拥有多家大型酒店和精品酒店，30多家餐厅，大小会议室100多个，并可提供户外大型活动场所"},
                {id:1,img:require("@/assets/images/cyx/15.png"),title:"交通便捷",ner:"距上海、杭州、苏州均有高速公路直达，车程一个半小时，高铁站距景区半小时车程"},
                {id:1,img:require("@/assets/images/cyx/16.png"),title:"调配高效",ner:"西栅景区内全部资源均由公司集约经营，统一调配，为您提供目的地一站式服务"},
                {id:1,img:require("@/assets/images/cyx/17.png"),title:"管理规范",ner:"所有服务项目提供清单，帮助客户控制成本，物超所值"},
                {id:1,img:require("@/assets/images/cyx/18.png"),title:"服务精准",ner:"经验丰富的专业团队提供管家式服务，全程跟踪，敬业乐群，随时随地为客户提供方便"},
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
.img1{
    width: 100%;
    margin-bottom: 20px;
}
.main-p2{
    font-size: 14px;
    color: #7E808A;;
    padding: 10px 0 10px 0;
    line-height: 30px;
  }
.ji{
    padding-bottom: 40px;
    border-bottom: 1px solid #D5DAE1;
}
.ji>p{
    font-size: 14px;
    color: #7E808A;;
    padding: 10px 0 10px 0;
    line-height: 25px;
}
.midtit{
    font-size: 25px;
    margin-top: 20px;
}
.ul{
    height: 500px;
    padding-bottom: 40px;
    border-bottom: 1px solid #D5DAE1;
}
.ul>li{
    width: 260px;
    height: 200px;
    float: left;
    margin: 20px 70px 20px 0;
    text-align: center;
}
.ul>li>h3{
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: 300;
}
.xian2{
    height: 2px;
    width: 20px;
    margin: 0 auto;
    background-color: black;
}
.end{
    width: 105px;
    margin: 50px 0 50px 0;
    font-size: 20px;
    margin: 0 auto;
    cursor: pointer;
    padding: 50px 0 10px 0;
    border-bottom:2px solid; 
}
.dian{
    height: 50px;
}
</style>