import { useParams } from "react-router-dom";
import Body from "../components/Body";

export default function UserPage() {
    const { username } = useParams()
    return (
        <Body sidebar={true}>
            <h1>{username}</h1>
            <p>TODO</p>
        </Body>
    );
}
