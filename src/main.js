let demo = document.querySelector("#demo");
let style=document.querySelector("#style");

let string = `   
  /*大家好,我叫,lapetus8
  *我是一名很厉害的前端
  *接下来我演示一下我深厚的前端功底
  *首先我要准备一个div
  */
  #div1{
      border:1px solid red;
      width:200px;
      height:200px;
      color:red;
  }
  /*接下来我把div变成一个八卦图
  *第一步,变成一个圆
  */
  #div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    }
    /* 第二步
    * 改成一黑一白
    *这里用CSSgradient.io自动生成一哈渐变效果,这个网站很好用哦
    **/
    #div1{
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }
    /* 加两个神秘的小球 
    *   这里用的CSS伪元素,没有新建两个div哦
    */
    #div1::before{
        width: 100px;
        height: 100px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #000;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #div1::after{
        width: 100px;
        height: 100px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    }

  `;
let string2 = "";
let n = -1;
// 想辦法把所有的回車換成<br>,但是这种方式不好用，会在后面加上<这个，很烦
// string = string.replace(/\n/g, "<br>");

// demo.innerHTML = string.substr(0, n);

let step = () => {
  setTimeout(() => {
    n = n + 1;
    //这里要对字符串进行一些修改,把\n改成回车,把空格改成&nbsp
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp";
    } else {
      string2 = string2 + string[n];
    }

    demo.innerHTML = string2;
    style.innerHTML=string.substring(0,n);
    //必须显示最后一行
    window.scrollTo(0, 99999);


    //程序员三大难题之一:是否加一,反正我这里试出来了,能跑没bug
    if (n + 1 < string.length) {
      step();
    }
  }, 50);
};

step();

// let style = document.querySelector("#style");

// setTimeout(() => {
//   style.innerHTML = `
//     body
//     {color:red}`;
// }, 3000);
