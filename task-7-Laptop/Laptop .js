class Laptop {
    #companyDUNS;
    constructor(brand,model,price,company,companyDUNS) {
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.company=company;
        this.#companyDUNS = companyDUNS;
    }
    
    private(){
        console.log(`private value : ${this.#companyDUNS}`);
    }

    applyDiscount(){
        let discount = (this.price/100);
        return (`Price : ${this.price}  Laptop After Discount Price  : ${this.price - discount * 1}`);
    }
}

class BudgetLaptop extends Laptop{
    constructor(brand,model,price,company,maximumRAM,graphicsCard,harDiskCapacity){
        super(brand,model,price,company);
        this.maximumRAM = maximumRAM;
        this.graphicsCard = graphicsCard;
        this.harDiskCapacity = harDiskCapacity;
    }
    applyDiscount(){
        let discount = (this.price/100);
        return (`Price : ${this.price}  BudgetLaptop After Discount Price  : ${this.price - discount * 2}`);
    }
}

class PremiumLaptop  extends Laptop{
    constructor(brand,model,price,company,maximumRAM,graphicsCard,harDiskCapacity){
        super(brand,model,price,company);
        this.maximumRAM = maximumRAM;
        this.graphicsCard = graphicsCard;
        this.harDiskCapacity = harDiskCapacity;
    }
    applyDiscount(){
        let discount = (this.price/100);
        return (`Price : ${this.price}  PremiumLaptop After Discount Price : ${this.price - discount * 5}`);
    }
}

const PremiumLaptop1=new PremiumLaptop("hp","ebs5",30000,"abc","16gp","6gb","1tb");
console.log(PremiumLaptop1.applyDiscount());


const BudgetLaptop1=new BudgetLaptop("Dell","ebs5",20000,"sr group","16gp","6gb","1tb");
console.log(BudgetLaptop1.applyDiscount());

const mylaoptop =new Laptop("Dell","ebs5",15000,"sr group","1234gdu76");
console.log(mylaoptop.applyDiscount());


mylaoptop.private();