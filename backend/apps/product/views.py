from rest_framework import generics
from apps.product.models import (
    Category,
    Customer,
    Expense,
    Product,
    Purchase,
    Supplier,
)
from apps.product.serializers import (
    CategorySerializer,
    CustomerSerializer,
    ExpenseSerializer,
    ProductSerializer,
    PurchaseSerializer,
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
    
class PurchaseListCreateAPIView(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    
    def get_serializer(self, *args, **kwargs):
        return PurchaseSerializer(*args, **kwargs)

class PurchaseRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    
    def get_serializer(self, *args, **kwargs):
        return PurchaseSerializer(*args, **kwargs)
    
 
class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get_serializer(self, *args, **kwargs):
        return ProductSerializer(*args, **kwargs)

class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get_serializer(self, *args, **kwargs):
        return ProductSerializer(*args, **kwargs)