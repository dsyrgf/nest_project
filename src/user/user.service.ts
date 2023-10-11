import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/user/prisma.service';
import { error } from 'console';
import { promises } from 'dns';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  e;
  create(createUserDto: CreateUserDto) {
    this.prismaService.user
      .create({ data: createUserDto })
      .then((res) => {
        console.log('usuario cadastrado');
        return res;
      })
      .catch((error) => {
        throw Error(`Error ao cadastrar ousuario: ${error}`);
      });
  }

  async findAll() {
    const data: User[] = await this.prismaService.user.findMany();
    data.forEach((element) => {
      delete element.password;
    });

    return data;
  }

  async findOne(id: string) {
    try {
      const data: User = await this.prismaService.user.findUnique({
        where: { id },
      });

      delete data.password; // comando para remover a senha do objeto

      return data;
    } catch (error) {
      return 'id de usuario não existente!';
    }
  }

  async update(id: string, updateAuthDto: UpdateUserDto) {
    try {
      const data: User = await this.prismaService.user.update({
        where: { id },
        data: updateAuthDto,
      });
      delete data.password; // comando para remover a senha do objeto
      return data;
    } catch (error) {
      return 'id de usuario nao existenete';
    }
  }

  async remove(id: string) {
    try {
      await this.prismaService.user.delete({ where: { id } });
    } catch (error) {
      return 'id de ussuario nao existente';
    }
  }
}
