var name = "小明"
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

//导出方式1
// export {
//     flag,
//     sum
// }

// 导出防守2

export var num11 = -1000;
export var height = 1.88;

// 导出函数/类

export function mul(num1, num2) {
    return num1 + num2
}

export class Person {
    run() {
        console.log("这是Person")
    }
}

export default function(argument) {
    console.log(argument);
}