import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResultType } from 'types/global';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}

  async create(createTestDto: Test): Promise<ResultType> {
    let data;
    data = await this.testRepository.save({
      uid: '1',
      ip: 'sss',
      startTime: new Date(),
      durationVisit: 2332442,
      pathname: '/test',
    });
    return {
      code: 0,
      success: true,
      message: '创建成功',
      data,
    };
  }

  findAll() {
    this.testRepository.find();
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
