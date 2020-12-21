<template>
  <div class="all">
    <img class="background" src="@/assets/images/cyx/5.jpg" alt="">
    <div class="main">
        <div class="fu">
            <p>场地介绍</p>
        </div>
        <p class="mainp1">首页 > 会展乌镇 > 场地介绍</p>

        <div class="carousel-wrap">
          <el-carousel :interval="3000"  >
            <el-carousel-item v-for="item in bannerList" :key="item.id">
              <img :src="item.img" class="picImg" />
            </el-carousel-item>
          </el-carousel>
        </div>

      <p class="main-p2">
        乌镇西栅景区自开业至今，已成功接待大小会议团队10000余个，包括国内外政府部门、世界五百强企业以及各类年会、
        研讨会、市场推广会、奖励旅游等活动。景区拥有一支专业的会展服务团队，集十年丰富的经验，紧扣客户需求，量身策划，
        精准定位，完备服务，确保商务活动尽善尽美。五座奥斯卡金像奖得主理查德·泰勒先生评价乌镇团队是他进入中国二十年见到最好的团队。
      </p>
      <p class="main-p2">
        自2014年首届世界互联网大会•乌镇峰会落户乌镇，乌镇成为永久举办地。连续四年来，百余个国家和地区千余名嘉宾齐聚乌镇，
        乌镇都以细致、个性化的服务赢得大会嘉宾一致好评；优质的会场服务，专业的配套设施管理和对接保障了大会和10余场论坛的顺利举办。
      </p>
      <h3>场地介绍</h3>
      <p class="midtit">小型会场</p>
      <div class="xian"></div>
      <img class="img1" src="@/assets/images/cyx/6.jpg" alt="">
      <ul class="ul">
        <li class="main-p">注：1.会场四小时为一场（时间段：8：30-12：30、13：30-17：30、18：30-22：00）；</li>
        <li class="main-p ko">    2.以上费用包含提供演讲台、会议音响设备、纸、笔、茶水以及毛巾等服务；</li>
        <li class="main-p ko">    3.投影仪等其他会议用品，会标以及背景喷绘等场地布置项目，根据需要有偿提供；</li>
      </ul>
      <p class="midtit">中型会场</p>
      <div class="xian"></div>
      <img class="img1" src="@/assets/images/cyx/7.jpg" alt="">
      <ul class="ul">
        <li class="main-p">注：1.会议四小时为一场（时间段：8：30-12：30、13：30-17：30、18：30-22：00）；</li>
        <li class="main-p ko">2.以上费用包含提供演讲台、会议音响设备、纸、笔、茶水以及毛巾等服务；</li>
        <li class="main-p ko">3.投影仪等其他会议用品，会标以及背景喷绘等场地布置项目，根据需要有偿提供；</li>
        <li class="main-p ko"> 4.通安客栈各会议室正在装修，暂停使用。</li>
      </ul>
      <p class="midtit">大型会场</p>
      <div class="xian"></div>
      <img class="img1" src="@/assets/images/cyx/8.jpg" alt="">
      <ul class="ul">
        <li class="main-p">注：1.会场四小时为一场（时间段：8：30-12：30、13：30-17：30、18：30-22：00）；</li>
        <li class="main-p ko">2.以上费用包含提供演讲台、会议音响设备、纸、笔、茶水以及毛巾等服务；</li>
        <li class="main-p ko">3.投影仪等其他会议用品，会标以及背景喷绘等场地布置项目，根据需要有偿提供；</li>
        <li class="main-p ko">4.使用闻语厅同声翻译设备另收8000元/场。</li>
      </ul>
      <p class="midtit">乌镇互联网国际会展中心</p>
      <div class="xian"></div>
      <img class="img1" src="@/assets/images/cyx/11.jpg" alt="">
      <img class="img1" src="@/assets/images/cyx/12.jpg" alt="">
      <p class="midtit">酒店附属个性场地</p>
      <div class="xian"></div>
      <img class="img1" src="@/assets/images/cyx/10.jpg" alt="">
    </div>
  </div>

  
  
</template>
<script>
export default {
  name: 'chang',
  data () {
    return {
      bannerList: [
        { id: 0, img: require('@/assets/images/cyx/2.jpg') },
        { id: 1, img: require('@/assets/images/cyx/3.jpg') },
        { id: 2, img: require('@/assets/images/cyx/4.jpg') }
      ]
    }
  }
}
</script>
<style scoped>
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
    color: #7E808A;;
    padding: 10px 0 10px 0;
  }
  .main-p2{
    font-size: 14px;
    color: #7E808A;;
    padding: 10px 0 10px 0;
    line-height: 30px;
  }
  h3{
    font-size: 25px;
    font-weight: 400;
    padding: 40px 0 40px 0;
  }
  .xian{
    width: 40px;
    height: 2px;
    margin: 30px 0 30px 0;
    background-color: red;
  }
  .midtit{
    font-size: 20px;
  }
  .img1{
    width: 100%;
    margin-bottom: 20px;
  }
  .ko{
    line-height: 15px;
    padding-left: 25px;
  }
  .ul{
    margin: 20px 0 60px 0;
  }
</style>

