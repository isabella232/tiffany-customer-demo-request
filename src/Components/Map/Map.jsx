import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div>
        <img
            onClick={e => {
                console.log(process.env.GOOGLE_API_KEY);
            }}
            src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png"
            style={{ height: '50px', width: '50px' }}
        />
    </div>
);

export default class Map extends Component {
    static defaultProps = {
        zoom: 11,
        center: {
            lat: 40.7128,
            lng: -74.006
        }
    };

    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
            position: 'relative'
        };
        return (
            <div
                className="google-map"
                style={{
                    width: '100%',
                    height: '100vh'
                }}
            >
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GOOGLE_API_KEY
                    }}
                    style={mapStyles}
                    center={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={40.7128}
                        lng={-74.006}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
