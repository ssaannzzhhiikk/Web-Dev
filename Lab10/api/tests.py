from django.contrib.auth.models import User
from django.test import TestCase

from api.models import Category, Product


class ProductVisibilityTests(TestCase):
    def setUp(self):
        category = Category.objects.create(name="Electronics")
        for index in range(1, 9):
            Product.objects.create(
                name=f"Product {index}",
                price=100 + index,
                description=f"Description {index}",
                count=index,
                category=category,
            )

    def test_anonymous_user_sees_only_five_products(self):
        response = self.client.get("/api/products/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 5)

    def test_authenticated_user_sees_all_products(self):
        user = User.objects.create_user(username="testuser", password="testpass123")
        self.client.force_login(user)

        response = self.client.get("/api/products/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 8)
