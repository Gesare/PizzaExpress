$("document").ready(function(){
    function person (name,email,phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
        person.prototype.profile = function(){
         $("#name").text("Your name is "+this.name)
         $("#email").text("Your Email address is "+this.email)
         $("#phone").text("Your Phone number is "+this.phone)
        }
        $("#profile").click(function(){
            var name = $(".name").val();
            var email =$(".Email").val();
            var phone = $(".phone").val();
            var location = $(".location").val();
             var user = new person(name,email,phone,location)
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
         price =1100;
         Total = price + 300;
         Total = Total * this.number;
        }
        else if (this.size === "Medium"){
            price = 800;
            Total = price + 300;
            Total =Total * this.number;
        }
        else if(this.size ==="small"){
            price=500
            Total = price + 300;
            Total = Total * this.number;
        }
        else alert("Enter your sizes ")
        var delivery=prompt("Would like it hand delivered or you would like to proceed to our restaurant ?")
        if(delivery === "hand delivered"){
            alert("You'll have to add ksh.300 to your full price ")
            Total = Total + 300;
             var location =prompt("Please enter your location")
             $("#location").text("Your location is "+location)
        }
        else if(delivery === "proceed to restaurant"){
            alert("We are expecting you soon");
        }
        else alert('Wrong choice');

        $("#details").text("Your pizza will be ready shortly,The total price is  "+Total +"." +" And your  pizza size is  "+this.size);

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
