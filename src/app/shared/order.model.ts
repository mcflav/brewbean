export class Order {
    public email: string;
    public coffee: string;
    public creamer: string;
    public topping: string;
    public syrup: string;
    public sweetener: string;
    public price: number;
    public quantity: number;
    public subTotal: number;

    constructor(email: string, coffee: string, creamer: string, topping: string, syrup: string, sweetener: string, price: number, quantity: number){
        this.email = email;
        this.coffee = coffee;
        this.creamer = creamer;
        this.topping = topping;
        this.syrup = syrup;
        this.sweetener = sweetener;
        this.price = price;
        this.quantity = quantity;
        this.subTotal = price * quantity;
    }
}