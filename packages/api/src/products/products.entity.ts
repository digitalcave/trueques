import { Field, ID, ObjectType } from 'type-graphql'
import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Product {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column()
  title: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string

  @Field()
  @CreateDateColumn()
  creationDate: Date
}
