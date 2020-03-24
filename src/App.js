import React, { useState, useEffect } from 'react'
import './init.css'
export default function App() {
  let str = `
* 大家好,我是陈嘉豪
* 很多公司都开始招聘了,你是否正在写简历呢？
* 说做就做,我们一起完成这份简历.
* 首先初始化 我们的css
 /* 白色背景太单调了 来点颜色 */
*  html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
 /* 来码点内容进去吧！ */
 <h1>陈嘉豪 | 21岁 | 武汉 </h1>

  <p class="center"><span>📞 180-0713-5705 | 💌 1797793818@qq.com </span></p>

  <p class="center">求职意向：前端暑期实习 </p>
  <section  class="prefile"><section class="education"> <h2> 教育经历 </h2>
<ul>
   <li><span class="blue">学校名称</span> ：<span class="gray"> 武昌首义学院</span> </li>
   <li><span class="blue">所学专业</span> ：<span class="gray"> 计算机科学与技术专业</span> </li>
   <li><span class="blue">学历学位</span> : <span class="gray"> 本科在读</span></li>
   <li><span class="blue">就读时间</span> ：<span class="gray"> 
   <time>2017/09</time>~<time>2021/06</time></span></li>
</ul></section>
<section class="href"><h2> 相关链接 </h2>
  <ul>
    <li><a href="https://www.zhihu.com/people/chen-jia-hao-66-95">我的博客</a> 👈</li>  
    <p class="gray">目前已经有 24 篇技术文章</p>
    <li><a href="https://github.com/meowWhat">GitHub</a > 👈</li> 
    <p class="gray"> 多个开源项目,个人总结,算法心得</p>
   </ul></section></section> 

 /* 加一点样式吧 */
.bgc{
  background: #eee;
  color: black;
}
  h1 {
text-align: center;
font-size: 25px;
}
  .center {
text-align: center;
}
a {
  color: #60c7d7;
  text-decoration: none;
}
.gray {
  color: #9a9a9a;
 }
 .blue {
   color:#60c7d7;
 }
 h2 {
  border-bottom: 1px solid #ddd;
  padding: 5px;
  font-size: 20px;
}
.prefile{
  position: relative;
  width: auto;
  height: 160px;
  display: flex;
}
.href{
  flex: 1;
  
}
.education {
  flex: 1.2;
}
li{
  list-style-type: none;
  margin: 2px 0;
}
ul{
padding:  5px
}
/* 继续码字吧~~ */
<section class="skill">
<h2>技术栈</h2>
<ul class="skill_detail">
    <li>熟练掌握静态页面制作技巧,能<strong>像素级还原</strong>设计稿</li>
    <li>
      熟悉<strong>前后端分离</strong>技术,包括 AJAX,跨域,前端路由 </li>
      <li>熟练掌握<strong>React全家桶</strong>的使用,了解中间件的原理,能实现简易版的 Redux,React-router,</li>
    <li>
      熟练掌握 <strong>React高阶组件</strong>的使用,了解<strong>HOOK</strong>,深入理解组件低耦的要求
    </li>
    <li>
      熟悉<strong>Node.js</strong>的使用,能实现简易的 Koa框架.
    </li>
    <li>
      熟悉<strong>Vue</strong>的使用,了解双向绑定的原理,能实现数据驱动 ,能手动解析 mustache 语法.
    </li>
    <li>
      了解<strong>TypeScript</strong>与<strong>Jest</strong>单元测试使用.
    </li>
    <li>
      了解<strong>webpack</strong>配置,了解<strong>JQuery</strong>能实现常见动画特效,了解常用的UI库
    </li>
</ul>
</section>
/* 最后给 strong 上点色吧！ */
strong{
  color: #fb8e51;
  font-weight: 500;
}
/* 先写成这样吧 下次继续 */
/* 这个创意不是我自己的哦！ */
/* Inspired by http://strml.net/ */
/* 希望各位都能找到 心仪的工作！！ */
`

  let str2 = `
  <h1>陈嘉豪 | 21岁 | 武汉 </h1>

  <p class="center"><span>📞 180-0713-5705 | 💌 1797793818@qq.com </span></p>

  <p class="center">求职意向：前端暑期实习 </p>
  <section  class="prefile"><section class="education"> <h2> 教育经历 </h2>
<ul>
   <li><span class="blue">学校名称</span> ：<span class="gray"> 武昌首义学院</span> </li>
   <li><span class="blue">所学专业</span> ：<span class="gray"> 计算机科学与技术专业</span> </li>
   <li><span class="blue">学历学位</span> : <span class="gray"> 本科在读</span></li>
   <li><span class="blue">就读时间</span> ：<span class="gray"> 
   <time>2017/09</time>~<time>2021/06</time></span></li>
</ul></section>
<section class="href"><h2> 相关链接 </h2>
  <ul>
    <li><a href="https://www.zhihu.com/people/chen-jia-hao-66-95">我的博客</a> 👈</li>  
    <div class="gray">目前已经有 24 篇技术文章</div>
    <li><a href="https://github.com/meowWhat">GitHub</a > 👈</li> 
    <div class="gray"> 多个开源项目,个人总结,算法心得</div>
   </ul></section></section>   
`

  let str3 = `.bgc{
  background: #eee;
  color: black;
}
  h1 {
text-align: center;
font-size: 25px;
}
  .center {
text-align: center;
}
a {
  color: #60c7d7;
  text-decoration: none;
}
.gray {
  color: #9a9a9a;
 }
 .blue {
   color:#60c7d7;
 }
 h2 {
  border-bottom: 1px solid #ddd;
  padding: 5px;
  font-size: 20px;
}
.prefile{
  position: relative;
  width: auto;
  height: 160px;
  display: flex;
}
.href{
  flex: 1;
  
}
.education {
  flex: 1.2;
}
li{
  list-style-type: none;
  margin: 2px 0;
}
ul{
padding:  5px
}
`

  let str4 = `
<section class="skill">
<h2>技术栈</h2>
<ul class="skill_detail">
    <li>熟练掌握静态页面制作技巧,能<strong>像素级还原</strong>设计稿</li>
    <li>
      熟悉<strong>前后端分离</strong>技术,包括 AJAX,跨域,前端路由 </li>
      <li>熟练掌握<strong>React全家桶</strong>的使用,了解中间件的原理,能实现简易版的 Redux,React-router,</li>
    <li>
      熟练掌握 <strong>React高阶组件</strong>的使用,了解<strong>HOOK</strong>,深入理解组件低耦的要求
    </li>
    <li>
      熟悉<strong>Node.js</strong>的使用,能实现简易的 Koa框架.
    </li>
    <li>
      熟悉<strong>Vue</strong>的使用,了解双向绑定的原理,能实现数据驱动 ,能手动解析 mustache 语法.
    </li>
    <li>
      了解<strong>TypeScript</strong>与<strong>Jest</strong>单元测试使用.
    </li>
    <li>
      了解<strong>webpack</strong>配置,了解<strong>JQuery</strong>能实现常见动画特效,了解常用的UI库
    </li>
</ul>
</section>`
  const [count, setCount] = useState(0)
  let windHeight = window.innerHeight

  function start() {
    let div = document.querySelector('#content')
    div.innerText = str.substring(0, count)
    if (count <= str.length) {
      setCount(count + 1)
      if (count === 155) {
        document.body.className = 'html'
      }
    }

    if (div.offsetHeight > windHeight - 500) {
      window.scrollTo(0, div.offsetHeight - 500)
    }
  }
  function resumeStart() {
    let resume = document.querySelector('#resume')
    if (count - 155 <= str2.length) {
      resume.innerHTML = str2.substring(0, count - 155)
    }
  }

  function styleStart() {
    let style = document.querySelector('#style')
    if (count - 1050 <= str3.length) {
      style.innerHTML = str3.substring(0, count - 1050)
    }
  }
  function skillStart() {
    let skill = document.querySelector('#skill')
    if (count - 1614 <= str4.length) {
      skill.innerHTML = str4.substring(0, count - 1614)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      start()
      if (count >= 1614) {
        skillStart()
      } else if (count >= 1050) {
        styleStart()
      } else if (count >= 155) {
        resumeStart()
      }
      if (count === 2402) {
        let style = document.querySelector('#style')
        style.innerHTML =
          style.innerHTML +
          `strong{
        color: #fb8e51;
        font-weight: 500;
      }`
      }
    }, 10)
  }, [count])

  return (
    <>
      <style id="style"></style>
      <print id="content" style={{ whiteSpace: 'pre' }}></print>
      <article id="article" className="bgc">
        <content id="resume"></content>
        <skill id="skill"></skill>
      </article>
    </>
  )
}
