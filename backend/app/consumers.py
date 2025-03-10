import json
import time
from channels.generic.websocket import AsyncWebsocketConsumer

class UploadProgressConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        self.progress = 0  # Initial progress at 0%
        print("WebSocket connection accepted.")
        
    async def disconnect(self, close_code):
        print(f"WebSocket disconnected with code: {close_code}")
        
    async def receive(self, text_data):
        data = json.loads(text_data)
        # Example: Start processing file
        if data.get("start_processing", False):
            while self.progress < 100:
                # Simulate file processing progress
                await self.send(text_data=json.dumps({"progress": self.progress}))
                self.progress += 10  # Update progress (you can modify based on actual file processing logic)
                time.sleep(1)  # Simulate some processing time
            await self.send(text_data=json.dumps({"progress": 100}))  # Done
