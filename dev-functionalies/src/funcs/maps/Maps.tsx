import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import "./styles.css";

interface IProps {
    lat: number;
    lng: number;
    isLoaded: boolean;
}


const containerStyle = {
  width: "42.375rem",
  height: "33.625rem",
};

const Map: React.FC<IProps> = () => {
  const center = useMemo(
    () => ({
      lat:  47.3637207118515,
      lng: 8.550175940313103,
    }),
    [],
  );

  return (
    <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
};

const GoogleMaps = () => {
  //const squibCoord = process.env.SQUIB_GOOGLE_MAPS_APIKEY as string;

  const { isLoaded } = useJsApiLoader({
googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map lat={47.3637207118515} lng={8.550175940313103} isLoaded={false} />;
};

export default GoogleMaps;