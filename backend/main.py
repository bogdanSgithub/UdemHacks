from fastapi import FastAPI

app = FastAPI()


app.include_router(stats_root)