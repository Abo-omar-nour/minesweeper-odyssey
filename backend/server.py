from flask import Flask, request, jsonify, send_from_directory
import os, json

app = Flask(__name__, static_folder="../frontend", static_url_path="")
DB_FILE = os.path.join(os.path.dirname(__file__), "cloud_saves.json")

def load_db():
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_db(data):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/minesweeper_odyssey_saves/<player_id>.json", methods=["GET", "PUT"])
def sync_save(player_id):
    db = load_db()
    if request.method == "GET":
        return jsonify(db.get(player_id, {}))
    payload = request.get_json(silent=True) or {}
    db[player_id] = payload
    save_db(db)
    return jsonify({"status": "ok", "playerId": player_id})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
