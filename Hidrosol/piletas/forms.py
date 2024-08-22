from .models import Cliente, Piletas, Vendedor
from django import forms

class ClienteForms(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre','apellido','telefono','barrio','fecha', 'email']

class PiletasForm(forms.ModelForm):
    class Meta:
        model = Piletas
        fields = ['familia','modelo','medida','precio']


class VendedorForm(forms.ModelForm):
    class Meta:
        model = Vendedor
        fields = ['nombre', 'contrasenia']