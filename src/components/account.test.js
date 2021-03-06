import Account from "./account";

test('test the class account class', () => {
	const account= new Account('Eva Account', 100);
	expect(account.accName).toBe('Eva Account');
	expect(account.getName()).toBe('Eva Account');
	expect(account.getID()).toBe(0);
	expect(account.balance).toBe(100);
	expect(account.accID).toBe(0);
	expect(account.getBalance()).toBe(100);
		account.deposit(10);
	expect(account.getBalance()).toBe(110);
		account.withdrawl(20);
	expect(account.getBalance()).toBe(90);
		account.deposit(1000);
	expect(account.getBalance(1000)).toBe(1090);
});

test('test for blank object', () => {
	const account = new Account ();
	expect(account.balance).toBe(0);
	expect(account.accName).toBe('no name')
	expect(account.accID).toBe(0);
		account.deposit(20);
	expect(account.balance).toBe(20);

});


