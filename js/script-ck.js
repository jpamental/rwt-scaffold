/*global jQuery */function checkMq(){$("body").removeClass("mq-l-desk");$("body").removeClass("mq-desk");$("body").removeClass("mq-l-tab");$("body").removeClass("mq-s-tab");$("body").removeClass("mq-phone");if(Modernizr.mq("only all and (min-width: 80.0625em)")){$("body").addClass("mq-l-desk");resetMenu()}else if(Modernizr.mq("only all and (min-width: 58em)")){$("body").addClass("mq-desk");resetMenu()}else Modernizr.mq("only all and (min-width: 44em)")?$("body").addClass("mq-l-tab"):Modernizr.mq("only all and (min-width: 25em)")?$("body").addClass("mq-s-tab"):$("body").addClass("mq-phone")}$(function(){checkMq();$(window).resize(function(){checkMq();wt.fix()})});wt.fix({elements:"p",chars:10,method:"nbsp",event:"resize"});wt.fix({elements:"blockquote",chars:2,method:"nbsp",event:"resize"});(function(e){function o(){s.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1];e.removeEventListener(n,o,!0)}var t="addEventListener",n="gesturestart",r="querySelectorAll",i=[1,1],s=r in e?e[r]("meta[name=viewport]"):[];if((s=s[s.length-1])&&t in e){o();i=[.25,1.6];e[t](n,o,!0)}})(document);