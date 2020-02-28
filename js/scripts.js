function Contact(fname, address) {
  this.fName =name;
  this.addresses = [];
}
function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
  }
$(document).ready(function(){
$(".A").hover(function(){
  $(".large").slideToggle()
});
$(".B").hover(function(){
  $(".medium").slideToggle()
});
$(".C").hover(function(){
  $(".small").slideToggle()
});

});
