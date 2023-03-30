function calculate(){
    let input = document.getElementById("inputfield").value;
    console.log(input)
    let tip = input*0.1;
    document.getElementById("tip").innerText="Tip Amount is "+tip;
    document.getElementById("inputfield").value=null
}