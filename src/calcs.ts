import { add, power, root } from "./utils";

export function pythagoras(a: number, b: number):number {
   return root(add(power(a,2),power(b,2)));
}