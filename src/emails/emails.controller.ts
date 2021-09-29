import { Body, Controller, Post } from '@nestjs/common';
import { EmailsService } from './emails.service';
import Email from './interfaces/email.interface';
import { ClientResponse } from '@sendgrid/client/src/response';

@Controller('emails')
export class EmailsController {
	constructor(private readonly emailsService: EmailsService) {}

	@Post()
	async create(@Body() email: Email): Promise<ClientResponse> {
		return this.emailsService.send(email);
	}
}
