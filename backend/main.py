import uvicorn
import os
if __name__ == "__main__":
    print(os.getenv('DB_NAME'))
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)