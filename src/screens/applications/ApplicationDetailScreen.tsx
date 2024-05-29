import { Octicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { Chip, Divider, Surface, Text, useTheme } from "react-native-paper";

const MOCK_STEPS = [
    {
        id: 1,
        name: 'Introduction to Programming',
        description: 'An introductory course on programming concepts using Python.',
        datetime: '2024-06-01T09:00:00',
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
        datetime: '2024-06-08T10:00:00',
        venue: 'Room 202, Computer Science Building',
        subjects: [
            { id: 3, name: 'Graph Algorithms' },
            { id: 4, name: 'Dynamic Programming' }
        ],
        isDone: false
    },
    {
        id: 3,
        name: 'Database Systems',
        description: 'An overview of database design, management, and SQL.',
        datetime: '2024-06-15T11:00:00',
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
        datetime: '2024-06-22T12:00:00',
        venue: 'Room 404, Computer Science Building',
        subjects: [
            { id: 7, name: 'HTML and CSS' },
            { id: 8, name: 'JavaScript Basics' }
        ],
        isDone: false
    }
];

const ApplicationDetailScreen: React.FC = () => {
    const theme = useTheme();
    return (
        <ScrollView>
            <View style={styles.container}>
                <Surface style={[styles.titleCard, { backgroundColor: theme.colors.primary }]} mode='elevated'>
                    <Text variant="titleLarge" style={{ fontWeight: "bold", color: theme.colors.onPrimary }}>Lower Division Assistant</Text>
                    <View style={styles.organisationWrapper}>
                        <Octicons name="organization" size={16} color={theme.colors.onPrimary} />
                        <Text variant="bodyMedium" style={{ color: theme.colors.onPrimary }}>Department of Accounts & Treasuries</Text>
                    </View>
                </Surface>

                <View style={{ marginTop: 16 }}>
                    <Text variant="titleMedium" style={{}}>Upcoming Steps</Text>
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

    const timestamp = useMemo(() => dayjs(item.datetime), [item.datetime])

    return (
        <Surface style={styles.stepContainer} mode='flat'>
            <View style={{ marginBottom: 8 }}>
                <Text variant="titleMedium" style={{ fontWeight: "700", color: theme.colors.onSurface }}>{item.name}</Text>
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>{item.venue}</Text>
                <View style={styles.subjectsWrapper}>
                    {item.subjects.map(subject => {
                        return (
                            <Chip key={subject.id} compact={true}>
                                <Text variant='bodySmall'>{subject.name}</Text>
                            </Chip>
                        )
                    })}
                </View>
            </View>
            <Divider />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8
            }}>
                <Text variant="bodyMedium" style={{ fontWeight: "bold", color: theme.colors.onSurface }}>{timestamp.format('ddd, MMM D, YYYY')}</Text>
                <Text variant="bodyMedium" style={{ fontWeight: "bold", color: theme.colors.onSurface }}>{timestamp.format('h:mmA')}</Text>
            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'flex-start',
    },
    titleCard: {
        padding: 12,
        borderRadius: 8,
    },
    organisationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        gap: 6,
    },
    stepContainer: {
        padding: 12,
        marginVertical: 8,
        borderRadius: 8,
    },
    subjectsWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4
    }
});

export default ApplicationDetailScreen;
