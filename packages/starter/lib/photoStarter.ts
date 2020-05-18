import { Module } from '@nestjs/common';
import { PhotoController } from 'controller';
import { PhotoService } from 'service';

@Module({
  imports: [],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}