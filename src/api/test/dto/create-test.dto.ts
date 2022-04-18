import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateTestDto {
  @IsEnum(['admin', 'blog'])
  @IsNotEmpty({ message: 'type不能为空' })
  readonly type: 'admin' | 'blog';

  @IsString({ message: 'uid必须是 String 类型' })
  @IsNotEmpty({ message: 'uid不能为空' })
  readonly uid: string;

  @IsString({ message: 'ip必须是 String 类型' })
  @IsNotEmpty({ message: 'ip不能为空' })
  readonly ip: string;

  @IsString({ message: '地址必须是 String 类型' })
  @IsNotEmpty({ message: '地址不能为空' })
  readonly address: string;

  @IsDate({ message: '开始时间必须是 Date 类型' })
  @IsNotEmpty({ message: '开始时间不能为空' })
  readonly startTime: Date;

  @IsDate({ message: '结束时间必须是Date类型' })
  @IsNotEmpty({ message: '结束时间不能为空' })
  readonly endTime: Date;

  @IsNumber({}, { message: '访问时间必须是 Number 类型的时间戳' })
  @IsNotEmpty({ message: '访问时间不能为空' })
  readonly durationVisit: number;
}
