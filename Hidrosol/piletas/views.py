from django.shortcuts import render, redirect, get_object_or_404
from .models import Cliente, Piletas
from .forms import ClienteForm, PiletasForm

# Create your views here.
def formulario(request):
    return render(request, 'formulario.html')

def presupuesto(request):
    return render(request, 'presupuesto.html')

# CRUD para Cliente

def cliente_list(request):
    clientes = Cliente.objects.all()
    return render(request, 'piletas/cliente_list.html', {'clientes': clientes})


# def cliente_create(request):
#     if request.method == 'POST':
#         form = ClienteForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('cliente_list')
#     else:
#         form =ClienteForm()
#         return render(request, 'piletas/cliente/form.html', {'form': form})
    

# def cliente_update(request, pk):
#     cliente = get_object_or_404(Cliente, pk=pk)
#     if request.method == 'POST':
#         form = ClienteForm(request.POST, instance=cliente)
#         if form.is_valid():
#             form.save()
#             return redirect('cliente_list')
#     else:
#         form = ClienteForm(instance=cliente)
#     return render(request, 'formulario.html', {'form': form})

def cliente_create(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('cliente_list')
    else:
        form = ClienteForm()
    return render(request, 'piletas/cliente_form.html', {'form': form})

def cliente_update(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == 'POST':
        form = ClienteForm(request.POST, instance=cliente)
        if form.is_valid():
            form.save()
            return redirect('cliente_list')
    else:
        form = ClienteForm(instance=cliente)
    return render(request, 'piletas/cliente_form.html', {'form': form})

def cliente_delete(request, pk):
    cliente = get_object_or_404(Cliente, pk=pk)
    if request.method == 'POST':
        cliente.delete()
        return redirect('cliente_list')
    return render(request, 'piletas/cliente_confirm_delete.html', {'cliente': cliente})


# CRUD para Piletas

def pileta_list(request):
    piletas = Piletas.objects.all()
    return render(request, 'piletas/pileta_list.html', {'piletas': piletas})


# def pileta_create(request):
#     if request.method == 'POST':
#         form = PiletasForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('pileta_list')
#     else:
#         form = PiletasForm()
#     return render(request, 'formulario.html', {'form': form})

# def pileta_update(request, pk):
#     pileta = get_object_or_404(Piletas, pk=pk)
#     if request.method == 'POST':
#         form = PiletasForm(request.POST, instance=pileta)
#         if form.is_valid():
#             form.save()
#             return redirect('pileta_list')
#     else:
#         form = PiletasForm(instance=pileta)
#     return render(request, 'formulario.html', {'form': form})

def pileta_create(request):
    if request.method == 'POST':
        form = PiletasForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pileta_list')
    else:
        form = PiletasForm()
    return render(request, 'piletas/pileta_form.html', {'form': form})

def pileta_update(request, pk):
    pileta = get_object_or_404(Piletas, pk=pk)
    if request.method == 'POST':
        form = PiletasForm(request.POST, instance=pileta)
        if form.is_valid():
            form.save()
            return redirect('pileta_list')
    else:
        form = PiletasForm(instance=pileta)
    return render(request, 'piletas/pileta_form.html', {'form': form})

def pileta_delete(request, pk):
    pileta = get_object_or_404(Piletas, pk=pk)
    if request.method == 'POST':
        pileta.delete()
        return redirect('pileta_list')
    return render(request, 'piletas/pileta_confirm_delete.html', {'pileta': pileta})




# RUTAS para VENDEDOR

from django.shortcuts import render, get_object_or_404, redirect
from .models import Vendedor
from .forms import VendedorForm

def vendedor_list(request):
    vendedores = Vendedor.objects.all()
    return render(request, 'myapp/vendedor_list.html', {'vendedores': vendedores})

def vendedor_create(request):
    if request.method == 'POST':
        form = VendedorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('vendedor_list')
    else:
        form = VendedorForm()
    return render(request, 'myapp/formulario.html', {'form': form})

def vendedor_update(request, pk):
    vendedor = get_object_or_404(Vendedor, pk=pk)
    if request.method == 'POST':
        form = VendedorForm(request.POST, instance=vendedor)
        if form.is_valid():
            form.save()
            return redirect('vendedor_list')
    else:
        form = VendedorForm(instance=vendedor)
    return render(request, 'myapp/formulario.html', {'form': form})

def vendedor_delete(request, pk):
    vendedor = get_object_or_404(Vendedor, pk=pk)
    if request.method == 'POST':
        vendedor.delete()
        return redirect('vendedor_list')
    return render(request, 'myapp/vendedor_confirm_delete.html', {'vendedor': vendedor})