var React = require('react');

var chordPresentationalComponent = React.createClass({
    statics: {
        ukeChordSvgStyle: {"fontFamily": "sans-serif", "fontSize": "11px"},
        chordNameStyle: {"fontSize": "16px"},
        visibilityHidden: {"visibility": "hidden"}
    },
    render: function(){

        return (
            <div>
                <svg width="90" height="134" viewBox="0 0 84 150"
                     style={chordPresentationalComponent.ukeChordSvgStyle}
                     xmlns="http://www.w3.org/2000/svg"
                     transform="translate(16,28)">
                    <title>[[title]] chord | http://pianosnake.github.io/uke-chord/</title>
                    <text x="48" y="16" textAnchor="middle" style={chordPresentationalComponent.chordNameStyle}>{this.props.chordName}</text>
                    <rect height="4" width="62" fill="black" style={chordPresentationalComponent.visibilityHidden}/>
                    <g transform="translate(17,20)">
                        <g transform="translate(0,2)">
                            <rect height="80" width="2" x="0"  fill="black"/>
                            <rect height="80" width="2" x="20" fill="black"/>
                            <rect height="80" width="2" x="40" fill="black"/>
                            <rect height="80" width="2" x="60" fill="black"/>
                        </g>
                        <g id="frets" transform="translate(0,2)">
                            <rect height="2" width="62" y="0"  fill="black"/>
                            <rect height="2" width="62" y="20" fill="black"/>
                            <rect height="2" width="62" y="40" fill="black"/>
                            <rect height="2" width="62" y="60" fill="black"/>
                            <rect height="2" width="62" y="80" fill="black"/>
                        </g>
                        <g transform="translate(1,13)">
                            <g style={{"visibility": this.props.closedStringVisibility[0]}} transform={this.props.closedStringTransform[0]} >
                                <circle r="6"/>
                                <text fill="white" y="4" textAnchor="middle">{this.props.fingers[0]}</text>
                            </g>
                            <g style={{"visibility": this.props.closedStringVisibility[1]}} transform={this.props.closedStringTransform[1]}>
                                <circle r="6"/>
                                <text fill="white" y="4" textAnchor="middle">{this.props.fingers[1]}</text>
                            </g>
                            <g style={{"visibility": this.props.closedStringVisibility[2]}} transform={this.props.closedStringTransform[2]}>
                                <circle r="6"/>
                                <text fill="white" y="4" textAnchor="middle">{this.props.fingers[2]}</text>
                            </g>
                            <g style={{"visibility": this.props.closedStringVisibility[3]}} transform={this.props.closedStringTransform[3]}>
                                <circle r="6"/>
                                <text fill="white" y="4" textAnchor="middle">{this.props.fingers[3]}</text>
                            </g>
                        </g>
                        <g transform="translate(1,-5)">
                            <circle  cx="0"  r="4" fill="none" stroke="black" strokeWidth="1" style={{"visibility": this.props.openStringVisibility[0]}}/>
                            <circle  cx="20" r="4" fill="none" stroke="black" strokeWidth="1" style={{"visibility": this.props.openStringVisibility[1]}}/>
                            <circle  cx="40" r="4" fill="none" stroke="black" strokeWidth="1" style={{"visibility": this.props.openStringVisibility[2]}}/>
                            <circle  cx="60" r="4" fill="none" stroke="black" strokeWidth="1" style={{"visibility": this.props.openStringVisibility[3]}}/>
                        </g>
                        <g transform="translate(1,98)">
                            <text  x="0" textAnchor="middle" >{this.props.subText[0]}</text>
                            <text  x="20" textAnchor="middle" >{this.props.subText[1]}</text>
                            <text  x="40" textAnchor="middle" >{this.props.subText[2]}</text>
                            <text  x="60" textAnchor="middle" >{this.props.subText[3]}</text>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
});
module.exports = chordPresentationalComponent;