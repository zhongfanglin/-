"use strict";var computer={init:function(){this.event(),this.computer=document.querySelector(".computer"),this.ul=this.computer.querySelector("ul"),this.liAll=this.ul.querySelectorAll("li"),this.getData()},event:function(){$(function(){$(".computer ul li").on("mouseenter",function(){$(this).css("opacity","0.6").siblings().css("opacity","1")}),$(".computer ul li").on("click","li",function(){location.href="register.html"})})},getData:function(){var e=this;sendAjax("json/computer.json").then(function(t){t=JSON.parse(t),e.data=t,e.insertData(t)})},insertData:function(t){for(var e in t){var n=document.createElement("a");n.setAttribute("href","demo.html");var i=document.createElement("img");i.src=t[e].src;var c=document.createElement("p"),r=document.createElement("p");c.innerHTML=t[e].content,r.innerHTML=t[e].money,n.appendChild(i),n.appendChild(c),n.appendChild(r),this.liAll[e].appendChild(n)}}};computer.init();