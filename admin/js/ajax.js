(function(window) {
  //获取有没有token令牌
  const token = localStorage.getItem("token");
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
})(window);
