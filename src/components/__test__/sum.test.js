import { sum } from "../sum";

test("Check sum of two positive numbers", ()=>{
   expect(sum(5,2)).toBe(7);
})