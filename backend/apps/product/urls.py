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
]