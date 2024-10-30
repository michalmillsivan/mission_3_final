import { useEffect, useState } from "react";
import { getMeetingApi, MeetingUI } from "../meetings/service";
import axios from "axios";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function CreateMeetingPage() {
    const [teamIds, setTeamIds] = useState<number[]>([]);
    const [formData, setFormData] = useState({
        team_id: "",
        description: "",
        meeting_room: "Large board room", 
        starting_time: "",
        ending_time: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        async function fetchTeamIds() {
            try {
                const meetings = await getMeetingApi();
                const uniqueTeamIds = Array.from(new Set(meetings.map((m: MeetingUI) => m.team_id)));
                setTeamIds(uniqueTeamIds);
            } catch (error) {
                console.error("Error fetching team IDs:", error);
            }
        }
        fetchTeamIds();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await axios.post("http://127.0.0.1:3333/meetings", formData);
            alert("Meeting created successfully!");
            setFormData({
                starting_time: "",
                ending_time: "",
                team_id: "",
                description: "",
                meeting_room: "Large board room",

            });
        } catch (error) {
            console.error("Error creating meeting:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container>
            <h1 className="mt-4 mb-4">Create New Meeting</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="team_id">
                            <Form.Label>Team ID</Form.Label>
                            <Form.Select
                                name="team_id"
                                value={formData.team_id}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a team</option>
                                {teamIds.map((teamId) => (
                                    <option key={teamId} value={teamId}>
                                        Team {teamId}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="meeting_room">
                            <Form.Label>Meeting Room</Form.Label>
                            <Form.Select
                                name="meeting_room"
                                value={formData.meeting_room}
                                onChange={handleChange}
                                required
                            >
                                <option value="Large board room">Large board room</option>
                                <option value="New York room">New York room</option>
                                <option value="Blue room">Blue room</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="starting_time">
                            <Form.Label>Starting Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="starting_time"
                                value={formData.starting_time}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="ending_time">
                            <Form.Label>Ending Time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="ending_time"
                                value={formData.ending_time}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Create Meeting"}
                </Button>
            </Form>
        </Container>
    );
}
