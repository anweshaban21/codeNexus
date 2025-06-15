from flask import Flask, jsonify
from flask_cors import CORS
app=Flask(__name__)
cors=CORS(app,origin='*')

import requests
from bs4 import BeautifulSoup


def get_leetcode_profile(username):
    url = f"https://leetcode-stats-api.herokuapp.com/{username}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching profile: {e}")
        return None

@app.route('/api/leetcode/<username>', methods=['GET'])
def leetcode_profile(username):
    profile = get_leetcode_profile(username)
    if profile:
        return jsonify(profile)
    else:
        return jsonify({"message": "Could not retrieve LeetCode profile"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)