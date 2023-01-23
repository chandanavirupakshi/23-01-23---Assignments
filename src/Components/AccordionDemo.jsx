import Accordion from 'react-bootstrap/Accordion';
function AccordionDemo({EmpArr}) {
    return
    (
        <>
            <h1>Displaying Employee Accordion Details: </h1>
            {EmpArr.map((i) => (
                <Accordion defaultActiveKey="" key={i.id} className="mb-3">
                    <Accordion.Item eventKey={i.eventKey} >
                        <Accordion.Header>Accordion Item {i.name}</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: `${i.color}` }}>
                            Employee Details of Employeen{i.id}:
                            <ul>              <li> Employee ID : {i.id}</li>
                                <li> Employee Name: {i.name}</li>
                                <li>Employee Address: {i.address}</li>
                                <li>Email :{i.email}</li>
                                <li>Phone: {i.phone}</li>
                            </ul>      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>),
            )}</>)
}
export default AccordionDemo;