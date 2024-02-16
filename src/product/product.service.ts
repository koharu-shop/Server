import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getReviews(productId: number) {
    const reviews = await this.prismaService.review.findMany({
      where: { productId },
    });

    const totalScore = reviews.reduce((acc, review) => acc + review.score, 0);
    const averageScore = reviews.length > 0 ? totalScore / reviews.length : 0;

    return { score: averageScore, reviewCount: reviews.length };
  }

  async getProductsByCategory(categoryId: number) {
    const products = await this.prismaService.product.findMany({
      where: {
        categoryId,
      },
      select: {
        id: true,
        name: true,
        img1: true,
        price: true,
        sale: true,
        type4: true,
      },
    });
    const newProducts = await Promise.all(
      products.map(async product => {
        const review = await this.getReviews(product.id);
        return { ...product, ...review };
      }),
    );

    return newProducts;
  }

  async getAllProducts() {
    const products = await this.prismaService.product.findMany();
    return products;
  }

  async getProduct(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    const reviews = await this.getReviews(id);

    const images = [product.img1, product.img2, product.img3, product.img4, product.img5, product.img6].filter(
      img => img,
    );

    // 이미지들을 images 배열로 교체
    const newProduct = {
      ...product,
      images: images,
      ...reviews,
    };

    // 기존의 이미지 속성들은 제거
    delete newProduct.img1;
    delete newProduct.img2;
    delete newProduct.img3;
    delete newProduct.img4;
    delete newProduct.img5;
    delete newProduct.img6;

    return newProduct;
  }

  async getProductOptions(id: number) {
    const options = await this.prismaService.productOption.findMany({
      where: {
        productId: id,
      },
    });
    return options;
  }
}
