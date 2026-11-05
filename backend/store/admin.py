from django.contrib import admin
from .models import Category, Product, UserProfile, Order, OrderItem

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Order)
admin.site.register(OrderItem)

