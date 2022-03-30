class User:
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
    	# we assign them accordingly
        self.name = name
        self.email = email_address
        self.account_balance = 100
    def make_deposit(self, amount):
            self.account_balance += amount;
            return self
    def make_with(self, amount):
            self.account_balance -= amount;
            return self

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
guido.make_deposit(100).make_with(1)
print(guido.name)	# output: Guido van Rossum
print(monty.name)	# output: Monty Python

print(guido.account_balance)




