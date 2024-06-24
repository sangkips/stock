from django.contrib import admin
from . import models

admin.site.register(models.Category)

class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'phone']
    search_fields = ['first_name', 'phone']
admin.site.register(models.Customer, CustomerAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category']
    search_fields = ['name', 'category']
admin.site.register(models.Product, ProductAdmin)

class PurchaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'supplier', 'product', 'quantity', 'price', 'purchase_date']
    search_fields = ['product__title']
admin.site.register(models.Purchase, PurchaseAdmin)

class SaleAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer', 'product', 'quantity', 'price', 
    'total_amount', 'sale_date']
    search_fields = ['product__title']
admin.site.register(models.Sale, SaleAdmin)

class InventoryAdmin(admin.ModelAdmin):
    search_fields = ['product__name', 'product__category__name']
    list_display = ['product', 'purchase_quantity', 'sale_quantity', 
    'total_balance_quantity', 'product_unit', 'purchase_date', 
    'sale_date', 'supplier', 'customer']
admin.site.register(models.Inventory, InventoryAdmin)

class VendorAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone']
    search_fields = ['name', 'phone']
admin.site.register(models.Supplier, VendorAdmin)
 
