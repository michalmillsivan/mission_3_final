
function ColumnHeader(props: { k: string, mapping: any }) {
    return <span> {props.mapping[props.k] || props.mapping[props.k] || props.k} </span>
}

export default function TableHead(props: { columns: Array<string>, mapping: any }) {
    return <thead>
        <tr>
            {props.columns.map(m => <th> <ColumnHeader k={m} mapping={props.mapping} /> </th>)}
        </tr>
    </thead>
}