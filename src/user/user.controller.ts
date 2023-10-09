import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './user.service';
import { CreateAuthDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary: 'Criar novo usuario.'})
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  @ApiOperation({summary: 'pesquisa todos os usuarios.'})
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'pesquisar usuarios por id.'})
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'alterar dados do usuario.'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'deletar dados do usuario.'})
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}



