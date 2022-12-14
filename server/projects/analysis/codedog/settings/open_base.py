# -*- coding: utf-8 -*-
# Copyright (c) 2021-2022 THL A29 Limited
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

"""
Django settings for codedog project.

Generated by "django-admin startproject" using Django 1.8.6.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""
from datetime import timedelta
from os.path import dirname, join, abspath

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = dirname(dirname(dirname(abspath(__file__))))

# SECURITY WARNING: don"t run with debug turned on in production!
# DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "corsheaders",
    "rest_framework",
    "rest_framework.authtoken",
    "django_filters",
    "apps.authen",
    "apps.base",
    "apps.codeproj",
    "apps.codelint",
    "apps.codemetric",
    "drf_yasg",
    "django_prometheus",
]

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
]

MIDDLEWARE = [
    "django_prometheus.middleware.PrometheusBeforeMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_prometheus.middleware.PrometheusAfterMiddleware",
]

ROOT_URLCONF = "codedog.open_urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.jinja2.Jinja2",
        "APP_DIRS": True,
        "OPTIONS": {
            "environment": "codedog.jinja2.environment",
        },
    },
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "codedog.wsgi.application"

LANGUAGE_CODE = "zh-CN"

TIME_ZONE = "Asia/Shanghai"

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATICFILES_DIRS = (
    join(BASE_DIR, "static"),
)
STATIC_URL = "/static/"
STATIC_ROOT = join(BASE_DIR, "staticroot")

# ???????????????
MAIL_BLACK_LIST = []

# Logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "default": {
            "format": "-%(asctime)s-%(levelname)s-%(name)s: %(message)s"
        },
    },
    "handlers": {
        "file": {
            "level": "DEBUG",
            "class": "logging.handlers.RotatingFileHandler",
            "formatter": "default",
            "filename": join(BASE_DIR, "log", "codedog.log"),
            "maxBytes": 1 << 28,
            "backupCount": 5,
            "encoding": "utf8",
        },
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "default",
        }
    },
    "loggers": {
        "": {
            "handlers": [
                "file",
                "console"
            ],
            "level": "DEBUG",
            "propagate": True,
        }
    }
}

CLEAN_DIR_TIMEOUT = timedelta(days=2)  # jobdata?????????????????????

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
    "DEFAULT_FILTER_BACKENDS": (
        "django_filters.rest_framework.DjangoFilterBackend",
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        # MainServer??????????????????
        "apps.authen.backends.MainServerInternalAuthentication",
        # MainServer??????????????????
        "apps.authen.backends.MainProxyAuthentication",
        # Codedog????????????????????????
        "rest_framework.authentication.SessionAuthentication",
    ),
    "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
    "EXCEPTION_HANDLER": "util.handlers.tiyan_format_exception_handler",
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 10,
    "DEFAULT_RENDERER_CLASSES": (
        "util.renderers.DefaultJSONRenderer",
        "rest_framework.renderers.BrowsableAPIRenderer",
    ),
}

# API Ticket
API_TICKET_SALT = ""
API_TICKET_TOKEN = ""

# Main Server ??????
MAIN_SERVER_URL = ""

# ????????????
LOCAL_DOMAIN = ""

# CodeDog ????????????????????????
SWAGGER_SETTINGS = {
    "API_URL": None,
    "API_PREFIX": "",
    "SECURITY_DEFINITIONS": {
        "Token": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "????????????????????????``{\"Authorization\": \"Token ${Token??????}\"}``"
        }
    }
}
