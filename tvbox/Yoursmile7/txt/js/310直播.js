var rule = {
    title:'310直播',
    host:'http://www.310.tv/{cateId}',
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'热门&足球&篮球',
    class_url:'0&1&2',
    推荐:'*',
    一级:".list_content a;.jiabifeng&&p:lt(5)&&Text;.feleimg img&&src;a&&t-nzf-o;a&&href",
    二级:"*", 
    搜索:"",
}