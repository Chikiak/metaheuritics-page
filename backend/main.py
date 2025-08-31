import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#Configurar CORS para React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

counter = 0

@app.get("/get-count")
def get_count():
    return {"current_count": counter}

@app.post("/increment")
def increment_counter():
    global counter
    counter += 1
    return {
        "message": f"Counter incremented to {counter}",
        "new_count": counter,
    }

@app.post("/decrement")
def decrement_counter():
    global counter
    counter -= 1
    return {
        "message": f"Counter decremented to {counter}",
        "new_count": counter,
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)