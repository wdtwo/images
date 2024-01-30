var rule = {
    title:'优直播网',
     host:'https://www.yoozhibo.cc/',
     //url:'/lanqiu/fypage',
    //class_parse:'.live-cat-nav li;a&&Text;a&&href;/lanqiu/(\\d+)',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'NBA&CBA&斯诺克&乒乓球&英超&西甲&德甲&意甲&羽毛球&网球&欧冠&中超',       //静态分类名称拼接
    class_url:'lanqiu/nba&lanqiu/cba&zonghe/sinuoke&zonghe/pingpangqiu&zuqiu/yingchao&zuqiu/xijia&zuqiu/dejia&zuqiu/yijia&zonghe/yumaoqiu&zonghe/wangqiu&zuqiu/ouguan&zuqiu/zhongchao',    //静态分类标识拼接
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.box li');tabs.forEach(function(it){var  pz=pdfh(it,'.sbtsw022&&Text');var ps=pdfh(it,'.sbtsw&&Text');var pk=pdfh(it,'.sbtsw023&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.time&&Text');var url=pd(it,'.zbzt a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
     二级:{
          title:'.score&&Text;.teamOne&&Text',  //片名;类型 时间
          img:"img&&src",
          desc:';;;.teamOne&&Text;.teamTwo&&Text',  //// 演员;导演
          content:".list&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.down-site a:gt(7):lt(15)',  //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }