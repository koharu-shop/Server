import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReviewDto } from './dto/review.dto';

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}

  async addReview(dto: CreateReviewDto) {
    try {
      const newReview = await this.prismaService.review.create({
        data: { ...dto },
      });

      return newReview;
    } catch (error) {
      console.log(error);

      throw new Error('An unexpected error occurred.');
    }
  }

  async getReview(id: number) {
    try {
      const review = await this.prismaService.review.findMany({
        where: {
          productId: id,
        },
      });

      return review;
    } catch (error) {
      console.log(error);

      throw new Error('An unexpected error occurred.');
    }
  }
}
