import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app.module';
import { connect } from 'mongoose';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(80, () => { console.log('\n[+] server started at: http://localhost:80'); });

  connect('mongodb://localhost:27017/task-manager',
    { useNewUrlParser: true, useUnifiedTopology: true, },
    () => { console.log('[+] connected to database'); }
  );

}

bootstrap();
