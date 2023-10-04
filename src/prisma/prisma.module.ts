import { Module } from '@nestjs/common';
import { PrismaService } from '../auth/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}