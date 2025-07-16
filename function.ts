function dowork(x:number ,Y:number ) : number{
    return x+Y;
}

let res = dowork(41 ,40);

console.log(res);


let sum = function(x:number , y:number) :number{
    return x+y;
}

console.log(sum(10,10));


function full(x:string , y? : string){
    return y +" "+ x;
}

console.log(full("prajwal","sinkar"));
console.log(full("prajwal"));

function wish(name:string , msg : string="hi"):string{
    return name + msg;
}

console.log(full("prajwal","hellow"));
console.log(full("prawjal"));

function greet(msg:string, ...names:string[]) {
    console.log(msg + "--" + names.join(","));
}

greet("good Afternoon","prajwal","ram","raj","ankit");
