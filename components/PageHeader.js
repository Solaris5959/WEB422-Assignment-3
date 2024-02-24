import { Card } from "react-bootstrap";

export default function PageHeader({ text }) {
    return (
        <>
            <Card className="bg-light">
                <Card.Body>
                    <strong>{text}</strong>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}