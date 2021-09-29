export default interface Email {
	to: string;
	type: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address?: string;
	productType?: string;
	serviceType?: string;
	message: string;
	contactMethod: string;
}
