import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEffect, useState } from "react";
import Button from "./Button";

function Map() {
  const { getPosition, position: geolocationPosition } = useGeolocation();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
      setMarkers((markers) => [
        ...markers,
        { lat: geolocationPosition.lat, lng: geolocationPosition.lng },
      ]);
    }
  }, [geolocationPosition]);

  return (
    <div style={{ height: "700px", width: "100%" }}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ChangeCenter position={mapPosition} />
        <AddMarker markers={markers} setMarkers={setMarkers} />
        {markers.map((marker, i) => (
          <Marker position={marker} key={i}>
            <Popup>
              Position: {marker.lat}, {marker.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Button type="position" onClick={getPosition}>
        Get current position
      </Button>
      {markers && (
        <Button type="position" onClick={() => setMarkers([])}>
          Clear map
        </Button>
      )}
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
}

function AddMarker({ markers, setMarkers }) {
  useMapEvents({
    click: (e) => setMarkers([...markers, e.latlng]),
  });
  return null;
}

export default Map;
