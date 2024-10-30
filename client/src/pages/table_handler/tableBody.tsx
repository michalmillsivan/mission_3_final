export default function TableBody<T>(props: { data: Array<T> }) {
    return <tbody>
        {props.data.map((m: T) => {
            return <tr>
                {Object.values(m as any).map(val => <td> {val as any} </td>)}
            </tr>
        })}
    </tbody>
}




