import { NotFoundException } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { ProductsArgs } from './products.dto'
import { Product } from './products.entity'
import { ProductsService } from './products.service'

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly recipesService: ProductsService) {}

  @Query((returns) => Product)
  async product(@Args('id') id: string): Promise<Product> {
    const recipe = await this.recipesService.findOneById(id)
    if (!recipe) {
      throw new NotFoundException(id)
    }
    return recipe
  }

  @Query((returns) => [Product])
  products(@Args() recipesArgs: ProductsArgs): Promise<Product[]> {
    return this.recipesService.findAll(recipesArgs)
  }
}
