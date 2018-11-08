function ggen(sc, st, ar) {
	let x;
	x = {
		send: () => {
			res.status(sc).send({status:st, ar});
		}
	};
	return x;
}

module.exports = function statusGen(res, code, arg = null){

	var resObj;

	switch (code) {

		case 200:
			// resObj = {
			// 	send: () => {
			// 		res.status(200).send({status: "OK", arg});
			// 	}
			// };
			resObj = ggen(200, "OK", arg);
			return resObj;

		case 400:
			resObj = {
				send: () => {
					res.status(400).send({status: "ERROR 400 - Bad Input or No input Received", arg});
				}
			};
			return resObj;

		case 401:
			resObj = {
				send: () => {
					res.status(401).send({status: "ERROR 401 - User is Unauthorized to access", arg});
				}
			};
			return resObj;

		case 402:
			resObj = {
				send: () => {
					res.status(402).send({status: "ERROR 402 - Payment is Needed fot This Content", arg});
				}
			};
			return resObj;

		case 404:
			resObj = {
				send: () => {
					res.status(404).send({status: "ERROR 404 - Not Found", arg});
				}
			};
			return resObj;

		case 500:
			resObj = {
				send: () => {
					res.status(500).send({status: "ERROR 500 - Internal Server Error. Contact Server Provider with help@localhost", arg});
				}
			};
			return resObj;

	}
}
