from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    # path('posts/', views.posts),
	# path('post/', views.post),
	# path('profile/', views.profile)
]