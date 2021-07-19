# Generated by Django 3.1.7 on 2021-07-05 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cases',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.CharField(blank=True, max_length=30)),
                ('cumulative', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Deaths',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.CharField(blank=True, max_length=30)),
                ('cumulative', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Recoveries',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.CharField(blank=True, max_length=30)),
                ('cumulative', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Tests',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.CharField(blank=True, max_length=30)),
                ('cumulative', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Vaccinations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('today', models.CharField(blank=True, max_length=30)),
                ('cumulative', models.CharField(blank=True, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(blank=True, choices=[('Zambia', 'Zambia'), ('Lusaka', 'Lusaka'), ('Copperbelt', 'Copperbelt'), ('Luapula', 'Luapula'), ('Central', 'Central'), ('Eastern', 'Eastern'), ('Southern', 'Southern'), ('Northern', 'Northern'), ('Western', 'Western'), ('North-Western', 'North-Western')], max_length=15)),
                ('Cases', models.ManyToManyField(blank=True, to='covidtracker.Cases')),
                ('Deaths', models.ManyToManyField(blank=True, to='covidtracker.Deaths')),
                ('Recoveries', models.ManyToManyField(blank=True, to='covidtracker.Recoveries')),
                ('Tests', models.ManyToManyField(blank=True, to='covidtracker.Tests')),
                ('Vaccinated', models.ManyToManyField(blank=True, to='covidtracker.Vaccinations')),
            ],
        ),
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('Location', models.ManyToManyField(blank=True, to='covidtracker.Location')),
            ],
        ),
    ]
