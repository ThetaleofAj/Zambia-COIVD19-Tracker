# Generated by Django 3.1.7 on 2021-07-19 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covidtracker', '0009_chartdata'),
    ]

    operations = [
        migrations.RenameField(
            model_name='zambia',
            old_name='VaccinationToday',
            new_name='VaccinationFirst',
        ),
        migrations.AddField(
            model_name='zambia',
            name='VaccinationSecond',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]