var React    = require('react');
var ChordPresentationalComponent = require('./presentationalComponent');
import PropTypes from 'prop-types';
var stringsNum = 4;

var ChordComponent = React.createClass({
    parseFingers: function(fingers){

        if(!fingers) return null;
        if(fingers.length !== stringsNum) return null;
        fingers = fingers.split("");

        return fingers;
    },
    parseFrets: function(frets){
        var openStringVisibility = Array(4).fill("hidden");
        var closedStringVisibility = Array(4).fill("hidden");
        var closedStringTransform = [];
        if(!frets) return null;
        if(frets.length !== stringsNum) return null;
        frets = frets.split("");
        frets.forEach(function(fret, idx){
            if (fret === "0"){
                openStringVisibility[idx] = "visible";
            }else{
                closedStringVisibility[idx] = "visible";
                closedStringTransform.push("translate(" + idx * 20 + ", " + (fret - 1) * 20 + ")");
            }

        });
        return {
            openStringVisibility: openStringVisibility,
            closedStringVisibility: closedStringVisibility,
            closedStringTransform: closedStringTransform
        };
    },
    render: function(){
        //test

        var subText = this.props.subText.split(",");
        var frets_object = this.parseFrets(this.props.fret);
        return (
            <div>
                <ChordPresentationalComponent 
                    subText={subText}
                    fingers={this.parseFingers(this.props.fingers)}
                    openStringVisibility={frets_object.openStringVisibility}
                    closedStringVisibility={frets_object.closedStringVisibility}
                    closedStringTransform={frets_object.closedStringTransform}
                    chordName={this.props.chordName}
                />
            </div>
        );
    }
});

ChordComponent.propTypes = {
    subText: PropTypes.string,
    fingers: PropTypes.string,
    chordName: PropTypes.string,
    fret: PropTypes.string

};
module.exports = ChordComponent;