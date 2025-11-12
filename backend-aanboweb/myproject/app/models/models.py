from django.db import models
from django.contrib.auth.models import User

class Office(models.Model):
    office_name = models.CharField(max_length=50)
    office_address = models.CharField(max_length=100)
    office_slogan = models.CharField(max_length=150)
    office_logo = models.ImageField(upload_to="office_logo/", blank=True, null=True)
    office_logo1 = models.ImageField(upload_to="office_logo/", blank=True, null=True)
    office_email= models.EmailField(max_length=254, blank=True, null=True)
    office_phone= models.CharField( max_length=20, blank=True, null=True)

    def __str__(self):
        return self.office_name
