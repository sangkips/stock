from django.urls import path
from . import views

urlpatterns = [
    path(
        'customer/',
        views.CustomerListCreateAPIView.as_view(),
        name='customer-list'
    ),
    path(
        'customer/<int:pk>/',
        views.CustomerRetrieveUpdateDestroyAPIView.as_view(),
        name='customer-detail'
    ),
    path(
        'category/',
        views.CategoryListCreateAPIView.as_view(),
        name='category-list'
    ),
    path(
        'category/<int:pk>/',
        views.CategoryRetrieveUpdateDestroyAPIView.as_view(),
        name='category-detail'
    ),
    
    path(
        'supplier/',
        views.SupplierListCreateAPIView.as_view(),
        name='supplier-list'
    ),
    path(
        'supplier/<int:pk>/',
        views.SupplierRetrieveUpdateDestroyAPIView.as_view(),
        name='supplier-detail'
    ),
    
    path(
        'expense/',
        views.ExpenseListCreateAPIView.as_view(),
        name='expense-list'
    ),
    path(
        'expense/<int:pk>/',
        views.ExpenseRetrieveUpdateDestroyAPIView.as_view(),
        name='expense-detail'
    ),
    
    path(
        'purchase/',
        views.PurchaseListCreateAPIView.as_view(),
        name='purchase-list'
    ),
    path(
        'purchase/<int:pk>/',
        views.PurchaseRetrieveUpdateDestroyAPIView.as_view(),
        name='purchase-detail'
    ),
    
    path(
        'products/',
        views.ProductListCreateAPIView.as_view(),
        name='product-list'
    ),
    path(
        'products/<int:pk>/',
        views.ProductRetrieveUpdateDestroyAPIView.as_view(),
        name='product-detail'
    ),
    
    path(
        'sale/',
        views.SaleListCreateAPIView.as_view(),
        name='sale-list'
    ),
    path(
        'sale/<int:pk>/',
        views.SaleRetrieveUpdateDestroyAPIView.as_view(),
        name='sale-detail'
    ),
]