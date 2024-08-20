from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido= models.CharField(max_length=100)
    telefono= models.CharField(max_length=15)
    barrio= models.CharField(max_length=100)
    fecha= models.DateField()
    email=models.EmailField()

def __str__(self):
    return f"{self.nombre} {self.apellido} {self.telefono} {self.barrio} {self.fecha} {self.email}"

class Piletas(models.Model):
    familia= models.CharField(max_length=50)
    modelo= models.CharField(max_length=50)
    medida= models.CharField(max_length=50)
    precio= models.DecimalField(max_digits=15, decimal_places=2)

def __str_(self):
    return f"{self.modelo} {self.familia} {self.medida} {self.precio}"

class Vendedor(models.Model):
    nombre = models.CharField(max_length=50)
    contrasenia = models.CharField(max_length=50)

    def __str__(self):
        return ({self.nombre})