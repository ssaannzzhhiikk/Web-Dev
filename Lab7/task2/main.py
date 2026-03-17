from models import Vehicle, Car, Motorcycle

car = Car("Toyota", "Corolla", 2018, 470)
bike = Motorcycle("Harley", "Sportster", 2021)
bike2 = Motorcycle("Ural", "GearUp", 2015, True)

vehicles = [car, bike, bike2]
distance = 100

for v in vehicles:
    print(v.info())
    print(v.start())

    cost = v.calculate_cost(distance)
    print(f"Cost for {distance} km: {cost}")

    print(v.stop())
    print("------")
