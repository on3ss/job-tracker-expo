import { Octicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const MOCK_STEPS = [
    {
        id: 1,
        name: 'Introduction to Programming',
        description: 'An introductory course on programming concepts using Python.',
        date: '2024-06-01',
        venue: 'Room 101, Computer Science Building',
        subjects: [
            {
                id: 1,
                name: 'Variables and Data Types'
            },
            {
                id: 2,
                name: 'Control Structures'
            },
        ],
        isDone: false,
    },
    {
        id: 2,
        name: 'Advanced Algorithms',
        description: 'A deep dive into advanced algorithmic techniques and data structures.',
        date: '2024-06-08',
        venue: 'Room 202, Computer Science Building',
        subjects: [
            {
                id: 3,
                name: 'Graph Algorithms'
            },
            {
                id: 4,
                name: 'Dynamic Programming'
            },
        ],
        isDone: false,
    },
    {
        id: 3,
        name: 'Database Systems',
        description: 'An overview of database design, management, and SQL.',
        date: '2024-06-15',
        venue: 'Room 303, Computer Science Building',
        subjects: [
            {
                id: 5,
                name: 'Relational Databases'
            },
            {
                id: 6,
                name: 'SQL Queries'
            },
        ],
        isDone: false,
    },
    {
        id: 4,
        name: 'Web Development',
        description: 'Learning the basics of web development including HTML, CSS, and JavaScript.',
        date: '2024-06-22',
        venue: 'Room 404, Computer Science Building',
        subjects: [
            {
                id: 7,
                name: 'HTML and CSS'
            },
            {
                id: 8,
                name: 'JavaScript Basics'
            },
        ],
        isDone: false,
    }
];

const ApplicationDetailScreen: React.FC = () => {
    const theme = useTheme();
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.titleCard, { backgroundColor: theme.colors.primary }]}>
                    <Text variant="titleLarge" style={{ fontWeight: "bold", color: theme.colors.onPrimary }}>Lower Division Assistant</Text>
                    <View style={styles.organisationWrapper}>
                        <Octicons name="organization" size={16} color="black" />
                        <Text variant="bodyMedium" style={{ color: theme.colors.onPrimary }}>Department of Accounts & Treasuries</Text>
                    </View>
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text variant="titleLarge" style={{ fontWeight: "bold" }}>Steps</Text>
                    {
                        Array.from(MOCK_STEPS).map((item) => (<StepListItem item={item} key={item.id} />))
                    }
                </View>
            </View>
        </ScrollView>
    );
};

const StepListItem: React.FC<{ item: typeof MOCK_STEPS[0] }> = ({ item }) => {
    const theme = useTheme()
    return (
        <View style={[styles.stepContainer, { shadowColor: theme.colors.shadow }]}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text variant="bodyMedium">{item.description}</Text>
            <Text variant="bodyMedium">{item.date}</Text>
            <Text variant="bodyMedium">{item.venue}</Text>
            <View>
                {item.subjects.map(subject => (
                    <Text key={subject.id} variant="bodySmall" style={{ marginLeft: 10 }}>
                        - {subject.name}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'flex-start',
    },
    titleCard: {
        padding: 16,
        borderRadius: 8,
    },
    organisationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        gap: 6,
    },
    stepContainer: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        elevation: 1,
    },
});

export default ApplicationDetailScreen;
