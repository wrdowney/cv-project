import { v4 as uuidv4 } from 'uuid';

const TemplateCV = {
    information: [
        {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        description: "",
        },
    ],
    experience: [
        {
        id: uuidv4(),
        company: "",
        position: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
        }
    ],
    education: [
        {
            id: uuidv4(),
            school: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            description: "",
        }
    ]
};

export default TemplateCV;