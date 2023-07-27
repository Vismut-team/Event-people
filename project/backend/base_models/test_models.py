from django.contrib.auth.models import User
from users.models import Account
from rest_framework.test import APIClient, APITestCase


class TestModelWithUserAndAdminAcconts(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="test_user", password="secret")
        self.admin = User.objects.create_superuser(username="test_admin", password="secret")
        self.user_account = Account.objects.create(user=self.user)
        self.admin_account = Account.objects.create(user=self.admin)

        self.client = APIClient()

    def tearDown(self):
        self.client.logout()
