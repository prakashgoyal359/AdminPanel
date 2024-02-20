const students = [
    {
        sno:1,
        rollno:12365783,
        firstname:"Prakash",
        lastname:"Goyal",
        email:"prakashgoyal@gmail.com",
        course:"B.C.A"
    },
    {
        sno:2,
        rollno:12365323,
        firstname:"Ankit",
        lastname:"Misra",
        email:"ankit@gmail.com",
        course:"B.tech"
    },
    {
        sno:3,
        rollno:15361883,
        firstname:"Manoj",
        lastname:"Goyal",
        email:"manoj@gmail.com",
        course:"M.B.A"
    },
]

function loadstudent(){
    let tableBodyContent = ""

    students.forEach(students => {
        tableBodyContent += `
        <tr>
        <td class="py-1 px-4 border-b border-b-gray-50">
            <span class="text-slate-950 text-sm font-medium ml-2 truncate">${students.sno}</span>
        </td>
        <td class="py-1 px-4 border-b border-b-gray-50">
                <span class="text-slate-950 text-sm font-medium ml-2 truncate">${students.rollno}</span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-slate-950">${students.firstname}</span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-slate-950">${students.lastname}</span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-slate-950">${students.email}</span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
            <span class="text-[13px] font-medium text-slate-950">${students.course}</span>
        </td>
        <td class="py-2 px-4 border-b border-b-gray-50">
            <span><button class="rounded-md bg-blue-500 hover:bg-blue-800 shadow-xl text-white p-2 uppercase mr-2">Update</button></span>
            <span><button class="rounded-md bg-red-500 hover:bg-red-700 shadow-xl text-white p-2 uppercase">delete</button></span>
        </td>`
    })    

    const tableBody = document.getElementById("table-body")
    tableBody.innerHTML = tableBodyContent
}

loadstudent()

function saveStudent(){
    document.getElementById("")
}










