import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryColumn()
    id: string;

    @Column({ length: 64 })
    name: string;

    @Column('text')
    description: string;

    @Column()
    filename: string;

    @Column('int')
    views: number;

    @Column()
    isPublished: boolean;
}