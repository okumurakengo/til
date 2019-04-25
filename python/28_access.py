class User:
    def __init__(self, name):
        self.__name = name
    def say_hi(self):
        print("hi {0}".format(self.__name))

tom = User("tom")
bob = User("bob")

tom.say_hi()
print(tom._User__name)
bob.say_hi()
