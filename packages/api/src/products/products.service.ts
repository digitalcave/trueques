import { Injectable } from '@nestjs/common'
import { Product } from './products.entity'
import { ProductsArgs } from './products.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async findOneById(id: string): Promise<Product | undefined> {
    return await this.productsRepository.findOne(id)
  }

  async findAll(productArgs: ProductsArgs): Promise<Product[]> {
    return await this.productsRepository.find()
  }
}
