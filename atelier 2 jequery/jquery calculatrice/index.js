
function insrt(num){
    $('.calc-display').val($('.calc-display').val() +num);
}

function eql(){
     let v=$('.calc-result').text()+$('.calc-display').val();
    $('.calc-result').text(eval(v));
   // $('.calc-display').val('');
}
function C(){
    $('.calc-display').val('');
    $('.calc-result').text('');
}
function del(){
    value= $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length -1));

}