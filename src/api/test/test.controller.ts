import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseFilters, UseInterceptors, UsePipes } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';
import { AllExceptionsFilter } from '../../filter/all-exceptions.filter';
import { TransformInterceptor } from '../../interceptor/transform.interceptor';
import { MyValidationPipe } from '../../pipe/validation.pipe';
import { RbacInterceptor } from '../../interceptor/rbac.interceptor';

@Controller('/api/test')
@UseFilters(new AllExceptionsFilter())
@UseInterceptors(new TransformInterceptor())
export class TestController {
  constructor(private readonly testService: TestService) {}

  @UseInterceptors(new RbacInterceptor(['admin']))
  @UsePipes(new MyValidationPipe())
  @Post()
  create(@Body() createTestDto: Test) {
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
