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
    
]