function runProgram(input) {
var input = input.trim().split("\n")
var size = Number(input[0]);
var arr = input[1].trim().split(" ").map(Number);
var product = 1;
for(var i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
 product = product * arr[i]
    }
    
}
console.log(product)
}


if (process.env.USERNAME === "USER") {
  runProgram(`4
  1 2 3 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
