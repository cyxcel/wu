<template>
  <div class="container">
    <div class="cont">
      <div class="left">
        <img :src="require('@/assets/images/cyx/' + cover + '.jpg')" alt="" />
        <div class="fx">
            <h2 class="t-h2">{{ tit }}</h2>
        </div>
        <p>
          {{ txt }}
        </p>
        <div class="cg-d1">了解更多</div>
        <div class="cg-x"></div>
      </div>
      <div class="right">
        <div v-for="item in filterlist" :key="item.id" class="list">
          <img
            class="s-img"
            :src="require('@/assets/images/cyx/' + item.ImgName + '.jpg')"
            alt=""
          />
          <div class="fx">
                <h2>{{ item.name }}</h2>
          </div>
          <div class="cg-d">了解更多</div>
          <div class="cg-x"></div>
        </div>
        <div
            v-if="limitAdd != list.length && list.length > limit"

          @click="viewLoad()"
          @mouseenter="enters()"
          @mouseleave="leaves()"
          class="list vm"
        >
          <img
            :src="require('@/assets/images/cyx/' + imgName + '.jpg')"
            alt=""
          />
          <h2 class="viewMore">剩余{{ list.length - limit }}项</h2>
          <p>展开更多<i class="el-icon-arrow-down"></i></p>
        </div>
      </div>
    </div>
    <div class="add">
      <div v-for="item in filterAddlist" :key="item.id" class="list">
        <img
          class="s-img"
          :src="require('@/assets/images/cyx/' + item.ImgName + '.jpg')"
          alt=""
        />
        <div class="fx">
                <h2>{{ item.name }}</h2>
          </div>
        <div class="cg-d">了解更多</div>
        <div class="cg-x"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cgc",
  props: {
    cover: {},
    txt: {},
    tit: {},
    list: {},
  },
  data() {
    return {        
      imgName: 18,
      limit: 3,
      limitAdd: 0,
    };
  },
  computed: {
      filterlist: function() {
          return this.list.slice(0,this.limit);
      },
      filterAddlist: function() {
          return this.list.slice(4,this.limitAdd);
      }
  },
  methods: {
    enters() {
      this.imgName = 17;
    },
    leaves() {
      this.imgName = 18;
    },
    viewLoad() {
      console.log("加载");
      this.limit++;
      this.limitAdd+=this.list.length
    },
  },
};
</script>

<style scoped>
.noneb {
  display: none;
}
.container {
  width: 100%;
  overflow: hidden;
}
.cont {
  width: 1280px;
  margin: 0 auto 50px;
  overflow: hidden;
}
.left {
  width: 487px;
  float: left;
  margin-right: 20px;
}
.right {
  float: left;
  width: 580px;
}
.left img {
  width: 100%;
  height: 305px;
}
.t-h2 {
  margin: 10px 0;
}
p {
  font-size: 14px;
  color: #555;
  line-height: 30px;
  margin-bottom: 40px;
}
.s-img {
  width: 220px;
  height: 144px;
}
h2 {
  font-weight: normal;
  color: #233;
  margin: 20px 0;
  font-size: 20px;
}
.list {
  margin: 0 20px 20px 0;
  float: left;
  overflow: hidden;
}
.vm {
  padding: 20px 0 0 100px;
  box-sizing: border-box;
  cursor: pointer;
}
.add {
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
}
.cg-d1{
  font-size: 12px;
  padding-bottom: 5px;
  cursor: pointer;
  margin-top: 130px;
}
.cg-d{
  font-size: 12px;
  padding-bottom: 5px;
  cursor: pointer;
}
.cg-x{
  height: 2px;
  width: 50px;
  background-color: black;
}
</style>
