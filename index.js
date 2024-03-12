var app = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.carts=[];
    $scope.cartpay=[];
    $scope.products = [
        {p_id: "1", p_name: "Casual Kurti Wear",p_desc:"Comfortable to wear and gives an elegant look ✨", p_image: "/images/download1.jpeg", p_price: 2000},
        {p_id: "2", p_name: "Titan Watch",p_desc:"Men Titan Neo Analog Green Dial Watch  that gives you sporty and sleeky look 😎", p_image: "/images/watch.jpeg", p_price: 3245},
        {p_id: "3", p_name: "Nike Shoes",p_desc:"Nike Interact Run Women's Road Running Shoes 👟", p_image: "/images/nike.jpeg", p_price: 4999},
        {p_id: "4", p_name: "Delfa Necklace Set",p_desc:"Rosegold tone simple necklace set for women and girls 😃", p_image: "/images/access.jpeg", p_price: 1500},
        {p_id: "5", p_name: "Roshan Bags",p_desc:"It's durable, functional, stylish, and comfortable to carry 🤩", p_image: "/images/bag.jpeg", p_price: 1500},
        {p_id: "6", p_name: "Lakme Compact Powder",p_desc:"It protects skin cell damage and brightens it ✨", p_image: "/images/lakme.jpeg", p_price: 650},
        {p_id: "7", p_name: "Samsung Speaker",p_desc:"Deezer Free's audio quality is 128kbps via MP3 files, and Deezer Premium's is 320kbps.", p_image: "/images/ssp.jpeg", p_price: 15090},
        {p_id: "8", p_name: "LG Refridgerator",p_desc:"Comfortable to wear and gives an elegant look ✨ ", p_image: "/images/fridge.jpeg", p_price: 44678},
    ];
    $scope.add_cart = function(product){ 
        if(product){ 
            $scope.carts.push({p_id: product.p_id,p_image:product.p_image,p_desc:product.p_desc, p_name: product.p_name, p_price: product.p_price}); 
        }	
    }
    $scope.add_pay = function(product){ 
        if(product){ 
            $scope.cartpay.push({p_id: product.p_id,p_image:product.p_image,p_desc:product.p_desc, p_name: product.p_name, p_price: product.p_price}); 
        }	
    }
    $scope.remove_pay = function(cart){
        if(cart){
            $scope.cartpay.splice($scope.carts.indexOf(cart), 1); 
            $scope.total -= cart.p_price;
        }
    }

    $scope.total = 0;

    $scope.setTotals = function(cart){ 
        if(cart){
            $scope.total += cart.p_price; 
        }
    }

    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1); 
            $scope.total -= cart.p_price;
        }
    }
  });
