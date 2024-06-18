from rest_framework import generics
from rest_framework.response import Response
from apps.product.models import Customer
from apps.product.serializers import (
    CustomerSerializer
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
    