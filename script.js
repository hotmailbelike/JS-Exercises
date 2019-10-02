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