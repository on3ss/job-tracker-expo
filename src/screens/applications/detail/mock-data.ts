import dayjs from "dayjs";

const MOCK_STAGES: GroupedStage[] = [
    {
        title: dayjs('2024-06-01T09:00:00'),
        data: [
            {
                id: 1,
                name: 'Introduction to Programming',
                description: 'An introductory course on programming concepts using Python.',
                datetime: dayjs('2024-06-01T09:00:00'),
                venue: 'Room 101, Computer Science Building',
                subjects: [
                    { id: 1, name: 'Variables and Data Types' },
                    { id: 2, name: 'Control Structures' }
                ],
                isDone: false
            },
            {
                id: 2,
                name: 'Advanced Algorithms',
                description: 'A deep dive into advanced algorithmic techniques and data structures.',
                datetime: dayjs('2024-06-01T10:00:00'),
                venue: 'Room 202, Computer Science Building',
                subjects: [
                    { id: 3, name: 'Graph Algorithms' },
                    { id: 4, name: 'Dynamic Programming' }
                ],
                isDone: false
            },
        ]
    },
    {
        title: dayjs('2024-06-15T11:00:00'),
        data: [
            {
                id: 3,
                name: 'Database Systems',
                description: 'An overview of database design, management, and SQL.',
                datetime: dayjs('2024-06-15T11:00:00'),
                venue: 'Room 303, Computer Science Building',
                subjects: [
                    { id: 5, name: 'Relational Databases' },
                    { id: 6, name: 'SQL Queries' }
                ],
                isDone: false
            },
            {
                id: 4,
                name: 'Web Development',
                description: 'Learning the basics of web development including HTML, CSS, and JavaScript.',
                datetime: dayjs('2024-06-22T12:00:00'),
                venue: 'Room 404, Computer Science Building',
                subjects: [
                    { id: 7, name: 'HTML and CSS' },
                    { id: 8, name: 'JavaScript Basics' }
                ],
                isDone: false
            }
        ]
    }
];

const MOCK_NEXT_STAGE: Stage = {
    id: 1,
    name: 'Introduction to Programming',
    description: 'An introductory course on programming concepts using Python.',
    datetime: dayjs('2024-06-01T09:00:00'),
    venue: 'Room 101, Computer Science Building',
    subjects: [
        { id: 1, name: 'Variables and Data Types' },
        { id: 2, name: 'Control Structures' }
    ],
    isDone: false
};

type GroupedStage = {
    title: dayjs.Dayjs,
    data: Stage[]
}

type Stage = {
    id: number,
    name: string,
    description: string,
    datetime: dayjs.Dayjs,
    venue: string,
    subjects: Subject[],
    isDone: boolean
}

type Subject = {
    id: number,
    name: string
}

export { MOCK_STAGES, MOCK_NEXT_STAGE, GroupedStage, Stage, Subject }