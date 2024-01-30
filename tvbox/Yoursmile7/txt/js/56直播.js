var rule = {
            title:'56直播',
            host:'https://www.56zhibo.cc/',
            url:'/fyclass',
            class_name:'全部&足球&篮球&电竟',       //静态分类名称拼接
            class_url:'/&football.html&basketball.html&other.html',    //静态分类标识拼接
            homeUrl:'/',  
           // class_name:'赛事直播✨注意时间',
           // class_url:'/',
            推荐:'*',
            // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
            //一级:".list_content a;.jiabifeng&&p:lt(5)&&Text;.feleimg img&&src;a&&t-nzf-o;a&&href",
            一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.el-table__row');tabs.forEach(function(it){var  pz=pdfh(it,'.team_lname&&Text');var ps=pdfh(it,'.cell:eq(0)&&Text');pk=pdfh(it,'.team_rname&&Text');var img=pd(it,'img&&src);var timer=pdfh(it,'.cell:eq(1)&&Text');var url=pd(it,'.cell a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
            // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
            二级:{
                 title:'.sig-vs-txt span&&Text;.sig-vs-txt b&&Text',  //片名;类型 时间
                 desc:';;;.ht a&&Text;.gt a&&Text',  //// 演员;导演
                 content:".team&&Text", //主要信息
                 tabs:"js:TABS=['【直播源】']",
                 lists:'.sig-list.a.ncp a:gt(0):lt(17)',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
                 list_text:'a&&Text',
                 list_url:'a&&href'
                 },
            搜索:'',  
            }