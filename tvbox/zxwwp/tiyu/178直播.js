var rule = {
    title:'178直播',
    host:'https://178tiyu.live/', 
    url:'/fyclass',
                class_name:'全部直播',       //静态分类名称拼接
            class_url:'/lives',    //静态分类标识拼接
            //homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    //class_name:'赛事直播✨注意时间',
    //class_url:'/',
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.match-body tr');tabs.forEach(function(it){var pz=pdfh(it,'.teamname:eq(0)&&Text');var ps=pdfh(it,'.date&&Text');var pk=pdfh(it,'.teamname:eq(1)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.league&&Text');var url=pd(it,'.zbzt a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{ 
          title:'.sig-vs-txt span&&Text;.sig-vs-txt b&&Text',  //片名;类型 时间
          desc:';;;.ht a&&Text;.gt a&&Text',  //// 演员;导演
          content:".team&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.sig-list.a.ncp a:gt(0):lt(17)',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
  搜索:'*',
}