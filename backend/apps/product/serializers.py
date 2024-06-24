from rest_framework import serializers

from apps.product.models import (
    Category,
    Customer,
    Expense,
    Inventory,
    Product,
    Purchase,
    Sale,
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

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = '__all__'
        

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'
        
    def validate(self, data):
        product = data['product']
        quantity = data['quantity']
        
        # Check if there is enough stock available
        inventory = Inventory.objects.filter(product=product).order_by('-id').first()
        if inventory:
            totalBal = inventory.total_balance_quantity - quantity
            if totalBal < 0:
                raise serializers.ValidationError("Insufficient stock for the product.")
        else:
            if quantity > 0:
                raise serializers.ValidationError("Insufficient stock for the product.")
        
        return data