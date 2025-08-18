from fastapi import FastAPI, HTTPException
import httpx
import os

app = FastAPI()

SPRINGBOOT_URL = os.getenv("SPRINGBOOT_URL", "http://34.46.44.251:9090")

@app.post("/patients")
async def create_patient(patient: dict):
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.post(f"{SPRINGBOOT_URL}/patients", json=patient)
            resp.raise_for_status()  # raise if not 2xx
            return resp.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/patients/{id}")
async def get_patient(id: int):
    """Forward patient fetch to Spring Boot"""
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{SPRINGBOOT_URL}/patients/{id}")

        if response.status_code == 404:
            raise HTTPException(status_code=404, detail="Patient not found")

        return response.json()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
