import { Injectable } from '@nestjs/common';
import { Feed, FeedCreateInput, FeedOrderByInput, FeedUpdateInput, FeedWhereInput, FeedWhereUniqueInput } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeedService {
  constructor(private prismaService: PrismaService) {}

  async feed(userWhereUniqueInput: FeedWhereUniqueInput): Promise<Feed | null> {
    return this.prismaService.feed.findOne({
      where: userWhereUniqueInput,
    });
  }

  async feeds(params: {
    skip?: number;
    take?: number;
    cursor?: FeedWhereUniqueInput;
    where?: FeedWhereInput;
    orderBy?: FeedOrderByInput;
  }): Promise<Feed[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.feed.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFeed(data: FeedCreateInput): Promise<Feed> {
    return this.prismaService.feed.create({
      data,
    });
  }

  async updateFeed(params: {
    where: FeedWhereUniqueInput;
    data: FeedUpdateInput;
  }): Promise<Feed> {
    const { where, data } = params;
    return this.prismaService.feed.update({
      data,
      where,
    });
  }

  async deleteFeed(where: FeedWhereUniqueInput): Promise<Feed> {
    return this.prismaService.feed.delete({
      where,
    });
  }
}