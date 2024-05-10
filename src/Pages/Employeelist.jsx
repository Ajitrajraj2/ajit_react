import data from '../Database/db.json'
import '../assets/style/tablestyle.css'

export default function Employeelist() {

  return (
    <div className="App">
        <table>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Desigination</th>
                <th>Gender</th>
                <th>course</th>
                <th>Create date</th>
                <th>Action</th>
            </tr>
            {data.employees.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.Image}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.Desigination}</td>
                        <td>{val.Gender}</td>
                        <td>{val.course}</td>
                        {/* <td>{val.Create date}</td> */}
                        <td>{val.Action}</td>

                        <td><a href="/add">edit</a></td>
                        <td><a href="/page" target="_blank" rel="noopener noreferrer">delete</a></td>

                    </tr>
                )
            })}
        </table>
    </div>
);
}
