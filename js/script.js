//alert("hello");
$('.on-change').on('change',function(){
    let data =$(this).val();
    if(data == 0){$('.task-list tr').show();}

    else{
   // alert(data);
   $('.task-list tr').hide();
   $('.task-list td ').filter(function(){
    return $(this).text()== data;
   }).parent().show();}
});

let input = document.querySelector(".search-field");
input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        let data = e.target.value;
    $('.task-list tr').hide();
    $('.task-list td ').filter(function(){
        return $(this).text()==data;
    }).parent().show();}
    
})