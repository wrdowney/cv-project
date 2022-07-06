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
    ]
};

export default TemplateCV;