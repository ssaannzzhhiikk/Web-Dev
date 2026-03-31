from django.http import JsonResponse
from .models import Product, Category


def product_to_dict(p):
    return {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category_id,
    }


def category_to_dict(c):
    return {
        "id": c.id,
        "name": c.name,
    }


# GET /api/products/
def product_list(request):
    products = Product.objects.all().order_by('price')
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


# GET /api/products/<int:id>/
def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


# GET /api/categories/
def category_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


# GET /api/categories/<int:id>/
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


# GET /api/categories/<int:id>/products/
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
    

from django.db.models import Min, Max

def product_stats(request):
    stats = Product.objects.aggregate(
        min_price=Min('price'),
        max_price=Max('price')
    )
    return JsonResponse(stats)


def product_list(request):
    products = Product.objects.order_by('-price')

    # query params
    min_price = request.GET.get('min')
    max_price = request.GET.get('max')
    sort = request.GET.get('sort')

    if min_price:
        products = products.filter(price__gte=min_price)

    if max_price:
        products = products.filter(price__lte=max_price)

    allowed_sorts = ['price', '-price', 'name', '-name']
    if sort in allowed_sorts:
        products = products.order_by(sort)

    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)

Product.objects.order_by('price').first()
Product.objects.order_by('-price').first()