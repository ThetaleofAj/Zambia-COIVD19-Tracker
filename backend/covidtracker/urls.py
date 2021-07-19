from django.urls import path
from django.urls.resolvers import URLPattern
from .views import ProvinceData, ZambiaData,ChartDataView

urlpatterns = [
    path('province/',ProvinceData.as_view()),
    path('zambia/', ZambiaData.as_view()),
    path('chartdata/', ChartDataView.as_view()),
]