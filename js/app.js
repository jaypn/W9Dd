// function 1


var numberone =10, numbertwo =20;


  
function sum(array) {
    var sum=0;
    for (var i=0; i<array.length; i++){
        sum=numberone+numbertwo;
    }
    var result = sum/5;
    return result;
    
}



//function2 

var stringlength = antananarivo, hello

function condition (stringlength) {
   if(stringlength>=10){
       return stringlength
   }
    else {
        return false

    }
    console.log (stringlength);

    
}


//function3 


var users = [
    {
        name: "phoebe",
        mark: 10,
    },
    {
        name: "pappy",
        mark:20,
    }
];

function startWithString(array,ph){
    var list =[];
    for(var i=0; i<array.length; i++){
        if(array[i].name.startwIth(ph))
        list.push (array[i]);

    }
}


