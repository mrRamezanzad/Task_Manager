import {
  Controller,
  Render,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Header,
  Put,
} from "@nestjs/common";
import { AppService } from "../services/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  create(@Body() { content }) {
    return this.appService.create(content);
  }

  @Get()
  @Render("index")
  read() {
    return this.appService.read();
  }

  @Put(":id")
  update(@Param() { id }, @Body() { content }) {
    return this.appService.update({ _id: id }, { content });
  }

  @Delete(":id")
  @Header("Status", "204")
  delete(@Param() { id }) {
    return this.appService.delete(id);
  }
}
