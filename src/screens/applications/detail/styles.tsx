import { useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const useStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
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
        titleText: {
            color: theme.colors.onSurface
        },
        subTitleWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            gap: 6,
        },
        organisationText: {
            color: theme.colors.onSurface,
        },
        nextStepContainer: {
            marginTop: 16,
        },
        upcomingStepsContainer: {
            marginTop: 16,
            marginBottom: 64
        },
        stepContainer: {
            marginVertical: 8,
            borderRadius: 8,
        },
        stepHeader: {
            paddingHorizontal: 12,
            marginTop: 8,
        },
        stepTitle: {
            color: theme.colors.onSurface,
        },
        stepVenue: {
            color: theme.colors.onSurface,
        },
        subjectsWrapper: {
            marginVertical: 8,
        },
        chip: {
            marginLeft: 12,
        },
        lastChip: {
            marginRight: 12,
        },
        chipText: {
            ...theme.fonts.labelSmall
        },
        stepFooter: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            paddingHorizontal: 12,
        },
        stepDate: {
            color: theme.colors.onSurface,
        },
        stepTime: {
            color: theme.colors.onSurface,
            fontWeight: 'bold'
        },
        fab: {
            position: 'absolute'
        },
    });
};

export default useStyles;