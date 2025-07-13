import { Link } from "react-router-dom";
import { NavigationButton } from "../component/navigationButton";

export const Config: React.FC = () => {
    return (
        <>
            <NavigationButton />
            <h1>Config</h1>
            <p>This is the config page.</p>
        </>
    )
}