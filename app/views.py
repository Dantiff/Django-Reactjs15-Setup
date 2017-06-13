import os, tempfile, zipfile
from wsgiref.util import FileWrapper
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotModified
from django.views import View
from django.contrib import messages
from django.contrib.auth.models import User


class Index(View):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):

        return render(request, self.template_name, {})
