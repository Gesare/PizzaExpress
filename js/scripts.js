$("document").ready(function(){
    function person (name){
        this.name = name;

    }
        person.prototype.profile = function(){
         $("#name").text("Your name is "+this.name)

        }
        $("#profile").click(function(){
            var name = $(".name").val();
            var location = $(".location").val();
             var user = new person(name,location)
            user.profile()
        })
    function order(size,toppings,number,delivery,type){
        this.size = size;
        this.toppings =toppings;
        this.number = number;
        this.delivery = delivery;
        this.type = type;
    }
    order.prototype.price = function(){
        let price =0;
        let Total =0;
        if (this.size === "Large"){
         price =1300;
         Total = price + 300;
         Total = Total * this.number;
        }
        else if (this.size === "Medium"){
            price = 900;
            Total = price + 300;
            Total =Total * this.number;
        }
        else if(this.size ==="small"){
            price=600
            Total = price + 300;
            Total = Total * this.number;
        }
        else alert("Enter your sizes ")
        var delivery=prompt("If you want your pizza to br delivered to your location.Answer yes.If not answer nope ?")
        if(delivery === "yes"){
            alert("You'll have to add ksh.150 to your full price ")
            Total = Total + 150;
             var location =prompt("Please enter your location")
             $("#location").text("Your location is "+location)
        }
        else if(delivery === "nope"){
            alert("See you soon.");
        }
        else alert('Please input the correct answer.');

        $("#details").text("Your order will be delivered shortly.your total payment is "+Total +"." +" And you choose this type of pizza "+this.size);

    }
     $(".calc").click(function(){
         var type = $("#type").val()
         var size= $("#size").val();
         var toppings = $(".toppings").val();
         var number = $(".number").val();
         var delivery = $(".delivery").val();
          var myOrder = new order(size,toppings,number,delivery,type);
          myOrder.price()

        });
        $(".A").hover(function(){
          $(".large").slideToggle()
        });
        $(".B").hover(function(){
          $(".medium").slideToggle()
        });
        $(".C").hover(function(){
          $(".small").slideToggle()
        });
       })
