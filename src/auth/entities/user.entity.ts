import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn('increment',{ type:'bigint'})
    id:number;

    @Column({name:'username', type:'varchar', unique:true})
    username:string;

    @Column({name:'email', type:'varchar', unique:true})
    email:string;

    @Column({name:'password', type:'varchar'})
    password:string;

    @CreateDateColumn({name:'created_at', type:'timestamp with time zone'})
    createdAt:Date;
}

