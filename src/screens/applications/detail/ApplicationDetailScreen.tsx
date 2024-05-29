import { Octicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { ScrollView, View } from "react-native";
import { Chip, Divider, Surface, Text, useTheme } from "react-native-paper";
import useStyles from './styles';
import { MOCK_STEPS, MOCK_NEXT_STEP } from './mock-data';

const ApplicationDetailScreen: React.FC = () => {
    const theme = useTheme();
    const styles = useStyles();
    return (
        <ScrollView>
            <View style={styles.container}>
                <Surface style={styles.titleCard} mode="flat">
                    <Text variant="titleLarge" style={styles.titleText}>Lower Division Assistant</Text>
                    <View style={styles.subTitleWrapper}>
                        <Octicons name="organization" size={16} color={theme.colors.onSurface} />
                        <Text variant="bodyMedium" style={styles.organisationText}>Department of Accounts & Treasuries</Text>
                    </View>
                    <View style={styles.subTitleWrapper}>
                        <Octicons name="browser" size={16} color={theme.colors.onSurface} />
                        <Text variant="bodyMedium" style={styles.organisationText}>MPSC</Text>
                    </View>
                </Surface>
                <View style={styles.stepsContainer}>
                    <Text variant="titleMedium">Next Step</Text>
                    <StepListItem item={MOCK_NEXT_STEP} />
                </View>
                <View style={styles.stepsContainer}>
                    <Text variant="titleMedium">Upcoming Steps</Text>
                    {MOCK_STEPS.map((item) => <StepListItem item={item} key={item.id} />)}
                </View>
            </View>
        </ScrollView>
    );
};

const StepListItem: React.FC<{ item: typeof MOCK_STEPS[0] }> = ({ item }) => {
    const theme = useTheme();
    const styles = useStyles();
    const timestamp = useMemo(() => dayjs(item.datetime), [item.datetime]);

    return (
        <Surface style={styles.stepContainer} mode="flat">
            <View style={styles.stepHeader}>
                <Text variant="titleMedium" style={styles.stepTitle}>{item.name}</Text>
                <Text variant="bodyMedium" style={styles.stepVenue}>{item.venue}</Text>
            </View>
            <ScrollView style={styles.subjectsWrapper} horizontal>
                {item.subjects.map((subject, index) => (
                    <Chip
                        key={subject.id}
                        compact
                        textStyle={styles.chipText}
                        style={[styles.chip, index === item.subjects.length - 1 && styles.lastChip]}
                    >
                        {subject.name}
                    </Chip>
                ))}
            </ScrollView>
            <Divider />
            <View style={styles.stepFooter}>
                <Text variant="bodyMedium" style={styles.stepDate}>{timestamp.format('ddd, MMM D, YYYY')}</Text>
                <Text variant="bodyMedium" style={styles.stepTime}>{timestamp.format('h:mmA')}</Text>
            </View>
        </Surface>
    );
};

export default ApplicationDetailScreen;
