from rest_framework import serializers

from apps.product.models import (
    Category,
    Customer,
    Expense,
    Supplier,
)

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category 
        fields = '__all__'
        
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier 
        fields = '__all__'
        
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense 
        fields = '__all__'