import os
import environ
from .settings import *

project_root = environ.Path(__file__) - 3
env = environ.Env(DEBUG=(bool, False),)
CURRENT_ENV = 'dev' # 'dev' is the default environment

# read the .env file associated with the settings that're loaded
env.read_env('./conf/{}.env'.format(CURRENT_ENV))

DATABASES = {
    'default': env.db()
}

SECRET_KEY = env('SECRET_KEY')

DEBUG = env('DEBUG')

FRONTEND_ROOT = os.path.abspath(env('FRONTEND_ROOT'))

INSTALLED_APPS.extend([
    'rest_framework',
    'applications.cpf',
    'rest_framework_tracking',
    'drf_multiple_model',
])

ROOT_URLCONF = 'conf.urls'

STATIC_URL = '/static/'

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

STATICFILES_DIRS = [
    FRONTEND_ROOT
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [FRONTEND_ROOT],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
