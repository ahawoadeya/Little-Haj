from django.db import models
from django.shortcuts import reverse


AUTHOR_CHOICES = (
    ('HJ', 'Humphrey Haj'),
)


# Create your models here.
class Post(models.Model):
    category = models.CharField(max_length=50)
    is_featured = models.BooleanField(blank=True, null=True) 
    title = models.CharField(max_length=50)
    quote = models.TextField(blank=True, null=True)
    cite = models.TextField(blank=True, null=True)
    content = models.TextField()
    date_posted = models.DateTimeField()
    author = models.CharField(choices=AUTHOR_CHOICES, max_length=2)
    img = models.ImageField(default='../static/images/article-1-image.jpg')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog:article", kwargs={"pk": self.id}) 
