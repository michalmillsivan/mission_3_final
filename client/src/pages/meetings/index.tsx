import { useEffect, useMemo, useState } from "react";
import Table from 'react-bootstrap/Table';
import { MeetingUI } from "./service";
import TableHead from "../table_handler/tableHead";
import TableBody from "../table_handler/tableBody";
import { getMeetingApi } from './service';

export type RowType = {
    meeting_id: number,
    team_id: number,
    team_name: string,
    starting_time: string,
    ending_time: string,
    description: string,
    meeting_room: string
}

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<Array<MeetingUI>>([]);
    const [filteredMeetings, setFilteredMeetings] = useState<Array<MeetingUI>>([]);
    const [teamIds, setTeamIds] = useState<number[]>([]); 
    const [selectedTeamId, setSelectedTeamId] = useState<number | "all">("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getMeetingsData() {
            try {
                setIsLoading(true);
                const meetings = await getMeetingApi();
                setMeetings(meetings);
                setFilteredMeetings(meetings); 

                const uniqueTeamIds = Array.from(new Set(meetings.map(m => m.team_id)));
                setTeamIds(uniqueTeamIds);
            } catch (error) {
                console.error("Error fetching meetings data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        getMeetingsData();
    }, []);

    useEffect(() => {
        if (selectedTeamId === "all") {
            setFilteredMeetings(meetings);
        } else {
            setFilteredMeetings(meetings.filter(meeting => meeting.team_id === selectedTeamId));
        }
    }, [selectedTeamId, meetings]);

    const columnMapping = useMemo(() => ({
        meeting_id: "Meeting ID",
        team_id: "Team ID",
        team_name: "Team Name",
        starting_time: "Starting Time",
        ending_time: "Ending Time",
        description: "Description",
        meeting_room: "Meeting Room"
    }), []);

    return (
        <div>
            <div>
                <h1>All Meetings Page</h1>
            </div>
            <div style={{ margin: "auto", width: "80%" }}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <div style={{ marginBottom: "20px" }}>
                            <label htmlFor="team-filter">Filter by Team:</label>
                            <select
                                id="team-filter"
                                value={selectedTeamId}
                                onChange={(e) => setSelectedTeamId(e.target.value === "all" ? "all" : Number(e.target.value))}
                                style={{ marginLeft: "10px", padding: "5px" }}
                            >
                                <option value="all">All Teams</option>
                                {teamIds.map((teamId) => (
                                    <option key={teamId} value={teamId}>
                                        Team {teamId}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {filteredMeetings.length > 0 ? (
                            <Table striped bordered hover variant="dark">
                                <TableHead mapping={columnMapping} columns={Object.keys(filteredMeetings[0])} />
                                <TableBody data={filteredMeetings} />
                            </Table>
                        ) : (
                            <h2>No meetings available</h2>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
