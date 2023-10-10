import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService as UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({summary: 'Criar novo usuario.'})
  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.userService.create(createAuthDto);
  }

  @Get()
  @ApiOperation({summary: 'pesquisa todos os usuarios.'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'pesquisar usuarios por id.'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'alterar dados do usuario.'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'deletar dados do usuario.'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}



