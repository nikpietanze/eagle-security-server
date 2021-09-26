import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ItemsModule } from './items/items.module'
import { EmailsModule } from './emails/emails.module'
import config from './config'

@Module({
	imports: [
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		MongooseModule.forRoot(config.MONGO_URI),
		ItemsModule,
		EmailsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('cats')
	}
}
