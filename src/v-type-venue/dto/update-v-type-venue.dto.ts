import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateVTypeVenueDto } from './create-v-type-venue.dto';

export class UpdateVTypeVenueDto extends PartialType(CreateVTypeVenueDto) {
  @ApiProperty({ example: 1, description: 'The ID of the venue type' })
  @IsInt()
  @IsOptional()
  venueTypeId?: number;

  @ApiProperty({ example: 1, description: 'The ID of the venue' })
  @IsInt()
  @IsOptional()
  venueId?: number;
}
