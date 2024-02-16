import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}

  async addReview(dto: CreateReviewDto, userId: number) {
    const review = await this.prismaService.review.create({
      data: { ...dto, memberId: userId },
    });

    return review;
  }

  async getReview(id: number) {
    const review = await this.prismaService.review.findMany({
      where: {
        productId: id,
      },
    });

    return review;
  }
}
