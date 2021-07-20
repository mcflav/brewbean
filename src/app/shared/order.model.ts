export class Order {
    public coffee: string;
    public creamer: string;
    public topping: string;
    public syrup: string;
    public sweetener: string;
    public price: number;
    public quantity: number;
    //public subTotal: number;
    public user: string;

    constructor(coffee: string, creamer: string, topping: string, syrup: string, sweetener: string, price: number, quantity: number, user: string){
        this.coffee = coffee;
        this.creamer = creamer;
        this.topping = topping;
        this.syrup = syrup;
        this.sweetener = sweetener;
        this.price = price;
        this.quantity = quantity;
        //this.subTotal = price * quantity;
        this.user = user;
    }
}