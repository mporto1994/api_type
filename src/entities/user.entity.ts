import {Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import {v4 as uuid} from "uuid"
import { Buy } from "./buy.entity";
import { Cart } from "./cart.entity";

@Entity()

export class User {
    @PrimaryColumn("uuid")
    readonly id:string;

    @Column()
        name:string;
    
    @Column()
        email:string;

    @Column()
        password:string

    @OneToMany((type)=>Buy, buy => buy.user,{
        eager:true
    })
    buys: Buy[]
    
    @OneToOne((type)=>Cart, {
        eager:true,
    })
    @JoinColumn()
    cart:Cart;         

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}