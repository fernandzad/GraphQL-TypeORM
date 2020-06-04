import { Query, Resolver, Mutation, Arg, Int } from 'type-graphql';
import { Product } from '../../orm/entities/Product';
import { ProductInput, ProductUpdateInput } from '../../orm/inputs/ProductInput';

@Resolver()
export class ProductResolver {
  
  @Query(() => [Product])
  products(){
    return Product.find();
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg('variables', () => ProductInput) variables: ProductInput,
  ){
    const newProduct = Product.create(variables);
    console.log(newProduct);
    return await newProduct.save();
  }

  @Mutation(() => Boolean)
  async updateProduct(
    @Arg('id', () => Int) id: number,
    @Arg('fields', () => ProductUpdateInput) fields: ProductUpdateInput,
  ){
    await Product.update({ id }, fields);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteProduct(
    @Arg('id', () => Int) id: number,
  ) {
    await Product.delete(id);
    return true;
  }

}