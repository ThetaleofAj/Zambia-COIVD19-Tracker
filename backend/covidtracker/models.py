from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import CASCADE
from django.db.models.fields import DateField
from django.db.models.fields.related import ManyToManyField

# Create your models here.
#Specifying location choice
location_options = (
    ('Zambia','Zambia'),
    ('Lusaka','Lusaka'),
    ('Copperbelt','Copperbelt'),
    ('Luapula','Luapula'),
    ('Central','Central'),
    ('Eastern','Eastern'),
    ('Southern','Southern'),
    ('Northern','Northern'),
    ('Western','Western'),
    ('North-Western','North-Western'),
    ('Muchinga','Muchinga')
    )

#Province Model
class Province(models.Model):
    provinceCode = models.CharField(max_length=4,blank=True)
    date = models.DateField()
    name = models.CharField(max_length=20,choices=location_options,blank=True)
    cases = models.CharField(max_length=30,blank=True)
    deaths = models.CharField(max_length=30,blank=True)

    def __str__(self):
        return self.name

#Zambia Model
class Zambia(models.Model):
    date = models.DateField()
    name = models.CharField(max_length=20,choices=location_options,blank=True)
    casesToday = models.CharField(max_length=30,blank=True)
    casesTotal = models.CharField(max_length=30,blank=True)
    testsToday = models.CharField(max_length=30,blank=True)
    testsTotal = models.CharField(max_length=30,blank=True)
    recoveriesToday = models.CharField(max_length=30,blank=True)
    recoveriesTotal = models.CharField(max_length=30,blank=True)
    deathsToday = models.CharField(max_length=30,blank=True)
    deathsTotal = models.CharField(max_length=30,blank=True)
    VaccinationFirst = models.CharField(max_length=30,blank=True)
    VaccinationSecond = models.CharField(max_length=30,blank=True)

    def __str__(self):
        return self.name

#ChartDataModel
class ChartData(models.Model):
    StartOfWeekDate = models.CharField(max_length=20,blank=True)
    figure = models.CharField(max_length=20,blank=True)

    def __str__(self):
        return self.StartOfWeekDate


