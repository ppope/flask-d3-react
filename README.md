# How to Install
Setup virtual environment. Assumes you have an anaconda distribution.
```
conda create -n flask-d3-react python=3.4 ipython pandas flask numpy 
source activate flask-d3-react
pip install react pyreact
```

## NPM
You need to have NPM (package manager for nodejs modules) installed. We need it to install `bower`, package manager for front ends.
Run `npm install -g` in the directory containing package.json. `-g` will make bower available globally.
* Note: may need sudo

### Bower
If it doesn't already exist, create a file called `.bowerrc` containing
```json
{
    "directory": "./project/static/bower_components"
}
```
This will tell bower where to install the packages.

Now run `bower install` to install the bower components.

# Flask
Reactivate virtual environment if needed. Then,
```
cd project
python app.py
```
