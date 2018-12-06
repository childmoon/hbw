function $(id) {
    return document.getElementById(id);
}
window.onscroll=function () {
    let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    
    if(scrollTop>226){
        $("header").style.display="none";
        $("section_flex").style.display="block";
    }else
    {
        $("header").style.display="block";
        $("section_flex").style.display="none";
    }
};
window.onload=function () {
    backgroundload();
    loadUsers();
};
function loadUsers() {
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users",true);
    xhr.onload=function () {
        let users=JSON.parse(this.responseText);
        let output='';
        for(let i in users){
            output+=
        '<div class="box">'+
                '<div class="pic">'+
                '<img src='+users[i].avatar_url+' alt="">'+
                '<div class="cover"></div>'+
                '</div>'+
                '<p>当我们正在为生活疲于奔命时，生活已经离我们而去</p>'+
            '</div>'
        }
        $("dom_pull").innerHTML=output;
    };
    xhr.send();
}
function backgroundload() {
    let bacram=Math.round(Math.random()*4)-1;
    $("loadback").src="../imgs/index"+bacram+".jpg";
}

$("loginbtm").onclick=function () {
    $("mask").style.display="block";
}//点击登陆按钮显示登录板块函数

$("loginyinc").onclick=function () {
    $("mask").style.display="block";
}

$("menban").onclick=function () {
    $("mask").style.display="none";
}//点击灰色模块关闭(隐藏)登陆板块


