muban.mxone5.二级.desc = ';;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
var rule= {
    title:'量子影视',
    模板:'mxone5',
    host:'http://www.lzizy9.com',
	url:'/index.php/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {"40":[
        {"key":"cateId","name":"类型","value":[
            {"n":"全部","v":"40"},
            {"n":"足球","v":"40"},
            {"n":"篮球","v":"42"},
            {"n":"网球","v":"43"},
            {"n":"斯诺克","v":"44"}
        ]}
        ]},
	filter_def:{
		40:{cateId:'40'}
	},
    cate_exclude:'电影片|连续剧|动漫片|综艺片|电影解说|网址|演员',
    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl:'/index.php/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}