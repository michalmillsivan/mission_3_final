import { getConnection } from "../../db_connection";

export async function getTeams(){
    const connection = await getConnection();
    const teams = await connection?.execute(`SELECT * FROM meeting_menagement.developers_teams`)
    const result = teams?.[0]
    return result
}
