function combineUn(a:number | string, b:number | string){
    
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a+b;
    }
    else{
        return a.toString() + b.toString();
    }
}

console.log(combineUn(10, 20));
console.log(combineUn('Mazhar', 'khan'));