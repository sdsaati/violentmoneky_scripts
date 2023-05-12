// ==UserScript==
// @name        poe.com
// @namespace   Violentmonkey Scripts
// @match       https://poe.com/*
// @grant       none
// @version     1.0
// @author      sdsaati
// @require
// @description 4/1/2023, 1:22:48 PM
// ==/UserScript==

/* default global variables */
window.direction = "ltr";

setInterval(makeThemCorrect, 1000);

function toggle_direction(){
  if (window.direction == "ltr"){
    window.direction = 'rtl';
  }
  else{
    window.direction = 'ltr';
  }
  $(".label_of_direction").text("Direction is : " + window.direction);
  makeThemCorrect();
}

function makeThemCorrect(){
  //$("body").css('direction', 'rtl');
  $("p").css('direction', window.direction);
  $(".code-block-wrapper").css('direction', 'ltr');
  $("code").css('direction', 'ltr');
  //$(".overflow-hidden").css('overflow', 'visible');
  $("div.ChatMessage_messageWrapper__Zf87D > div > div").css('max-width','100%');
  $("div.Message_row___ur0Y > div").css('max-width','100%');
  $("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > section").css("max-width","90%");
  $("#__next > div.PageWithSidebarLayout_centeringDiv___L9br > section").css("width","90%");
  return 1;
}

// One liner function:
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;




$(document).ready(function(){makeThemCorrect();});
$( window ).on('load',function() {
  addCSS('::-webkit-scrollbar-thumb{ background-color:blue; }');
  $('body').after('<button class="toggle_direction" style="position:fixed; left:0; bottom:0; background-color:green;color:white;padding: 10px;">Toggle Direction</button>');
  $('.toggle_direction').after('<p class="label_of_direction" style="position:fixed; left:120px; bottom:0;display:inline;background-color:green;color:white;">' + "Direction is : " + window.direction +"</p>");
  $(".toggle_direction").click(function(){toggle_direction();});
  makeThemCorrect();
});

