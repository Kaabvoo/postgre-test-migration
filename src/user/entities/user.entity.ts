import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: "base" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    firstName: string;

    @Column({ nullable: false })
    lastName: string;

    @Column({ nullable: true })
    email: string;
}
