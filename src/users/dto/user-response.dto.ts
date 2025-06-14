import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: '1',
  })
  id: number;

  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
  })
  username: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  email: string;
}
