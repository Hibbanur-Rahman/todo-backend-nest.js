import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TasksEntity{
    @PrimaryGeneratedColumn('increment',{ type:'bigint'})
    id:number;

    @Column({name:'title', type:'varchar'})
    title:string;

    @Column({name:'is_completed', type:'boolean', default:false})
    isCompleted:boolean;

    @Column({name:'description', type:'text', nullable:true})
    description:string;

    @Column({name:'user_id', type:'bigint'})
    userId:number;

    @CreateDateColumn({name:'created_at', type:'timestamp with time zone'})
    createdAt:Date;

    @CreateDateColumn({name:'updated_at', type:'timestamp with time zone'})
    updatedAt:Date;
}