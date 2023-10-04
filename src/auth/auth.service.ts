import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/auth/prisma.service';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService){}
  e
  create(createAuthDto: CreateAuthDto) {
    this.prismaService.auth.create({data: createAuthDto}).then((res)=>{
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

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
