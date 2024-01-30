var rule = {
    title:'高清直播',
    host:'http://www.zuqiuzhibo.live/',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',       //静态分类名称拼接
    class_url:'/',    //静态分类标识拼接
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.against');tabs.forEach(function(it){var pz=pdfh(it,'strong:eq(0)&&Text');var ps=pdfh(it,'a&&Text');var pk=pdfh(it,'strong:eq(1)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.status_live&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
		tabs:"js:TABS=['【直播源】']",
        lists:'.live_link a',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}