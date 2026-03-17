class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.running = False

    def start(self):
        self.running = True
        return f"{self} started."

    def stop(self):
        self.running = False
        return f"{self} stopped."

    def info(self):
        return f"{self} | Running: {self.running}"

    def calculate_cost(self, distance):  
        return distance * 1.0

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    


class Car(Vehicle):
    def __init__(self, make, model, year, trunk_size):
        super().__init__(make, model, year)
        self.trunk_size = trunk_size

    def open_trunk(self):
        return f"Trunk of {self} opened ({self.trunk_size} L)."

    def start(self):
        msg = super().start()
        return msg + " Car ready to go."

    def calculate_cost(self, distance):  
        return distance * 1.2
    

class Motorcycle(Vehicle):
    def __init__(self, make, model, year, has_sidecar=False):
        super().__init__(make, model, year)
        self.has_sidecar = has_sidecar

    def pop_wheelie(self):
        if self.has_sidecar:
            return f"{self} can't do a wheelie."
        return f"{self} does a wheelie!"

    def __str__(self):
        base = super().__str__()
        if self.has_sidecar:
            return base + " (with sidecar)"
        return base

    def start(self):
        if self.has_sidecar:
            self.running = True
            return f"{self} starts slowly."
        return super().start()

    def calculate_cost(self, distance):  
        if self.has_sidecar:
            return distance * 1.0
        return distance * 0.6