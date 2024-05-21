import "./style.css";
import { callback } from "./basic/1";
import { person } from "./basic/2";
import { showMessage, calc, customError } from "./basic/4";
import { isWeekend } from "./basic/5";
import { DayOfWeek } from "./basic/5";
import { poly, mango } from "./basic/6";

console.log(callback(10));
person.push(20);
person.push(10);
console.log(person);
showMessage("Hello");
console.log(calc(10, 10));
// console.log(customError());
console.log(isWeekend(DayOfWeek.Sunday));
console.log(poly);
console.log(mango);
