import Body from '../components/Body'
import Posts from '../components/Posts';

export default function FeedPage() {
    return (
        <Body sidebar={true}>
            <Posts />
        </Body>
    );
}
