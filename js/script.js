//alert("hello");
$('.on-change').on('change',function(){
    let data =$(this).val();
    if(data == 0){$('.task-list tr').show();}

    else{
   // alert(data);
   $('.task-list tr').hide();
   $('.task-list td ').filter(function(){
    return $(this).text()==data;
   }).parent().show();}
});
//search by typing
let input = document.querySelector(".search-field");
input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        let data = e.target.value;
    $('.task-list tr').hide();
    $('.task-list td ').filter(function(){
        return $(this).text()==data;
    }).parent().show();}
    
})
// table click
$(document.body).on('click',"tr[data-href]",function(){
    window.location.href = this.dataset.href;
});

// add_new
$(".add-new-driver-btn").on('click',function(){
    //alert('hi');
    $('.add-new-driver').addClass("add-new-driver-come");
});
$(".close-btn").on('click',function(){
    //alert('hi');
    $('.add-new-driver').removeClass("add-new-driver-come");
})