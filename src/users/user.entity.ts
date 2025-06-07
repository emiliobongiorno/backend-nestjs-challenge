import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: '1',
  })
  id: number;

  @Column({ unique: true })
  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
  })
  username: string;

  @Column()
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  password: string;

  @Column({ unique: true })
  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'List of Pokemon IDs owned by the user',
    example: [1, 4, 7],
    type: [Number],
  })
  @Column('int', { array: true, default: [] })
  pokemonIds: number[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
