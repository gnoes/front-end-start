var num, total = 0;
while(num !== null ){
    num = prompt("숫자를 입력하세요.");

    console.log ("num :", num);

    total += parseInt(num, 10);
    debugger
    console.log (total);
    
}
alert("합은 " + total +" 입니다");