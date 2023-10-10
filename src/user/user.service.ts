import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/user/prisma.service';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService){}
  e
  create(createUserDto: CreateUserDto) {
    this.prismaService.user.create({data: createUserDto}).then((res)=>{
     console.log("usuario cadastrado")
      return res
    }).catch((error)=>{
      throw Error(`Error ao cadastrar ousuario: ${error}`)
    })
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
