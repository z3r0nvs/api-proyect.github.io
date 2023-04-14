import React, { useState } from "react";

function Table() {
     const [data, setData] = useState([]);
     const [editing, setEditing] = useState(false);
     const [editID, setEditID] = useState(null);
     const [nombre, setNombre] = useState("");
     const [apellido, setApellido] = useState("");

     const handleDelete = (id) => {
          setData(data.filter(item => item.id !== id));
     };

     const handleEdit = (id) => {
          setEditing(true);
          setEditID(id);
          setNombre(data.find(item => item.id === id).nombre);
          setApellido(data.find(item => item.id === id).apellido);
     };

     const handleUpdate = (e) => {
          e.preventDefault();
          setData(data.map(item => {
               if (item.id === editID) {
                    return { ...item, nombre, apellido };
               }
               return item;
          }));
          setEditing(false);
          setEditID(null);
          setNombre("");
          setApellido("");
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          const id = data.length + 1;
          const newData = { id, nombre, apellido };
          setData([...data, newData]);
          setNombre("");
          setApellido("");
     };

     return (
          <div>
               <form onSubmit={editing ? handleUpdate : handleSubmit}>
                    <label>
                         Nombre:
                         <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </label>
                    <label>
                         Apellido:
                         <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </label>
                    <button type="submit">{editing ? "Actualizar" : "Agregar"}</button>
                    {editing && <button onClick={() => setEditing(false)}>Cancelar</button>}
               </form>
               <table>
                    <thead>
                         <tr>
                              <th>ID</th>
                              <th>Nombre</th>
                              <th>Apellido</th>
                              <th>Acciones</th>
                         </tr>
                    </thead>
                    <tbody>
                         {data.map((item) => (
                              <tr key={item.id}>
                                   <td>{item.id}</td>
                                   <td>{item.nombre}</td>
                                   <td>{item.apellido}</td>
                                   <td>
                                        <button onClick={() => handleEdit(item.id)}>Editar</button>
                                        <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default Table;
