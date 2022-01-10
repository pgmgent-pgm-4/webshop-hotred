const databaseConfig = {
  "development": {
		"dialect": "sqlite",
		"storage": "./data/webshopDb.sqlite3"
	},
	"test": {
		"dialect": "sqlite",
		"storage": ":memory"
	},
	"production": {
		"dialect": "sqlite",
		"storage": "./data/webshopDb.sqlite3"
	}
};

export default databaseConfig;