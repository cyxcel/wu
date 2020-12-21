<template>
  <div class="all">
        <img class="background" src="@/assets/images/cyx/32.jpg" alt="">
        <div class="main">
            <div class="fu">
                <p>图集</p>
            </div>
            <p class="mainp1">首页 > 会展乌镇 > 图集</p>
        <p class="tu-tit">乌镇</p>
      <cgc cover='33'  :list="list" :tit='tit'></cgc>
      </div>
      <div class="tu-bg">
          <div>
              <p class="tu-tit">更多图集</p>
              <cgc cover='39'  :list="list2" :tit='tit2'></cgc>
          </div>
          
      </div>
  </div>
</template>

<script>
import cgc from '../huizan/cgc'
export default {
  name: 'tu',
  components: {
      cgc
  },
  data () {
    return {
      list: [
        {
          id: 1,
          ImgName: 34,
          name: "西栅景点",
        },
        {
          id: 2,
          ImgName: 35,
          name: "东栅景点",
        },
        {
          id: 3,
          ImgName:36,
          name: "乌村风光",
        },
        {
          id: 4,
          ImgName: 37,
          name: "会展",
        },
        {
          id: 5,
          ImgName: 38,
          name: "自然",
        },
      ],
      list2: [
        {
          id: 1,
          ImgName: 40,
          name: "夜色",
        },
        {
          id: 2,
          ImgName: 41,
          name: "黑白乌镇",
        },
        {
          id: 3,
          ImgName: 42,
          name: "建筑",
        },
        {
          id: 4,
          ImgName: 43,
          name: "民俗",
        },
        {
          id: 5,
          ImgName: 44,
          name: "生活",
        },
        {
          id: 6,
          ImgName: 45,
          name: "乌村农事",
        },
        {
          id: 7,
          ImgName: 46,
          name: "乌村活动",
        },
      ],
      tit: '伊甸园铂金酒店',
      tit2:'四季',
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
.tu-tit{
    font-size: 40px;
    font-weight: 400;
    padding-bottom: 40px;
}
.tu-bg{
    margin-top: 20px;
    background-color: #F3F4F8;
}
.tu-bg>div{
    padding-top: 30px;
    width: 75%;
    margin: 0 auto;
}
</style>