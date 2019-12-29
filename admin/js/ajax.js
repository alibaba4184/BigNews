(function(window) {
  //获取有没有token令牌
  const token = localStorage.getItem("token");
  //为以后要用到的Ajax请求设置默认的值
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      //如果不是login.html登录页，就统一添加请求头
      if (location.href.indexOf("login.html") === -1) {
        //注意这里的xhr是原生的对象，所以用原生的方式添加请求头
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
  var baseUrl = "http://localhost:8080/api/v1/admin/user/detail";
})(window);
