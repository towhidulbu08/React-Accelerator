function modifier(str, ...val) {
  console.log(str);
  console.log(val);
}
const p1 = "Sakib";
const p2 = "Tamim";

console.log(modifier`We have${p1}and${p2}in our team`);
