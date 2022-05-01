$(document).ready(function() {
var p = $("p");
$.ajax({
method:"post", 
url:"ajax.php", 
date:{name:"mohamed"}, 
success:function(date, status, xhr ){
p.text("");
}, 
error :function(date, status, error){
p.text(error)
}
})
});