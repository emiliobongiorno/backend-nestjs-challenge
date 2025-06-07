import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
    required: false,
  })
  username?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    minLength: 6,
    required: false,
  })
  password?: string;

  @ApiPropertyOptional({
    description: 'List of Pokemon IDs owned by the user',
    example: [1, 4, 7],
    type: [Number],
  })
  pokemonIds?: number[];
}
