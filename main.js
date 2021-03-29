var cont = document.querySelector('.previous-operand')
var answer = document.querySelector('.current-operand')

document.querySelectorAll('.btn').forEach(item=>{
    item.addEventListener('click',event=>{

     var number = item.innerHTML;

    cont.innerHTML +=number;

    })

})


function calculate(){
    var previous = cont.innerHTML;
    var ans = eval(previous);
    //alert(ans);
    answer.innerHTML = ans;
}

document.querySelector('#btn').onclick = function(){
     cont.innerHTML = '';
     answer.innerHTML = '';
}

document.querySelector('#del').onclick = function(){
   var myCont =  cont.innerHTML;
   myCont = myCont.substring(0,myCont.length-1);
   cont.innerHTML = myCont;
 // alert(myCont); 

}