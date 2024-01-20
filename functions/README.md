
#  GigStack: Technical Challenge for Full-Stack Developers

#### Requirements  
* Node 18
* Firebase

#### How to run the project
1. Complete the ```.env``` file, I have provided a .env.example file to guide you.

2. Install dependencies
	```
	npm install
	```
3. Run Firebase Emulator Suite and wait
	```
	npm run serve-all
	```
	
#### Server Details

If you want to see all the payments:
- _GET:_ http://127.0.0.1:4000/gigstack-te/us-central1/retrievePayments

  - Output

    ```json
    [
		{
			"line_items": [
				{
					"name": "Elegant Granite Gloves",
					"description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
					.
					.
					.
				},
				.
				.
				.
			],
		},
		"payment_method": "card",
		"status": "paid",
		.
		.
		.
		},
		.
		.
		.
	]
    ```
If you want to see all the invoices of a specific ecommerce and currency type:
- _GET:_ http://127.0.0.1:4000/gigstack-te/us-central1/retrieveGlobalInvoices?id=<ecommerce_id>&currency=<currency(MXN or USD)>

  - Output

    ```json
    {
		"id": "team_cjf5GBxz60sqHfs",
		"collections": [
			{
				"id": "MXN",
				"invoices": [
					{
						"date": "2024-01-20T10:13:14.434Z",
						"fromApi": true,
						"livemode": false,
						.
						.
						.
					}
					"exchange": 1,
					"items": [
						{
							"product": {
								"unit_name": "Pieza",
								"product_key": "01010101",
								"price": 574,
								"unit_key": "H87",
								.
								.
								.
							},
							"quantity": 5,
							"discount": 0
						},
					]
				]
			}
		]
	}
    ```


Made with :purple_heart: by MistyBlunch