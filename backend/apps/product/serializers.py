from rest_framework import serializers

from apps.product.models import (
    Category,
    Customer,
    Expense,
    Product,
    Purchase,
    Supplier,
)

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category 
        fields = ['id', 'name']
        
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier 
        fields = '__all__'
        
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense 
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'quantity', 'description']
        
class PurchaseSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    supplier = SupplierSerializer(read_only=True)
    class Meta:
        model = Purchase
        fields = ['id', 'product', 'supplier', 'quantity', 'price', 'total_amount', 'purchase_date']
        