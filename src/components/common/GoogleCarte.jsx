import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";

const center = {
  lat: 50.46753766319855,
  lng: 30.51349319781484,
};

const containerStyle = {
  width: "100%",
  height: "50vh",
  borderRadius: " 0 20px 20px 0",
};

export default function SimpleMap({ zoom }) {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <LoadScript googleMapsApiKey="AIzaSyBpJpTaDPZLnxi_kKMqX6mvbjqH3CcaUyE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          <Circle />
        </GoogleMap>{" "}
      </LoadScript>{" "}
    </div>
  );
}
