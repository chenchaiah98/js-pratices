// 1. Create a class called 'fan', assume your own data members, methods atleast 6 each and two private data members.

// 2. Create a child class 'tableFan' from above 'fan'

// 3. Create a child class 'ceilingFan' from 'fan'

// 4. Try to access private members from 'fan' in 'ceilingFan'. Is this allowed?


class fan{
// private
       #windingType = 'rounded';
    constructor(price=500,wings=3,currentUsedPerHour=3,model){
        this.price = price;
        this.wings = wings;
        this.currentUsedPerHour = currentUsedPerHour;
        this.model =model;
    }
    finalPrice(){
        this.price = this.wings*100 +1000;
        console.log(this.price);
    }
    printPrivatevalue(){
        console.log(this.#windingType);
    }
    
}
class tableFan extends fan{
    constructor(model){
        super();
        this.model=model;
    }
    finalPrice(){ 
        this.price =this.wings * 50 +500; 
        console.log(this.price);
    }
}
class ceilingFan extends fan{
    constructor(model){
        super();
        this.model=model;
    }

    
}

// const ceilingFan1 =new ceilingFan;
// ceilingFan1.finalPrice(); //1300

// console.log(ceilingFan1.printPrivatevalue()); //rounded
// const mainFan = new fan;
// mainFan.printPrivatevalue();


// const tableFan1=new tableFan;
// tableFan1.finalPrice(); //650



// Convert to proper JSON


// var t = "['performance','errors',['http',{addXRayTraceIdHeader: true}]]" 



var t = "['performance','errors',['http',{addXRayTraceIdHeader: true}]]";


let final = JSON.parse(t.replace(/',/g,'"'));
 console.log(final);