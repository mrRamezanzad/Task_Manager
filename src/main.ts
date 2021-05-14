import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { connect } from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(80, () => {
    console.log('\n[+] server started at: http://localhost:80');
  });

  connect(
    'mongodb://localhost:27017/task-manager',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('[+] connected to database');
    },
  );
}
bootstrap();
