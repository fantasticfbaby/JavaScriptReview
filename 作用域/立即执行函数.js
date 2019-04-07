var a = 2;
(function (a) {
    a=3
    console.log(a)
})(a);// 将外部的值传入
console.log(a); // 内部与外部隔绝

(function () {
    a=10
    console.log(a)
})();

