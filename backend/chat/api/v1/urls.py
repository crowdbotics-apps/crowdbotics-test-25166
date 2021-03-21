from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ForwardedMessageViewSet,
    MessageViewSet,
    MessageActionViewSet,
    ThreadViewSet,
    ThreadActionViewSet,
    ThreadMemberViewSet,
)

router = DefaultRouter()
router.register("messageaction", MessageActionViewSet)
router.register("forwardedmessage", ForwardedMessageViewSet)
router.register("threadaction", ThreadActionViewSet)
router.register("thread", ThreadViewSet)
router.register("threadmember", ThreadMemberViewSet)
router.register("message", MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
