<template>
  <div class="all">
        <img class="background" src="@/assets/images/cyx/5.jpg" alt="">
        <div class="main">
            <div class="fu">
                <p>成功案例</p>
            </div>
            <p class="mainp1">首页 > 会展乌镇 > 成功案例</p>

      <cgc cover='19'  :list="list" :tit='tit' :txt="txt1"></cgc>
      </div>
  </div>
</template>

<script>
import cgc from './cgc'
export default {
  name: 'cg',
  components: {
      cgc
  },
  data () {
    return {
      list: [
        {
          id: 1,
          ImgName: 20,
          name: "云舟宾客中心全新启用",
        },
        {
          id: 2,
          ImgName: 21,
          name: "触幕·倾心 vivo x21 屏幕",
        },
        {
          id: 3,
          ImgName:22,
          name: "2017全新一代奥迪 A5 家",
        },
        {
          id: 4,
          ImgName: 23,
          name: "2017中国时装周闭幕大秀",
        },
        {
          id: 5,
          ImgName: 24,
          name: "2017《守望先锋》全明星赛",
        },
        {
          id: 6,
          ImgName: 25,
          name: "Haier卡萨帝首届生活艺",
        },
        {
          id: 7,
          ImgName: 26,
          name: "中国乌镇·围棋峰会",
        },
        {
          id: 8,
          ImgName: 27,
          name: "第四届中国国际名城经典",
        },
        {
          id: 9,
          ImgName: 28,
          name: "华为2016年运营转型峰会",
        },
        {
          id: 10,
          ImgName: 29,
          name: "乌镇婚礼",
        },
        {
          id: 11,
          ImgName: 30,
          name: "《ELLE—世界时装之苑》",
        },
        {
          id: 12,
          ImgName: 31,
          name: "2013国际组织工程与再生",
        },
      ],
      tit: '世界互联网大会·乌镇峰会',
      txt1: '世界互联网大会是中国举办的规模最大、层次最高的互联网大会，也是世界互联网领域的高峰会议，由中华人民共和国国家互联网信息办公室和浙江省人民政府共同主办'
    }
  }
}
</script>

<style scoped>
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
</style>