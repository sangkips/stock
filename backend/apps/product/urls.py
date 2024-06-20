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
]