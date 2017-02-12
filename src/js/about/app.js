
/**
 * Created by Robin on 2017/1/30.
 */
import "../../../src/less/about.less";


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[5](); // 6

var aaa = 9999;