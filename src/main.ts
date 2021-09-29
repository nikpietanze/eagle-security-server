import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import config from './config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: config.CLIENT_HOSTNAME,
	});
	app.use(helmet());
	// app.use(csurf())
	await app.listen(5000);
}
bootstrap();
