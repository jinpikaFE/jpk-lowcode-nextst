import { IsEnum, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEnum(['admin', 'blog'])
  @IsNotEmpty({ message: 'ty不能为空' })
  @Column()
  uid: string;

  @Column()
  ip: string;

  @Column()
  startTime: Date;

  @Column()
  durationVisit: number;

  @Column()
  pathname: string;
}
