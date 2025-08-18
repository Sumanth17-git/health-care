uvicorn main:app --host 0.0.0.0 --port 8000


docker run -d -p 8000:8000 \
  -e SPRINGBOOT_URL=http://34.46.44.251:9090 \
  sumanth17121988/pythongateway:1

curl -X POST http://localhost:8000/patients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Smith",
    "age": 32,
    "contact": "9876543210",
    "diagnosis": "Fever",
    "prescription": "Paracetamol 500mg"
  }'
