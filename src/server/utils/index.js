const convertArrayToPagedObject = (arr, itemsPerPage, currentPage, amount) => ({
	pageing: {
		itemsPerPage: parseInt(itemsPerPage, 10) || 10,
		currentPage: parseInt(currentPage, 10) || 1,
		totalPages: Math.ceil(amount / itemsPerPage),
		totalItems: amount,
	},
	results: arr.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage),
});

const handleHTTPError = (error, next) => next(error);

const HTTPError = (message, statusCode) => {
	const instance = new Error(message);
	instance.statusCode = statusCode;

	return instance;
};

/*
* Generate Integer between min and max
*/
const generateValueBetweenMinAndMax = (min, max) => {
  return min + Math.round(Math.random()*(max - min));
}

export { convertArrayToPagedObject, generateValueBetweenMinAndMax, handleHTTPError, HTTPError };
