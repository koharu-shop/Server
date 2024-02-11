import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CreateReviewDto } from './dto/review.dto';
import { ReviewService } from './review.service';
import { Body, Controller, Get, Logger, Param, Post, Request, UseGuards } from '@nestjs/common';

@Controller('review')
export class ReviewController {
  private logger = new Logger('ReviewController');

  constructor(private reviewService: ReviewService) {}

  @UseGuards(JwtGuard)
  @Post()
  addReview(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    console.log(req);
    this.logger.verbose('리뷰 생성');
    return this.reviewService.addReview(createReviewDto);
  }

  @Get(':id')
  getReview(@Param('id') id: number) {
    this.logger.verbose('리뷰 조회');
    return this.reviewService.getReview(id);
  }
}
