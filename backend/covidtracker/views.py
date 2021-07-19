from rest_framework import generics
from .serializers import ZambiaSerializer, ProvinceSerializer,ChartDataSerializer
from .models import Province,Zambia,ChartData

# Create your views here.
#ZAMBIA
class ZambiaData(generics.ListAPIView):
    queryset = Zambia.objects.all()
    serializer_class = ZambiaSerializer

#PROVINCES
class ProvinceData(generics.ListAPIView):
    queryset = Province.objects.all()
    serializer_class = ProvinceSerializer

#CHART DATA
class ChartDataView(generics.ListAPIView):
    queryset = ChartData.objects.all()
    serializer_class = ChartDataSerializer

