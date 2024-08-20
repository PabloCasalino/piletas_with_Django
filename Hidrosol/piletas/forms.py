from django import forms
from .models import Cliente, Piletas


class ClienteForms(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre','apellido','telefono','barrio','fecha', 'email']

class PiletasForm(forms.ModelForm):
    class Meta:
        model = Piletas
        fields = ['familia','modelo','medidas','precio']


from django import forms
from .models import Vendedor

class VendedorForm(forms.ModelForm):
    class Meta:
        model = Vendedor
        fields = ['nombre', 'contraseña']