export const submissions = [
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "William Smith",
        email: "williamsmith@example.com",
        phone: "6212345678912",
        service: {
            name: "Perkara Perdata",
        },
        service_type: {
            name: "Penggugat",
        },
        description:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
    },
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775b",
        name: "William Smith",
        email: "williamsmith@example.com",
        phone: "6212345678912",
        service: {
            name: "Perkara Perdata",
        },
        service_type: {
            name: "Tergugat",
        },
        description:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
    },
    {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775c",
        name: "William Smith",
        email: "williamsmith@example.com",
        phone: "6212345678912",
        service: {
            name: "Perkara Cerai",
        },
        service_type: {
            name: "Penggugat",
        },
        description:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
    },
];

// export type Submission = (typeof submissions)[number];
export type Submission = {
    id: number;
    user_id: number;
    service_id: number;
    service_type_id?: number;
    name: string;
    email: string;
    no_handphone: string;
    status?: string;
    description: string;
    created_at: string;
    updated_at: string;
    service: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
    };
    service_type?: {
        id: 2;
        name: string;
        created_at: string;
        updated_at: string;
    };
};

export const contacts = [
    {
        name: "Emma Johnson",
        email: "emma.johnson@example.com",
    },
    {
        name: "Liam Wilson",
        email: "liam.wilson@example.com",
    },
    {
        name: "Olivia Davis",
        email: "olivia.davis@example.com",
    },
    {
        name: "Noah Martinez",
        email: "noah.martinez@example.com",
    },
    {
        name: "Ava Taylor",
        email: "ava.taylor@example.com",
    },
    {
        name: "Lucas Brown",
        email: "lucas.brown@example.com",
    },
    {
        name: "Sophia Smith",
        email: "sophia.smith@example.com",
    },
    {
        name: "Ethan Wilson",
        email: "ethan.wilson@example.com",
    },
    {
        name: "Isabella Jackson",
        email: "isabella.jackson@example.com",
    },
    {
        name: "Mia Clark",
        email: "mia.clark@example.com",
    },
    {
        name: "Mason Lee",
        email: "mason.lee@example.com",
    },
    {
        name: "Layla Harris",
        email: "layla.harris@example.com",
    },
    {
        name: "William Anderson",
        email: "william.anderson@example.com",
    },
    {
        name: "Ella White",
        email: "ella.white@example.com",
    },
    {
        name: "James Thomas",
        email: "james.thomas@example.com",
    },
    {
        name: "Harper Lewis",
        email: "harper.lewis@example.com",
    },
    {
        name: "Benjamin Moore",
        email: "benjamin.moore@example.com",
    },
    {
        name: "Aria Hall",
        email: "aria.hall@example.com",
    },
    {
        name: "Henry Turner",
        email: "henry.turner@example.com",
    },
    {
        name: "Scarlett Adams",
        email: "scarlett.adams@example.com",
    },
];

export type Contact = (typeof contacts)[number];
