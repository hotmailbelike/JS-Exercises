/* JavaScript code here */
console.log("Police");

/* JavaScript code here */
console.log("Police");

var arr = [2,4,6,8];

var sum = (a) => {
    var x=0;
    for(var i=0;i<a.length;i++){
        x+=a[i];
    }
    return (mul)=>{return x*mul;};
};

console.log(sum(arr)(5));

function check_mail(email){
    var regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return regex.test(email);
}

console.log(check_mail("asdw@.com"));

// Task 4:
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        update_status: function(read){
            this.readingStatus = read;
        }
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        update_status: function(read){
            this.readingStatus = read;
        }
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        update_status: function(read){
            this.readingStatus = read;
        }
    }];

    function get_status(obj,index){
        return obj[index].readingStatus;
    }

    library[1].update_status(false);
    console.log(get_status(library,1));

    //Task 5:

    var cart = [ 
        {
            name: 'Shoes',
            price: 560,
            quantity: 4
        },
        {
            name: 'Regular Tees',
            price: 455.50,
            quantity: 6
        },
        {
            name: 'Socks',
            price: 65.99,
            quantity: 2
        }];

    function add_to_cart(new_name,new_price,new_quantity){
        cart.push({name: new_name,price: new_price, quantity: new_quantity});
    }

    function add_to_cart2(new_name,new_price,new_quantity){
        var temp ={};
        temp.name = new_name;
        temp.price = new_price;
        temp.quantity = new_quantity;
    }

    function add_to_cart3(newItem){
        cart.push(newItem);
    }

    add_to_cart('Police',65,4);

    console.log(cart);


    function sortByKey(key){
        cart.sort(function(a, b) {
           return a[key] - b[key];
        });   
        /*
        cart.sort((a, b) => a[price] - b[price]);
        */
    }

    //[] when passing a value

    sortByKey('quantity');

    console.log(cart);
