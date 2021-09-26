import { HttpCode, Injectable } from '@nestjs/common'
import Email from './interfaces/email.interface'
import config from '../config'
import { contactEmail } from '../common/templates/emails/contact'
import { quoteEmail } from 'src/common/templates/emails/quote'
import { serviceRequestEmail } from 'src/common/templates/emails/serviceRequest'
import { codeUpdatesEmail } from 'src/common/templates/emails/codeUpdates'
import { ClientResponse } from '@sendgrid/client/src/response'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sgMail = require('@sendgrid/mail')

@Injectable()
export class EmailsService {
	@HttpCode(202)
	async send(email: Email): Promise<ClientResponse> {
		sgMail.setApiKey(config.SENDGRID_API_KEY)
		const msg = {
			to: config.TO_EMAIL,
			from: config.FROM_EMAIL,
			subject: '',
			text: email.message,
			html: '',
		}

		if (email.type === 'contact') {
			msg.subject = 'New Contact Request'
			msg.html = contactEmail({
				firstName: email.firstName,
				lastName: email.lastName,
				phone: email.phone,
				email: email.email,
				message: email.message,
				contactMethod: email.contactMethod,
			})
		}

		if (email.type === 'quote') {
			msg.subject = 'New Quote Request'
			msg.html = quoteEmail({
				firstName: email.firstName,
				lastName: email.lastName,
				phone: email.phone,
				email: email.email,
				productType: email.productType,
				message: email.message,
				contactMethod: email.contactMethod,
			})
		}

		if (email.type === 'service') {
			msg.subject = 'New Service Request'
			msg.html = serviceRequestEmail({
				firstName: email.firstName,
				lastName: email.lastName,
				address: email.address,
				phone: email.phone,
				email: email.email,
				serviceType: email.serviceType,
				message: email.message,
				contactMethod: email.contactMethod,
			})
		}

		if (email.type === 'code-updates') {
			msg.subject = 'New Code Updates Request'
			msg.html = codeUpdatesEmail({
				firstName: email.firstName,
				lastName: email.lastName,
				phone: email.phone,
				email: email.email,
				message: email.message,
				contactMethod: email.contactMethod,
			})
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [response, error] = await sgMail.send(msg)

		if (error) {
			console.error(error)
		}

		return response
	}
}
