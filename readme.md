#Tutorial for reactjs-chord
reactjs-chord is a package that you could use to create your own ukulele reactjs component by passing necessary parameters(strings) to the component as props.

This will get you set up with installing the package of reactjs-chord.

----
## Star this on Github if you like it:
https://github.com/guanw/reactjs-ukulele-chord

----
## Install
enter "npm install reactjs-chord"


----
## usage
After you download the code, you might want to use webpack to manage your code. Here is a simple one to get you started:

    var path = require('path');

    module.exports = {
    entry: './app/main.jsx',
    output: {
        path: __dirname,
        filename: './build/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx$/
            }
        ]
    }
    };

make sure you have a main.jsx entry file in this case.

Follow this [tutorial](https://fakefish.github.io/react-webpack-cookbook/Introduction-to-Webpack.html)(English and Chinese), you will set up the stuff very quickly.
 

----
## How to use it

Here is a simple code sample to get you start to use it(The parameters I passed are random, don't get obsessed with it)

    var ChordComponent = 
    require('reactjs-chord');
    var React = require("react");
    var ReactDOM = require('react-dom');
    const render = function(){
    ReactDOM.render(
        <div>
            <ChordComponent subText="A,B,C,D"
            	   fingers="1230"
            	   fret="1320"
            	   chordName="C"/>
        </div>,
        document.getElementById('app')
    );
    };
    render();

## Contact me if you have questions
Jude Wang
(guanw0826@gmail.com)
