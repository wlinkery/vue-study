// 导入方法1
import { num1 } from "./aaa";

import { flag, sum } from "./aaa.js";
if (flag) {
    console.log("小米是天才，哈哈哈哈");
    console.log(sum(20, 30));
}

// 导入方法2
import { num1, height } from "./aaa.js";
console.log(num11);
console.log(height);

// 倒入方法exprt的function

import { mul, Person } from "./aaa.js";
console.log(mul(30, 50));

const p = new Person();
p.run();
// 导入export default中的内容
import addr from "./aaa.js";

// 统一全部导入
import * as aaa from "./aaa.js";