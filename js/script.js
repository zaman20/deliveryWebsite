
// $('.on-change').on('change',function(){
//     let data =$(this).val();
//     if(data == 0){$('.task-list tr').show();}

//     else{
//     alert(data);
// //   $('.task-list tr').hide();
// //   $('.task-list td ').filter(function(){
// //     return $(this).text() == data;
// //    }).parent().show();}
// });

$(".on-change").on('change',function(){
    var word = $(this).val();
   // alert(word);
   if(word == 0){
    $('.task-list tr').show();
   }
   else{
   $('.task-list tr').hide();
   $('.task-list td').filter(function(){
    return $(this).text() == word;
   }).parent().show();
}
})
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

    $('.add-new-driver').addClass("add-new-driver-come");
});
$(".edit-btn").on('click',function(){

    $('.edit-new-driver').addClass("add-new-driver-come");
});
$(".close-btn").on('click',function(){

    $('.add-new-driver').removeClass("add-new-driver-come");
    $('.edit-new-driver').removeClass("add-new-driver-come");
});
$(".dlt-btn").on("click",function(){

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
})