const isEmailValid = (email: string): boolean => {
	email = email.trim();
	const pattern: RegExp =
		/^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
	const rtnBln: boolean = pattern.test(email); // returns boolean
	return rtnBln;
};

export { isEmailValid };
