import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
	openapi: '3.0.0',
	info: {
		title: 'Webshop API for Associate Degree in Computer Programming',
		version: '1.0.0',
	},
	servers: [
		{
			url: '/',
			description: 'Development server',
		},
	],
	tags: [
		{
			name: "product"
		},
		{
			name: "order"
		},
		{
			name: "productReview"
		}
	]
};

const swaggerOptions = {
	swaggerDefinition,
	apis: ['./api/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
