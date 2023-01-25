import { Controller } from '@nestjs/common';
import {RolesService} from "./roles.service";
import {Post, Body, Get, Param} from "@nestjs/common";
import {CreateRoleDto} from "./dto/create-role.dto";

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get("/:value")
  getByValue(@Param('value') value: string) {
    console.log('hi');
    console.log(value);
    return this.roleService.getRoleByValue(value);
  }
}
