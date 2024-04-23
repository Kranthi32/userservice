import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 
 
@Entity({name: 'users'})
export class User {
 @PrimaryGeneratedColumn()
 id: number;
 
 @Column({type: 'varchar'})
 name: string;
 
 @Column({type: 'varchar'})
 email:string;
 
 @Column({type: 'varchar'})
 password: string;
 
 @Column({type: 'bigint'})
 phone:number;
 
 
}