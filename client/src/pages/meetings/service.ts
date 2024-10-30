import axios from "axios";
const URL = `http://127.0.0.1:3333/meetings`;

export interface MeetingApi {
    meeting_id: number,
    team_id: number,
    team_name: string,
    starting_time: string,
    ending_time: string,
    description: string,
    meeting_room: string
}

export interface MeetingUI {
    meeting_id: number,
    team_id: number,
    team_name: string,
    starting_time: string,
    ending_time: string,
    description: string,
    meeting_room: string
}

export async function getMeetingApi(): Promise<Array<MeetingUI>> {
    try {
        const result = await axios.get<{ meetings: MeetingApi[] }>(URL);
        console.log(result.data);

        const data = result.data.meetings.map(m => ({
            meeting_id: m.meeting_id,
            team_id: m.team_id,
            team_name: m.team_name,
            starting_time: m.starting_time,
            ending_time: m.ending_time,
            description: m.description,
            meeting_room: m.meeting_room
        }));

        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching meetings data:", error);
        throw error;
    }
}
