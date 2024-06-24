from django.db import models
from django.utils import timezone


class Supplier(models.Model):
    name = models.CharField(max_length=50)
    address = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=15)
    email = models.EmailField(max_length=100, null=True, blank=True)
    kra_pin = models.CharField(max_length=15, null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Suppliers'

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, null=True, blank=True)
    quantity = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name

class Purchase(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.FloatField(default=0.00)
    total_amount = models.FloatField(editable=False, default=0.00)
    purchase_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Purchases'
    
    def __str__(self):
        return self.product.name
    
    def save(self, *args, **kwargs):
        self.total_amount = self.quantity * self.price
        super(Purchase, self).save(*args, **kwargs)

        # Update inventory effect related to purchase
        inventory = Inventory.objects.filter(
            product=self.product
            ).order_by('-id').first()
        if inventory:
            totalBal = inventory.total_balance_quantity + self.quantity
        else:
            totalBal = self.quantity
        # Insert in inventory 
        Inventory.objects.create(
            product = self.product,
            purchase = self,
            sale = None,
            purchase_quantity = self.quantity,
            sale_quantity = None,
            total_balance_quantity = totalBal
        )

class Customer(models.Model):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    middle_name = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=14, blank=True, null=True)
    address = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Customers'

    def __str__(self):
        return self.first_name

class Sale(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE,null=True)
    quantity = models.IntegerField()
    price = models.FloatField(default=0.00)
    # It calculates by itself
    total_amount = models.FloatField(editable=False)
    sale_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Sales'
    
    def save(self, *args, **kwargs):
        self.total_amount = self.quantity * self.price
        super(Sale, self).save(*args, **kwargs)

        # Update inventory effect related to sale
        inventory = Inventory.objects.filter(
            product=self.product
            ).order_by('-id').first()
        totalBal = 0
        if inventory:
            totalBal = inventory.total_balance_quantity - self.quantity

        # Insert in inventory 
        Inventory.objects.create(
            product = self.product,
            purchase = None,
            sale = self,
            purchase_quantity = None,
            sale_quantity = self.quantity,
            total_balance_quantity = totalBal
        )

class Inventory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    purchase = models.ForeignKey(Purchase, on_delete=models.CASCADE, 
        default=0, null=True)
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE, 
        default=0, null=True)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True)
    purchase_quantity = models.IntegerField(default=0, null=True)
    sale_quantity = models.IntegerField(default=0, null=True)
    #total_balance_quantity is expressed as, total_balance_quantity = purchase_quantity - sale_quantity
    total_balance_quantity = models.FloatField(default=0)

    class Meta:
        verbose_name_plural = 'Inventory'
    
    def product_unit(self):
        return self.product.category.name

    def purchase_date(self):
        if self.purchase:
            return self.purchase.purchase_date

    def sale_date(self):
        if self.sale:
            return self.sale.sale_date

class Expense(models.Model):
    expense_type = models.CharField(max_length=50)
    description = models.CharField(max_length=255, null=True, blank=True)
    amount = models.FloatField(default=0.00)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name_plural = 'Expenses'

    def __str__(self):
        return self.expense_type