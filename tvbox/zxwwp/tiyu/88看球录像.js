var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.live/replay',
    url:'/match/fyclass/replay',
    class_parse:'.nav.nav-pills li;a&&Text;a&&href;/match/(\\d+)/replay',
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list-group-item');tabs.forEach(function(it){var pz=pdfh(it,'.media-heading&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'span&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  ',title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{
	    title:"h3&&Text",
        img:"img&&src",
        desc:";;;",
	    content:"h3&&Text",
	    tabs:"js:TABS=['【直播源】']",
        lists:'.col-md-9 div:gt(0)',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}