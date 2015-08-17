from flask import Flask
from flask import request, jsonify, render_template, make_response
import pandas as pd
import json
import sys
import glob
import numpy as np
import argparse

from react import jsx

parser = argparse.ArgumentParser(description="Flask Template")
parser.add_argument("--env", help="production or local", default="local")
args = parser.parse_args()

TITLE = "Flask/React/D3"

scripts = [
    "./bower_components/jquery/dist/jquery.min.js",
    "./bower_components/d3/d3.min.js",
    "./bower_components/require/build/require.min.js",
    "./bower_components/react/react.js",
    "./bower_components/react-bootstrap/react-bootstrap.min.js",
]

css = [
    "./bower_components/bootstrap/dist/css/bootstrap.min.css",
    "./css/main.css"
]

transformer = jsx.JSXTransformer()
jsx_input = "./static/scripts/jsx/"
jsx_output = "./static/scripts/js/"

for f in glob.glob(jsx_input+"*.js"):
    transformer.transform(f,js_path=jsx_output+f.split('/')[-1])


app = Flask(__name__)


@app.route('/', methods=["GET"])
@app.route('/index', methods=["GET"])
def index():
    _scripts = ["./scripts/js/navbar.js", 
                "./scripts/js/App.js",
                "./scripts/js/Chart.js",
                "./scripts/js/d3Chart.js",
                "./scripts/js/Pagination.js",
                "./scripts/js/main.js",
                "./scripts/js/Button.js"]

    return render_template('index.html',
        title=TITLE,
        base_scripts=scripts,
        page_scripts=_scripts,
        css=css)

if __name__ == "__main__":
    app.run(debug=True)
