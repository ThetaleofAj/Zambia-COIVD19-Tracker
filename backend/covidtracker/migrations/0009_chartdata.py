# Generated by Django 3.1.7 on 2021-07-13 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covidtracker', '0008_province_provincecode'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChartData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('StartOfWeekDate', models.CharField(blank=True, max_length=20)),
                ('figure', models.CharField(blank=True, max_length=20)),
            ],
        ),
    ]