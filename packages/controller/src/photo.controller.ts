import { Controller, Get } from '@nestjs/common';
import { PhotoService } from 'service';
import { Photo } from 'entity';

@Controller('/data/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

// @Get('/findAll')
// findAll(): Promise<Photo[]> {
//     return this.photoService.findAll();
//   }
}
