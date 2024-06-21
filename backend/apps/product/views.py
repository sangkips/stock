from rest_framework import generics
from apps.product.models import (
    Category,
    Customer,
    Expense,
    Supplier,
)
from apps.product.serializers import (
    CategorySerializer,
    CustomerSerializer,
    ExpenseSerializer,
    SupplierSerializer
)

class CustomerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    
    def get_serializer(self, *args, **kwargs):
        return CustomerSerializer(*args, **kwargs)

class CustomerRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    
    def get_serializer(self, *args, **kwargs):
        return CustomerSerializer(*args, **kwargs)


class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def get_serializer(self, *args, **kwargs):
        return CategorySerializer(*args, **kwargs)

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def get_serializer(self, *args, **kwargs):
        return CategorySerializer(*args, **kwargs)
    
class SupplierListCreateAPIView(generics.ListCreateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    
    def get_serializer(self, *args, **kwargs):
        return SupplierSerializer(*args, **kwargs)

class SupplierRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    
    def get_serializer(self, *args, **kwargs):
        return SupplierSerializer(*args, **kwargs)
    
class ExpenseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    
    def get_serializer(self, *args, **kwargs):
        return ExpenseSerializer(*args, **kwargs)

class ExpenseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    
    def get_serializer(self, *args, **kwargs):
        return ExpenseSerializer(*args, **kwargs)