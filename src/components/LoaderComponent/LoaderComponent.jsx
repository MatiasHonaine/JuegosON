import { helix } from 'ldrs'

const LoaderComponent = () => {

    helix.register();

    return <div styles={{ display: 'flex', alingItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}><l-helix size="70" speed="2.5" color="white"></l-helix></div>;

};

export default LoaderComponent;