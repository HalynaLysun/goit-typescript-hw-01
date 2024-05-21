import "./style.css";
import { callback } from "./basic/1";
import { person } from "./basic/2";
import { isWeekend } from "./basic/5";
import { DayOfWeek } from "./basic/5";

console.log(callback(10));
console.log(person.push("10"));
console.log(person.push(10));
console.log(person);
console.log(isWeekend(DayOfWeek.Sunday));
