import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async getProduct(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: id },
    });

    const images = [product.img1, product.img2, product.img3, product.img4, product.img5, product.img6].filter(
      img => img,
    );

    // 이미지들을 images 배열로 교체
    const productWithImages = {
      ...product,
      images: images,
    };

    // 기존의 이미지 속성들은 제거
    delete productWithImages.img1;
    delete productWithImages.img2;
    delete productWithImages.img3;
    delete productWithImages.img4;
    delete productWithImages.img5;
    delete productWithImages.img6;

    return productWithImages;
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
