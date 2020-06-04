import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class ProductInput {
  @Field()
  name!: string;

  @Field(() => Int)
  quantity!: number;
}

@InputType()
export class ProductUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => Int, {nullable: true})
  quantity?: number;
}