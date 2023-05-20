class number:
    __BaseNume = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    def __init__(self, numero, base = 10): #constructor
        #if str(numero).isdigit():
        self.valor = str(numero)
        self.base = base
        
    def getBase10(self):
        #print(self.valor, self.base)
        if self.base == 10:
            return int(self.valor)
        else:
            long = len(self.valor) -1
            suma = 0
            for x in self.valor:
                #print(x, self.__BaseNume.index(x), long)
                suma +=  self.__BaseNume.index(x) * (self.base**long)
                long = long -1   
            return suma

    def getBase(self,tobase):
        numb10 = self.getBase10()
        numsal = ""
        #print(numb10)
        while numb10 > 1:
            a = numb10 % tobase
            numb10 = numb10 // tobase
            numsal = self.__BaseNume[a] + numsal
        if numb10 != 0:
            numsal = self.__BaseNume[numb10] + numsal
        return numsal
    #Magic Methods
    def __add__(self, otro):
        num = self.getBase10() + otro.getBase10()
        return number(num)
    
    def __sub__(self, otro):
        num = self.getBase10() - otro.getBase10()
        return number(num)
    
    def __mul__(self, otro):
        num = self.getBase10() * otro.getBase10()
        return number(num)
    
num1 = number(10, 8)
print(num1.getBase10())
print(num1.getBase(2))
print()
num2 = number(11101010, 2)
print(num2.getBase10())
print(num2.getBase(2))
print(num2.getBase(8))
print(num2.getBase(16))
print()
num3 = number(2640)
print(num3.getBase10())
print(num3.getBase(2))
print(num3.getBase(8))
print(num3.getBase(16))
print(num3.getBase(40))
'''
num3 = num2 + num1
print(num3.getBase10())
num4 = num2 - num1
print(num4.getBase10())
num5 = num2 * num1
print(num5.getBase10())
'''