# Generated by Django 3.2.5 on 2021-07-21 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_remove_post_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='img',
            field=models.ImageField(default='../static/images/article-1-image.jpg', upload_to='../media/'),
        ),
    ]
