import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // whitelist: true -> DTO তে define না করা extra field silently strip করে দেয়
  // forbidNonWhitelisted -> extra field পাঠালে error থ্রো করে (security best practice)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  await app.listen(8080)
}
bootstrap()
