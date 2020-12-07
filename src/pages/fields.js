export const fields = [
    { Label: "SalaryId", Type: "text", Name: "salaryId", field: "salaryId", readonly: true, filtered: false, width: '50x' },
    { Label: "Position", Type: "text", Name: "position", field: "position", readonly: false, filtered: true, width: '250px' },
    { Label: "Value", Type: "text", Name: "value", field: "value", readonly: false, filtered: true, width: '100px' },
    { Label: "B2b", Type: "checkbox", Name: "b2b", field: "b2b", readonly: false, filtered: true, width: '100px' },
    { Label: "Company", Type: "text", Name: "company", field: "company", readonly: false, filtered: true, width: '100px' },
    { Label: "CreationDate", Type: "date", Name: "creationDate", field: "creationDate", readonly: false, filtered: true, width: '130px' },
    { Label: "Name", Type: "text", Name: "name", field: "name", readonly: false, filtered: true, width: '150px' },
    { Label: "Source", Type: "text", Name: "source", field: "source", readonly: false, filtered: true, width: '130px' },
    { Label: "Comment", Type: "text", Name: "comment", field: "comment", readonly: false, filtered: true, width: '400px' },
    { Label: "ValueConfirmed", Type: "number", Name: "valueConfirmed", field: "valueConfirmed", readonly: false, filtered: false, width: '50px' },
]

export default { fields, }