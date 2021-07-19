from django.db import models
from django.db.models import fields
from rest_framework import serializers
from rest_framework.utils import field_mapping
from .models import Zambia,Province,ChartData

#SERIALIZERS
#Zambia Serializer
class ZambiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zambia
        fields = '__all__'

#Province Serializer
class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = '__all__'

#ChartData Serializer
class ChartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartData
        fields = '__all__'