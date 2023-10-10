import { Module } from '@nestjs/common';
import { PrismaService } from '../user/prisma.service';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}