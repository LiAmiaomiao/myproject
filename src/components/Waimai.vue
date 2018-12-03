<template>
  <!--顶部-->
  <div>
    <div class="flex row bet mar10">
      <router-link to="waimai/position">
        <span class="mui-icon mui-icon-location themeC"></span>
        <span class="bold"  style="color:#484747">黑龙江科技大学</span>
      </router-link>
      <div class="flex row">
        <div style="padding-right: 20px;line-height: 24px;height:24px">
          <img class="saoIcon" src="../assets/icon/sao.png"/>
          <span class="themeC" style="font-size:15px;color:#484747">扫码</span>
        </div>
        <div>
          <span class="themeC" style="font-size:15px;color:#484747">{{weather}}</span>
          <span class="themeC" style="font-size:15px;color:#484747" >{{temperature}}°C</span>
        </div>
      </div>
    </div>
    <!--搜索框-->
    <div class="searchbox flex center mar10">
      <span></span>
      <span style="font-size:14px;color:#7e7e7e">输入商家、商品名称</span>
    </div>   <!--轮播-->
    <mt-swipe :auto="4000" style="border-radius:8px;" class="mar10">
      <mt-swipe-item  v-for="item in lunboList">
        <img class="lunbo" :src='item.src'/>
      </mt-swipe-item>
    </mt-swipe>

    <!--分类-->
    <div style="width:100%">
      <div style="width:20%;float: left;text-align: center" v-for="item in categoryList">
        <img class="icon50" :src="item.img">
        <div style="font-size: 13px;">{{item.name}}</div>
      </div>
    </div>
    <!--品质套餐，限量抢购-->
    <div class="flex row mar10" style="padding-top:10px;clear: both;width:100%;">
      <div class="taocan">
        <div style="padding-top:15px;padding-left:10px;">
          <div class="font18">品质套餐</div>
          <div class="text2">搭配齐全吃得好</div>
          <div class="font14" style="color:#af8260 ">立即抢购 ></div>
        </div>
        <img class="taocanimg"
             src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/">
      </div>
      <div class="taocan" style="margin-left:10px;">
        <div style="padding-top:15px;padding-left:10px;">
          <div class="font18" style="color: red;">限量抢购</div>
          <div class="text2">超值美味9.9起</div>
          <div class="flex row font14">
            <div style="color: red"><span>{{num}}</span>人</div>
            <div>正在抢 ></div>
          </div>
        </div>
        <img class="taocanimg"
             src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
      </div>
    </div>
    <!--推荐商家-->
    <div style="padding-bottom:100px;">
      <div style="font-size:15px">推荐商家</div>
      <div style="font-size:13px;color:#585858;justify-content: space-around" class="flex row">
        <div>综合排序</div>
        <div>距离最近</div>
        <div>品质联盟</div>
        <div>筛选</div>
      </div>
      <div class="flex row" style="width: 100%;border-bottom:#f2f2f2 solid 1px;" v-for="item in shopList" :key="shopList">
        <div style="width:20%;">
          <img class="zhaopaiImg" :src="item.img" />
        </div>
        <div style="width: 80%;">
          <div class="flex row shopname" style="justify-content: space-between">
            <div>{{item.name}}</div>
            <div class="shopscore">...</div>
          </div>
          <div class="flex row">
              <div class="flex row">
                <img src=""/>
              </div>
              <div class="shopscore">{{item.score}}</div>
              <div class="shopscore">月售<span>{{item.num}}</span>单</div>
          </div>
          <div class="flex row" style="justify-content: space-between">
            <div class="flex row shopscore">
              <div>￥<span>{{item.qijia}}</span>元起送</div>
              <div>免费配送</div>
            </div>
            <div class="flex row shopDis">
              <div>{{item.dis}}m</div>
              <div>{{item.minites}}分钟</div>
            </div>
          </div>
          <div class="shopscore">{{item.foodCate}}</div>
          <div class="flex row" style="justify-content: space-between">
            <div class="flex row">
              <div class="shou">首</div>
              <div class="shopscore">新用户下单立减<span>{{item.jian}}</span>元</div>
            </div>
            <span class="shopDis"><span>{{item.activity}}</span>个活动</span>
          </div>
          <div class="flex row">
            <div class="jian">减</div>
            <div class="shopscore">满<span>{{item.man}}</span>元减<span>{{item.manjian}}</span>元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    data () {
      return {
        shopList:[],
        temperature:'',
        weather:'',
        num: 14182,
        lunboList: [
          {'src': 'https://fuss10.elemecdn.com/8/ec/3e53fd7729bf68934db57086bf54ejpeg.jpeg?imageMogr/thumbnail/568x/'},
          {'src': 'https://fuss10.elemecdn.com/d/c9/4f49375dcaf53b151616e49c85a31jpeg.jpeg?imageMogr/thumbnail/568x/'},
          {'src': 'https://fuss10.elemecdn.com/d/3d/b127dbe9b5c4d1f2b66aaf39fd942jpeg.jpeg?imageMogr/thumbnail/568x/'}
        ],
        categoryList: [
          {
            'img': 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '美食'
          },
          {
            'img': 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '晚餐'
          },
          {
            'img': 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '商超便利'
          },
          {
            'img': 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '水果'
          },
          {
            'img': 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '医药健康'
          },
          {
            'img': 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '浪漫鲜花'
          },
          {
            'img': 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '厨房生鲜'
          },
          {
            'img': 'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '跑腿代购'
          },
          {
            'img': 'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '地方小吃'
          },
          {
            'img': 'https://fuss10.elemecdn.com/5/de/bebe83947afee0b0f38257b0e3866jpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/',
            'name': '签到领红包'
          },
        ],
      }
    },
    created(){
      this.getshopInfo();
    },
    mounted(){
      this.getWeather()
    },
    methods:{
        //获得商品信息的方法
        getshopInfo(){
          var that=this;
          this.$http.get("/shopapi").then(res => {
              that.shopList=res.data.shopList;
          });
        },

      getWeather(){
            this.$http.get('https://restapi.amap.com/v3/weather/weatherInfo?key=141c5e0406c7198eaacf211ac07dd64b&city=230109').then(res=>{
                if(res.data.status==1){
                  this.temperature=res.data.lives[0].temperature;
                  this.weather=res.data.lives[0].weather;
                }
            })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit C
SS to this component only -->
<style scoped lang="scss">
  .bold {
    font-weight: bold;
  }

  .flex {
    display: flex;
  }

  .row {
    flex-direction: row;
  }

  .column {
    flex-direction: column;
  }

  .bet {
    justify-content: space-between;
  }

  .themeC {
    color: #00aaff;
  }

  .center {
    justify-content: center;
    align-items: center;
  }

  .saoIcon {
    width: 16px;
    height: 16px;
  }

  .mar10 {
    margin-bottom: 10px;
  }

  .searchbox {
    background-color: #e5e5e5;
    border-radius: 12px;
    width: 100%;
    height: 28px;
  }

  .mint-swipe {
    height: 100px;
    .mint-swipe-item:nth-child(1) {
      background-color: lightblue
    }
    .mint-swipe-item:nth-child(2) {
      background-color: lightcoral;
    }
    .mint-swipe-item:nth-child(3) {
      background-color: lightgreen;
    }
  }

  .lunbo {
    width: 100%;
    height: 100%;
  }

  .icon50 {
    width: 50px;
    height: 50px;
  }

  .font18 {
    font-size: 18px;
    font-weight: bold;
  }

  .text2 {
    font-size: 14px;
    color: #8e8e8e;
  }

  .font14 {
    font-size: 14px;
    font-weight: bold;
  }

  .taocan {
    width: 50%;
    background-color: #f2f2f2;
    position: relative;
    height: 150px;
  }

  .taocanimg {
    width: 120px;
    height: 80px;
    text-align: right;
    position: absolute;
    right: 0;
  }

  .zhaopaiImg {
    width: 65px;
    height: 65px;
  }

  .shopname {
    font-size: 15px;
    font-weight: bold;
  }

  .shopscore {
    font-size: 12px;
    color: #787878;
  }

  .shopDis {
    font-size: 12px;
    color: #aaaaaa;
  }
  .shou{
    font-size:11px;
    color:#fff;
    background-color: #438004;
    border-radius:3px;
    width:14px;
    line-height: 16px;
    height:14px;
    margin-right:5px;
    padding-left:1px;
  }
  .jian{
    font-size:11px;
    color:#fff;
    background-color: #ff7b7e;
    border-radius:3px;
    line-height: 16px;
    width:14px;
    height:14px;
    margin-top:2px;
    margin-right:5px;
    padding-left:1px;
  }
</style>
