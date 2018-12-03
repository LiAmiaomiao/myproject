/**
 * Created by Li_Ruli on 2018/10/21.
 */

// 使用 Mock
const Mock = require('mockjs');
var Random=Mock.Random;
const code=200
const shopData=function(req){
  console.log(req)
  var shopList=[];
  for(var i=0;i<20;i++){
    let ListObject={
      'name':Random.cname(),
      'img': Random.image(65*65),
      'score':Random.float(3,5),
      'num':Random.natural(100,1000),
      'qijia':Random.natural(2,30),
      'dis':Random.natural(100,1000),
      'minites':Random.natural(10,60),
      'foodCate':Random.cname(),
      'jian':Random.natural(10,20),
      'activity':Random.natural(5,100),
      'man|':Random.natural(14,40),
      'manjian':Random.natural(2,10)
    }
    shopList.push(ListObject)
  }
  return{
    code,
    shopList:shopList
  }
}
Mock.mock('/shopapi','get',shopData);

