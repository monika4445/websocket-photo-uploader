from rest_framework.response import Response  # type: ignore
from rest_framework.views import APIView  # type: ignore
from rest_framework.parsers import MultiPartParser  # type: ignore
from urllib.parse import quote
from .storage import S3MediaStorage  # Import the custom storage class

class FileUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        file = request.data["file"]
        storage = S3MediaStorage()  # Use your custom storage
        file_name = storage.save(file.name, file)  # Save file using S3MediaStorage
        print("filename: ", file_name)
        return Response({"file": file_name}, status=201)

class GalleryView(APIView):
    def get(self, request):
        storage = S3MediaStorage()  # Use your custom storage
        _, files = storage.listdir('')  # List all files in the default storage

        # Encode each filename properly and create the full URL
        image_urls = [
            f"http://localhost:9000/bucket/{quote(filename)}" for filename in files
        ]
        print("image_urls: ", image_urls)  # Optional, for debugging purposes
        return Response(image_urls)
