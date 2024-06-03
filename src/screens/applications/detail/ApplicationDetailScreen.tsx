import { Octicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, SectionList, View } from "react-native";
import {
  Button,
  Chip,
  Divider,
  IconButton,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import useStyles from "./styles";
import { MOCK_STAGES, MOCK_NEXT_STAGE, Stage } from "./mock-data";

const ApplicationDetailScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Surface style={styles.titleCard} mode="flat">
          <Text variant="titleLarge" style={styles.titleText}>
            Lower Division Assistant
          </Text>
          <View style={styles.subTitleWrapper}>
            <Octicons
              name="organization"
              size={16}
              color={theme.colors.onSurface}
            />
            <Text variant="bodyMedium" style={styles.organisationText}>
              Department of Accounts & Treasuries
            </Text>
          </View>
          <View style={styles.subTitleWrapper}>
            <Octicons name="browser" size={16} color={theme.colors.onSurface} />
            <Text variant="bodyMedium" style={styles.organisationText}>
              MPSC
            </Text>
          </View>
        </Surface>
        <View style={styles.nextStepContainer}>
          <Text
            variant="titleMedium"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Next Stage
          </Text>
          <StepListItem item={MOCK_NEXT_STAGE} />
        </View>
        <View style={styles.upcomingStepsContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              variant="titleMedium"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Stages
            </Text>
            <IconButton
              icon="plus"
              mode="contained"
              iconColor={theme.colors.primary}
              size={18}
              onPress={() => console.log("New Stage")}
            />
          </View>
          <SectionList
            sections={MOCK_STAGES}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <StepListItem item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text variant="labelLarge" style={{ marginTop: 12 }}>
                {title.format("ddd, MMM D, YYYY")}
              </Text>
            )}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const StepListItem: React.FC<{ item: Stage }> = ({ item }) => {
  const styles = useStyles();

  return (
    <Surface style={styles.stepContainer} mode="flat">
      <View style={styles.stepHeader}>
        <Text variant="titleMedium" style={styles.stepTitle}>
          {item.name}
        </Text>
        <Text variant="bodyMedium" style={styles.stepVenue}>
          {item.venue}
        </Text>
      </View>
      <ScrollView style={styles.subjectsWrapper} horizontal>
        {item.subjects.map((subject, index) => (
          <Chip
            key={subject.id}
            compact
            textStyle={styles.chipText}
            style={[
              styles.chip,
              index === item.subjects.length - 1 && styles.lastChip,
            ]}
          >
            {subject.name}
          </Chip>
        ))}
      </ScrollView>
      <Divider />
      <View style={styles.stepFooter}>
        <Text variant="bodyMedium" style={styles.stepTime}>
          {item.datetime.format("h:mmA")}
        </Text>
        <Text variant="bodyMedium" style={styles.stepDate}>
          {item.datetime.format("ddd, MMM D, YYYY")}
        </Text>
      </View>
    </Surface>
  );
};

export default ApplicationDetailScreen;
