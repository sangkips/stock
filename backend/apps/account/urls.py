from django.urls import path
from apps.account import views

urlpatterns = [
    # re_path(
    #     r'^o/(?P<provider>\S+)/$',
    #     CustomProviderAuthView.as_view(),
    #     name='provider-auth'
    # ),
    path('jwt/create/',
        views.CustomTokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path('jwt/refresh/',
        views.CustomTokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path('jwt/verify/',
        views.CustomTokenVerifyView.as_view(),
        name='token_verify'
    ),
    path('logout/',
        views.LogoutView.as_view(),
        name='logout'
    ),
]