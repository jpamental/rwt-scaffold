function checkMq(){$("body").removeClass("mq-l-desk"),$("body").removeClass("mq-desk"),$("body").removeClass("mq-l-tab"),$("body").removeClass("mq-s-tab"),$("body").removeClass("mq-phone"),$("body").addClass(Modernizr.mq("only all and (min-width: 80.0625em)")?"mq-l-desk":Modernizr.mq("only all and (min-width: 58em)")?"mq-desk":Modernizr.mq("only all and (min-width: 44em)")?"mq-l-tab":Modernizr.mq("only all and (min-width: 25em)")?"mq-s-tab":"mq-phone")}$(function(){checkMq(),$(window).resize(function(){checkMq(),wt.fix()})}),wt.fix({elements:"p",chars:10,method:"nbsp",event:"resize"}),wt.fix({elements:"blockquote",chars:2,method:"nbsp",event:"resize"}),function(e){function n(){d.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1],e.removeEventListener(t,n,!0)}var m="addEventListener",t="gesturestart",o="querySelectorAll",i=[1,1],d=o in e?e[o]("meta[name=viewport]"):[];(d=d[d.length-1])&&m in e&&(n(),i=[.25,1.6],e[m](t,n,!0))}(document);